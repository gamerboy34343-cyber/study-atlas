import re, os
from scope_css import scope_css

BASE = r"D:\divyaraj\New folder\study-atlas-site"
APPS_DIR = os.path.join(BASE, "apps")
OUT_DIR = os.path.join(BASE, "app")
MOD_DIR = os.path.join(OUT_DIR, "modules")
os.makedirs(MOD_DIR, exist_ok=True)

APPS = [
    {"folder": "bond-builder", "prefix": "bb", "has_hash": False, "init_call": None},
    {"folder": "chronicle-quest-india", "prefix": "cq", "has_hash": True, "init_call": "route();"},
    {"folder": "gaia-quest-adventures", "prefix": "gq", "has_hash": True, "init_call": "render();"},
    {"folder": "tense-treasures", "prefix": "tq", "has_hash": True, "init_call": "render();"},
    {"folder": "number-odyssey-quest", "prefix": "no", "has_hash": True, "init_call": "render();"},
]

def extract(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def get_between(src, start_tag, end_tag, from_idx=0):
    i = src.index(start_tag, from_idx)
    j = src.index(end_tag, i)
    return src[i+len(start_tag):j], i, j

results = {}

for a in APPS:
    path = os.path.join(APPS_DIR, a["folder"], "index.html")
    src = extract(path)
    prefix = a["prefix"]

    # 1. CSS
    css, _, _ = get_between(src, "<style>", "</style>")
    scoped_css = scope_css(css, prefix + "-scope")

    # 2. Body HTML (everything in <body> except <script> tags), plus collect external script srcs
    body, body_start, body_end = get_between(src, "<body>", "</body>")
    # remove all <script ...>...</script> blocks, but remember external ones (with src=)
    ext_scripts = re.findall(r'<script\s+src="([^"]+)"[^>]*></script>', body)
    body_html = re.sub(r'<script[^>]*>.*?</script>', '', body, flags=re.S)
    body_html = body_html.strip()

    # 3. JS: the LAST inline <script>...</script> in the body is the main app script
    script_blocks = re.findall(r'<script(?:\s[^>]*)?>(.*?)</script>', body, flags=re.S)
    # pick the longest block (the main logic), ignoring ones that are just src-only (already excluded, findall on inline captures content)
    main_js = max(script_blocks, key=len)

    if a["has_hash"]:
        # Strip shell-level prefix from location.hash reads: `location.hash.slice(2)` -> use a helper
        # Insert a HASH_PREFIX constant and rewrite `location.hash.slice(2)` to strip the longer prefix.
        # We standardize by rewriting the two known patterns used across these apps.
        main_js = main_js.replace(
            "location.hash.slice(2)",
            f"location.hash.replace(/^#\\/{prefix}\\/?/,'')"
        )
        # nav()/hashchange href strings: `#/xxx` -> `#/{prefix}/xxx`  (only ones written by these apps as `'#/'+` or `href=\"#/` or `location.hash = '#/`)
        main_js = main_js.replace("location.hash = '#/", f"location.hash = '#/{prefix}/")
        main_js = main_js.replace('href="#/', f'href="#/{prefix}/')
        main_js = main_js.replace("nav('#/", f"nav('#/{prefix}/")
        main_js = main_js.replace("location.hash='#/", f"location.hash='#/{prefix}/")
        main_js = main_js.replace("'#/'+path", f"'#/{prefix}/'+path")
        # guard + listener dedup: wrap the whole thing so re-init removes prior listener
        main_js = re.sub(
            r"window\.addEventListener\('hashchange',\s*(\w+)\);",
            (f"if(window.__{prefix}HashListener) window.removeEventListener('hashchange', window.__{prefix}HashListener);\n"
             f"window.__{prefix}HashListener = function(){{ if(!location.hash.startsWith('#/{prefix}')) return; \\1(); }};\n"
             f"window.addEventListener('hashchange', window.__{prefix}HashListener);"),
            main_js
        )

    wrapped = f"function {prefix}Init(){{\n{main_js}\n}}\n"
    wrapped += (f"window.SubjectApps = window.SubjectApps || {{}};\n"
                f"window.SubjectApps['{prefix}'] = {{ init: {prefix}Init }};\n")

    results[prefix] = {
        "css": scoped_css,
        "html": body_html,
        "js": wrapped,
        "ext_scripts": ext_scripts,
    }

    with open(os.path.join(MOD_DIR, f"{prefix}.js"), "w", encoding="utf-8") as f:
        f.write(wrapped)
    with open(os.path.join(MOD_DIR, f"{prefix}.css"), "w", encoding="utf-8") as f:
        f.write(scoped_css)
    with open(os.path.join(MOD_DIR, f"{prefix}.html"), "w", encoding="utf-8") as f:
        f.write(body_html)

    print(prefix, "css:", len(scoped_css), "html:", len(body_html), "js:", len(wrapped), "ext_scripts:", ext_scripts)

print("DONE")
