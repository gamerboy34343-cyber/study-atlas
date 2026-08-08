import os

BASE = r"D:\divyaraj\New folder\study-atlas-site\app"
MOD_DIR = os.path.join(BASE, "modules")

def read(name):
    with open(os.path.join(MOD_DIR, name), "r", encoding="utf-8") as f:
        return f.read()

SUBJECTS = [
    {"prefix": "bb", "emoji": "🧪", "name": "Bond Builder", "sub": "Ionic & Covalent Bonds"},
    {"prefix": "cq", "emoji": "🏰", "name": "Empire Chronicles", "sub": "Medieval India"},
    {"prefix": "gq", "emoji": "🌱", "name": "Gaia Quest", "sub": "Natural Resources"},
    {"prefix": "tq", "emoji": "📖", "name": "Tense Quest", "sub": "English Tenses"},
    {"prefix": "no", "emoji": "🔢", "name": "Math Odyssey", "sub": "Story of Numbers"},
]

styles = ""
templates = ""
for s in SUBJECTS:
    p = s["prefix"]
    css = read(f"{p}.css")
    html = read(f"{p}.html")
    styles += f"\n/* ===== {p} ===== */\n{css}\n"
    templates += f'\n<template id="tpl-{p}">\n{html}\n</template>\n'

with open(os.path.join(BASE, "_build", "subject_styles.css"), "w", encoding="utf-8") as f:
    f.write(styles)
with open(os.path.join(BASE, "_build", "subject_templates.html"), "w", encoding="utf-8") as f:
    f.write(templates)

print("styles:", len(styles), "templates:", len(templates))
