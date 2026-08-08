import re, sys

def scope_css(css, scope_class):
    """Scope a CSS string under .scope_class, converting :root to the scope class itself."""
    out = []
    i = 0
    n = len(css)
    while i < n:
        # skip whitespace/comments, copy verbatim
        if css[i:i+2] == '/*':
            end = css.find('*/', i+2)
            end = end+2 if end != -1 else n
            out.append(css[i:end])
            i = end
            continue
        if css[i].isspace():
            out.append(css[i]); i += 1; continue
        # find the next '{' to get the selector/at-rule prelude
        brace = css.find('{', i)
        if brace == -1:
            out.append(css[i:]); break
        prelude = css[i:brace]
        prelude_stripped = prelude.strip()
        # find matching closing brace for this block (handle nested for @media)
        depth = 1
        j = brace+1
        while j < n and depth > 0:
            if css[j] == '{': depth += 1
            elif css[j] == '}': depth -= 1
            j += 1
        block_inner = css[brace+1:j-1]
        if prelude_stripped.startswith('@media') or prelude_stripped.startswith('@supports'):
            # recurse into inner rules, keep the at-rule prelude as-is
            scoped_inner = scope_css(block_inner, scope_class)
            out.append(prelude + '{' + scoped_inner + '}')
        elif prelude_stripped.startswith('@keyframes') or prelude_stripped.startswith('@font-face') or prelude_stripped.startswith('@import') or prelude_stripped.startswith('@charset'):
            # leave completely untouched
            out.append(prelude + '{' + block_inner + '}')
        else:
            # normal rule (or :root) -> scope each comma-separated selector
            selectors = prelude.split(',')
            new_selectors = []
            for sel in selectors:
                s = sel.strip()
                if not s:
                    continue
                if s == ':root' or s == 'html' or s == 'body' or s == 'html,body' or s == 'html, body':
                    new_selectors.append('.' + scope_class)
                elif s.startswith(':root'):
                    # e.g. :root[data-theme="dark"]
                    new_selectors.append('.' + scope_class + s[len(':root'):])
                elif s == 'html body' or s == 'body html':
                    new_selectors.append('.' + scope_class)
                else:
                    new_selectors.append('.' + scope_class + ' ' + s)
            out.append(', '.join(new_selectors) + ' {' + block_inner + '}')
        i = j
    return ''.join(out)

if __name__ == '__main__':
    src_path, scope_class, out_path = sys.argv[1], sys.argv[2], sys.argv[3]
    with open(src_path, 'r', encoding='utf-8') as f:
        css = f.read()
    scoped = scope_css(css, scope_class)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(scoped)
    print('done', len(scoped))
