import os

BASE = r"D:\divyaraj\New folder\study-atlas-site\app"
BUILD = os.path.join(BASE, "_build")

with open(os.path.join(BUILD, "shell_template.html"), "r", encoding="utf-8") as f:
    shell = f.read()
with open(os.path.join(BUILD, "subject_styles.css"), "r", encoding="utf-8") as f:
    styles = f.read()
with open(os.path.join(BUILD, "subject_templates.html"), "r", encoding="utf-8") as f:
    templates = f.read()

shell = shell.replace("/*__SUBJECT_STYLES__*/", styles)
shell = shell.replace("<!--__SUBJECT_TEMPLATES__-->", templates)

out_path = os.path.join(BASE, "index.html")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(shell)

print("wrote", out_path, len(shell), "chars")
