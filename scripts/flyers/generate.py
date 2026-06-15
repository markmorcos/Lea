#!/usr/bin/env python3
"""
Generate 5 print-ready marketing flyers for Lea Zoe Pfaffeneder.

Each flyer is built as a vector SVG at A5 portrait (420 x 595 pt) using the
website's exact palette, fonts ("Der Raum" brand), and logo, then rendered to
a print-ready PDF and a PNG preview via rsvg-convert.

Output: flyers/<name>.svg / .pdf / .png
"""
import os
import subprocess
import segno
from fontTools.ttLib import TTFont
from xml.sax.saxutils import escape

OUT = os.path.join(os.path.dirname(__file__), "..", "..", "flyers")
OUT = os.path.abspath(OUT)
os.makedirs(OUT, exist_ok=True)
FONT_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "src", "styles", "fonts")

# --- Palette (from src/styles/tokens/colors.css) ---------------------------
SAND_50, SAND_100, SAND_200, SAND_300 = "#FBF8F2", "#F5EFE4", "#ECE3D4", "#DED1BC"
SLATE_900, SLATE_700, SLATE_500, SLATE_400 = "#232E2A", "#3C4B45", "#5C6A64", "#7E8A84"
SAGE_700, SAGE_600, SAGE_500, SAGE_100, SAGE_50 = "#3C5A4C", "#4B6E5D", "#5E8472", "#DCE8E0", "#EDF3EF"
SAGE_900, SAGE_800 = "#243831", "#2F473B"
CLAY_600, CLAY_500, CLAY_100, CLAY_50 = "#A25836", "#BB6E47", "#F1DBCC", "#F9EEE6"

SERIF = "Spectral"
SERIF_MED = "Spectral Medium"
SERIF_SB = "Spectral SemiBold"
SANS = "Source Sans 3"
SANS_SB = "Source Sans 3 SemiBold"
MONO = "IBM Plex Mono"

W, H = 420.0, 595.0  # A5 portrait in points
MARGIN = 34.0

# --- Font metrics for accurate text wrapping -------------------------------
_FILES = {
    SERIF: "Spectral-Regular.woff2", SERIF_MED: "Spectral-Medium.woff2",
    SERIF_SB: "Spectral-SemiBold.woff2", SANS: "SourceSans3-Regular.woff2",
    SANS_SB: "SourceSans3-SemiBold.woff2", MONO: "IBMPlexMono-Regular.woff2",
}


class Metrics:
    def __init__(self, path):
        f = TTFont(path)
        self.upm = f["head"].unitsPerEm
        self.cmap = f.getBestCmap()
        self.hmtx = f["hmtx"]
        self.glyf = f.getGlyphOrder()
        self.gname = {c: f.getGlyphName(0) for c in []}

    def width(self, text, size):
        total = 0
        for ch in text:
            gid = self.cmap.get(ord(ch))
            name = gid if gid else ".notdef"
            try:
                aw = self.hmtx[name][0]
            except KeyError:
                aw = self.hmtx[self.glyf[0]][0]
            total += aw
        return total * size / self.upm


_metrics = {fam: Metrics(os.path.join(FONT_DIR, fn)) for fam, fn in _FILES.items()}


def wrap(text, family, size, max_w):
    m = _metrics[family]
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if m.width(trial, size) <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


# --- SVG building blocks ----------------------------------------------------
def t(x, y, s, family, size, fill, *, anchor="start", spacing=None, opacity=None):
    extra = f' letter-spacing="{spacing}"' if spacing is not None else ""
    extra += f' opacity="{opacity}"' if opacity is not None else ""
    return (f'<text x="{x:.1f}" y="{y:.1f}" font-family="{family}" '
            f'font-size="{size}" fill="{fill}" text-anchor="{anchor}"{extra}>'
            f'{escape(s)}</text>')


def paragraph(x, y, text, family, size, fill, max_w, leading, anchor="start"):
    out = []
    for i, ln in enumerate(wrap(text, family, size, max_w)):
        out.append(t(x, y + i * leading, ln, family, size, fill, anchor=anchor))
    return "\n".join(out), y + len(wrap(text, family, size, max_w)) * leading


def logo_mark(x, y, scale, stroke=SAGE_700, dot=CLAY_500):
    """The 'Der Raum' arch + dot, native 96x96 viewBox."""
    return (f'<g transform="translate({x},{y}) scale({scale})">'
            f'<path d="M22 82 V46 a26 26 0 0 1 52 0 V82" fill="none" '
            f'stroke="{stroke}" stroke-width="5.5" stroke-linecap="round"/>'
            f'<circle cx="48" cy="58" r="7.5" fill="{dot}"/></g>')


def eyebrow(x, y, text, fill=CLAY_600, anchor="start"):
    return t(x, y, text.upper(), MONO, 8.5, fill, anchor=anchor, spacing="2.2")


def qr_svg(data, x, y, size, dark=SLATE_900, light=None):
    """Return an SVG <g> of a QR code scaled to `size`, top-left at (x,y)."""
    qr = segno.make(data, error="m")
    matrix = qr.matrix
    n = len(matrix)
    cell = size / n
    rects = []
    if light:
        rects.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{size:.1f}" '
                     f'height="{size:.1f}" fill="{light}"/>')
    for r, row in enumerate(matrix):
        for c, v in enumerate(row):
            if v:
                rects.append(
                    f'<rect x="{x + c*cell:.2f}" y="{y + r*cell:.2f}" '
                    f'width="{cell:.2f}" height="{cell:.2f}" fill="{dark}"/>')
    return "".join(rects)


def header():
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}pt" height="{H}pt" viewBox="0 0 {W} {H}">'


def footer_bar(items, fill_bg=SAGE_900, fill_tx=SAND_50, y=H - 56):
    """Bottom contact band."""
    out = [f'<rect x="0" y="{y}" width="{W}" height="{H - y}" fill="{fill_bg}"/>']
    out.append(logo_mark(MARGIN - 4, y + 12, 0.30, stroke=SAND_100, dot=CLAY_500))
    cx = MARGIN + 28
    out.append(t(cx, y + 23, "pfaffeneder-psychologische-beratung.de", SANS_SB, 9.5, fill_tx))
    out.append(t(cx, y + 36, items, SANS, 8.5, "#C9D6CE"))
    return "\n".join(out)


def save(name, body):
    svg = header() + "\n" + body + "\n</svg>"
    sp = os.path.join(OUT, name + ".svg")
    with open(sp, "w") as f:
        f.write(svg)
    subprocess.run(["rsvg-convert", "-f", "pdf", "-o",
                    os.path.join(OUT, name + ".pdf"), sp], check=True)
    subprocess.run(["rsvg-convert", "-f", "png", "--dpi-x", "200", "--dpi-y", "200",
                    "-o", os.path.join(OUT, name + ".png"), sp], check=True)
    print("built", name)


# ===========================================================================
# FLYER 1 — Brand / general introduction  ("Der Raum")
# ===========================================================================
def flyer1():
    b = [f'<rect width="{W}" height="{H}" fill="{SAND_50}"/>']
    # soft arch watermark, large, top-right
    b.append(f'<g opacity="0.06"><g transform="translate(150,-40) scale(3.4)">'
             f'<path d="M22 82 V46 a26 26 0 0 1 52 0 V82" fill="none" '
             f'stroke="{SAGE_700}" stroke-width="6" stroke-linecap="round"/></g></g>')
    b.append(logo_mark(MARGIN - 6, 40, 0.42, stroke=SAGE_700))
    b.append(t(MARGIN + 34, 62, "Lea Zoe Pfaffeneder", SERIF_MED, 16, SLATE_900))
    b.append(eyebrow(MARGIN + 35, 76, "Psychologische Beratung"))

    y = 150
    b.append(eyebrow(MARGIN, y, "Beratung & Begleitung · Online"))
    y += 30
    for ln in wrap("Raum für das, was Sie gerade bewegt.", SERIF_SB, 33, W - 2 * MARGIN):
        b.append(t(MARGIN, y, ln, SERIF_SB, 33, SLATE_900))
        y += 38
    y += 6
    p, y = paragraph(MARGIN, y,
        "Psychologische Beratung & Begleitung — online und deutschlandweit. "
        "Ressourcenorientiert, wertschätzend und auf Augenhöhe. In Ruhe "
        "schauen wir gemeinsam auf Ihr Anliegen und stärken das, was Ihnen Halt gibt.",
        SANS, 11.5, SLATE_700, W - 2 * MARGIN, 17)
    b.append(p)

    # value pills
    y += 18
    pills = ["Vertraulich", "Ressourcenorientiert", "Auf Augenhöhe"]
    px = MARGIN
    for pl in pills:
        wd = _metrics[SANS_SB].width(pl, 9.5) + 22
        b.append(f'<rect x="{px}" y="{y-11}" width="{wd:.1f}" height="20" rx="10" '
                 f'fill="{SAGE_50}" stroke="{SAGE_100}"/>')
        b.append(t(px + 11, y + 3, pl, SANS_SB, 9.5, SAGE_700))
        px += wd + 8

    # meta row
    y += 40
    metas = ["Online · deutschlandweit", "Deutsch & English", "Erstgespräch unverbindlich"]
    for mta in metas:
        b.append(f'<circle cx="{MARGIN+3}" cy="{y-3:.0f}" r="2.5" fill="{CLAY_500}"/>')
        b.append(t(MARGIN + 14, y, mta, SANS, 11, SLATE_700))
        y += 20

    # CTA card with QR
    cy = 470
    b.append(f'<rect x="{MARGIN}" y="{cy}" width="{W-2*MARGIN}" height="64" rx="14" '
             f'fill="{SAGE_900}"/>')
    b.append(t(MARGIN + 20, cy + 26, "Termin anfragen", SERIF_SB, 15, SAND_50))
    b.append(t(MARGIN + 20, cy + 45, "Unverbindliches Kennenlernen — einfach Code scannen",
               SANS, 9.5, "#C9D6CE"))
    qx = W - MARGIN - 64
    b.append(f'<rect x="{qx-7}" y="{cy+8}" width="56" height="48" rx="6" fill="#FFFFFF"/>')
    b.append(qr_svg("https://cal.com/pfaffeneder/psychologische-beratung",
                    qx, cy + 8 + (48-44)/2, 44, dark=SAGE_900))

    b.append(footer_bar("Online · deutschlandweit  ·  Deutsch & English  ·  0155 6713 8410"))
    save("01-brand-intro", "\n".join(b))


# ===========================================================================
# FLYER 2 — Topics  ("Womit ich Sie begleite")
# ===========================================================================
def flyer2():
    b = [f'<rect width="{W}" height="{H}" fill="{SAND_50}"/>']
    b.append(f'<rect x="0" y="0" width="{W}" height="120" fill="{SAGE_900}"/>')
    b.append(logo_mark(MARGIN - 6, 26, 0.38, stroke=SAND_100, dot=CLAY_500))
    b.append(t(MARGIN + 32, 44, "Lea Zoe Pfaffeneder", SERIF_MED, 15, SAND_50))
    b.append(eyebrow(MARGIN + 33, 57, "Psychologische Beratung", fill="#C9D6CE"))
    b.append(t(MARGIN, 96, "Womit ich Sie begleite", SERIF_SB, 25, SAND_50))

    topics = [
        ("Stress & Überforderung", "Wenn der Alltag zu viel wird und Sie zur Ruhe kommen möchten."),
        ("Lebenskrisen & Veränderungen", "In Umbruchphasen Halt und neue Perspektiven finden."),
        ("Selbstwert & Selbstvertrauen", "Ein freundlicherer, stärkender Blick auf sich selbst."),
        ("Orientierung & Entscheidungen", "Klarheit gewinnen, wenn die Richtung unklar ist."),
        ("Belastende Beziehungen", "Muster verstehen und gut für sich sorgen."),
        ("Schwierige Gefühle", "Raum für das, was schwer wiegt — ohne Wertung."),
        ("Persönliche Weiterentwicklung", "Das stärken, was bereits in Ihnen angelegt ist."),
    ]
    y = 150
    b.append(t(MARGIN, y, "Themen, keine Diagnosen — für all das gibt es hier Platz.",
               SERIF, 12, SAGE_700))
    y += 26
    for i, (ti, bo) in enumerate(topics):
        b.append(f'<circle cx="{MARGIN+5}" cy="{y-4}" r="4.5" fill="{CLAY_100}"/>')
        b.append(f'<circle cx="{MARGIN+5}" cy="{y-4}" r="1.8" fill="{CLAY_600}"/>')
        b.append(t(MARGIN + 18, y, ti, SANS_SB, 12, SLATE_900))
        p, ny = paragraph(MARGIN + 18, y + 14, bo, SANS, 10, SLATE_500, W - 2 * MARGIN - 18, 13)
        b.append(p)
        y = ny + 12

    b.append(t(MARGIN, H - 78, "Online · deutschlandweit · Deutsch & English — Erstgespräch unverbindlich.",
               SANS, 9.5, SLATE_500))
    b.append(footer_bar("Termin: cal.com/pfaffeneder  ·  0155 6713 8410"))
    save("02-themen", "\n".join(b))


# ===========================================================================
# FLYER 3 — How it works & fees
# ===========================================================================
def flyer3():
    b = [f'<rect width="{W}" height="{H}" fill="{SAND_50}"/>']
    b.append(logo_mark(MARGIN - 6, 36, 0.36, stroke=SAGE_700))
    b.append(t(MARGIN + 30, 52, "Lea Zoe Pfaffeneder", SERIF_MED, 14, SLATE_900))
    b.append(eyebrow(MARGIN + 31, 64, "Psychologische Beratung"))

    y = 120
    b.append(eyebrow(MARGIN, y, "Ablauf & Kosten"))
    y += 26
    b.append(t(MARGIN, y, "In ruhigen Schritten —", SERIF_SB, 26, SLATE_900))
    y += 32
    b.append(t(MARGIN, y, "in Ihrem Tempo.", SERIF_SB, 26, SLATE_900))

    steps = [
        ("01", "Kennenlernen", "Ein kurzes, unverbindliches Erstgespräch."),
        ("02", "Anliegen klären", "Wir klären gemeinsam Ihr Anliegen und Ihre Ziele."),
        ("03", "Beratungssitzungen", "Regelmäßige Gespräche (i. d. R. 50 Min.), in Ihrem Tempo."),
        ("04", "Abschluss & Reflexion", "Wir sichern, was Sie mitnehmen."),
    ]
    y += 34
    lx = MARGIN + 6
    for i, (n, ti, bo) in enumerate(steps):
        cy0 = y - 5
        if i < len(steps) - 1:
            b.append(f'<line x1="{lx}" y1="{cy0+12}" x2="{lx}" y2="{cy0+48}" '
                     f'stroke="{SAND_300}" stroke-width="1.5"/>')
        b.append(f'<circle cx="{lx}" cy="{cy0}" r="13" fill="{SAGE_50}" stroke="{SAGE_100}"/>')
        b.append(t(lx, cy0 + 3.5, n, MONO, 9, SAGE_700, anchor="middle"))
        b.append(t(lx + 26, y, ti, SANS_SB, 12.5, SLATE_900))
        p, _ = paragraph(lx + 26, y + 15, bo, SANS, 10.5, SLATE_500, W - 2 * MARGIN - 26, 14)
        b.append(p)
        y += 60

    # Price card
    cy = 452
    b.append(f'<rect x="{MARGIN}" y="{cy}" width="{W-2*MARGIN}" height="78" rx="14" '
             f'fill="{SAGE_900}"/>')
    b.append(eyebrow(MARGIN + 22, cy + 24, "Kosten", fill="#C9D6CE"))
    b.append(t(MARGIN + 22, cy + 56, "45 €", SERIF_SB, 30, SAND_50))
    b.append(t(MARGIN + 92, cy + 56, "/ 50 Minuten", SANS, 12, "#C9D6CE"))
    b.append(t(W - MARGIN - 22, cy + 30, "Erstgespräch", SANS_SB, 11, CLAY_100, anchor="end"))
    b.append(t(W - MARGIN - 22, cy + 46, "unverbindlich", SANS_SB, 11, CLAY_100, anchor="end"))
    b.append(t(W - MARGIN - 22, cy + 64, "Selbstzahlerleistung", SANS, 9, "#9DBBA8", anchor="end"))

    b.append(footer_bar("Online · deutschlandweit  ·  0155 6713 8410"))
    save("03-ablauf-kosten", "\n".join(b))


# ===========================================================================
# FLYER 4 — Call to action / book the intro call (poster-ish, QR-forward)
# ===========================================================================
FLYER4 = {
    "de": {
        "subtitle": "Psychologin (M.Sc.) · Psychologische Beratung",
        "eyebrow": "Meine Haltung",
        "quote": "„Es kommt nicht darauf an, was man aus uns gemacht hat, "
                 "sondern darauf, was wir aus dem machen, was man aus uns "
                 "gemacht hat.“",
        "quote_author": "Jean-Paul Sartre",
        "lead": "Mir ist wichtig, Dich als ganzen Menschen zu sehen – mit Deiner "
                "Geschichte, Deinen Mustern und vor allem Deinen Ressourcen. Ich "
                "freue mich, Dich ein Stück auf Deinem Weg zu begleiten.",
        "price_unit": "/ 50 Minuten",
        "price_note": "Erstgespräch unverbindlich · Online & deutschlandweit",
        "qr_title": "Lass uns sprechen",
        "qr_sub": "Online buchen oder Code scannen:",
        "footer": "pfaffeneder-psychologische-beratung.de  ·  0155 6713 8410",
        "name": "04-termin-cta-de",
    },
    "en": {
        "subtitle": "Psychologist (M.Sc.) · Psychological counselling",
        "eyebrow": "My approach",
        "quote": "“What matters is not what has been made of us, but what we "
                 "make of what has been made of us.”",
        "quote_author": "Jean-Paul Sartre",
        "lead": "It matters to me to see you as a whole person – with your story, "
                "your patterns and, above all, your resources. I'd be glad to "
                "walk part of your path with you.",
        "price_unit": "/ 50 minutes",
        "price_note": "No-obligation first session · online, across Germany",
        "qr_title": "Let's talk",
        "qr_sub": "Book online or scan the code:",
        "footer": "pfaffeneder-psychologische-beratung.de  ·  +49 155 6713 8410",
        "name": "04-termin-cta-en",
    },
}


def flyer4(lang):
    c = FLYER4[lang]
    b = [f'<rect width="{W}" height="{H}" fill="{SAGE_900}"/>']
    # large faint arch
    b.append(f'<g opacity="0.10"><g transform="translate(120,150) scale(3.8)">'
             f'<path d="M22 82 V46 a26 26 0 0 1 52 0 V82" fill="none" '
             f'stroke="{SAND_50}" stroke-width="6" stroke-linecap="round"/>'
             f'<circle cx="48" cy="58" r="7.5" fill="{CLAY_500}"/></g></g>')
    b.append(logo_mark(MARGIN - 6, 38, 0.40, stroke=SAND_50, dot=CLAY_500))
    b.append(t(MARGIN + 32, 56, "Lea Zoe Pfaffeneder", SERIF_MED, 15, SAND_50))
    b.append(eyebrow(MARGIN + 33, 69, c["subtitle"], fill="#C9D6CE"))

    y = 150
    b.append(eyebrow(MARGIN, y, c["eyebrow"], fill=CLAY_100))
    y += 38
    # featured quote
    for ln in wrap(c["quote"], SERIF_MED, 21, W - 2 * MARGIN):
        b.append(t(MARGIN, y, ln, SERIF_MED, 21, SAND_50))
        y += 29
    y += 8
    b.append(f'<rect x="{MARGIN}" y="{y-4}" width="18" height="2" rx="1" fill="{CLAY_500}"/>')
    b.append(t(MARGIN + 28, y, c["quote_author"], SANS_SB, 10.5, CLAY_100))
    y += 28
    # warm, personal note (her voice)
    p, y = paragraph(MARGIN, y, c["lead"], SANS, 11, "#C9D6CE", W - 2 * MARGIN, 15.5)
    b.append(p)

    # price row
    y += 24
    b.append(t(MARGIN, y, "45 €", SERIF_SB, 28, SAND_50))
    pw = _metrics[SERIF_SB].width("45 €", 28)
    b.append(t(MARGIN + pw + 10, y, c["price_unit"], SANS, 12, "#9DBBA8"))
    b.append(t(MARGIN, y + 17, c["price_note"], SANS, 10, "#9DBBA8"))

    # QR panel
    cy = 432
    b.append(f'<rect x="{MARGIN}" y="{cy}" width="{W-2*MARGIN}" height="92" rx="16" '
             f'fill="{SAND_50}"/>')
    b.append(f'<rect x="{MARGIN+18}" y="{cy+15}" width="62" height="62" rx="8" fill="#FFFFFF"/>')
    b.append(qr_svg("https://cal.com/pfaffeneder/psychologische-beratung",
                    MARGIN + 23, cy + 20, 52, dark=SAGE_900))
    tx = MARGIN + 98
    b.append(t(tx, cy + 35, c["qr_title"], SERIF_SB, 15, SLATE_900))
    b.append(t(tx, cy + 53, c["qr_sub"], SANS, 10, SLATE_500))
    b.append(t(tx, cy + 69, "cal.com/pfaffeneder", SANS_SB, 11.5, CLAY_600))

    b.append(footer_bar(c["footer"], fill_bg=SAGE_800))
    save(c["name"], "\n".join(b))


# ===========================================================================
# FLYER 5 — English / international clients
# ===========================================================================
def flyer5():
    b = [f'<rect width="{W}" height="{H}" fill="{SAND_50}"/>']
    b.append(f'<rect x="0" y="0" width="14" height="{H}" fill="{CLAY_500}"/>')
    b.append(logo_mark(MARGIN, 40, 0.42, stroke=SAGE_700))
    b.append(t(MARGIN + 40, 62, "Lea Zoe Pfaffeneder", SERIF_MED, 16, SLATE_900))
    b.append(eyebrow(MARGIN + 41, 76, "Psychological Counselling"))

    y = 152
    b.append(eyebrow(MARGIN, y, "Counselling & support · Online"))
    y += 30
    for ln in wrap("Space for what's on your mind right now.", SERIF_SB, 31, W - 2 * MARGIN - 14):
        b.append(t(MARGIN, y, ln, SERIF_SB, 31, SLATE_900))
        y += 36
    y += 8
    p, y = paragraph(MARGIN, y,
        "Psychological counselling & support in English — online, across "
        "Germany. Resource-oriented, respectful and at eye level. Together we "
        "look calmly at what's on your mind and strengthen what steadies you.",
        SANS, 11.5, SLATE_700, W - 2 * MARGIN - 14, 17)
    b.append(p)

    y += 18
    chips = ["Stress & overwhelm", "Life changes", "Self-worth", "Decisions", "Personal growth"]
    px, py = MARGIN, y
    for c in chips:
        wd = _metrics[SANS_SB].width(c, 9.5) + 20
        if px + wd > W - MARGIN:
            px = MARGIN
            py += 26
        b.append(f'<rect x="{px}" y="{py-11}" width="{wd:.1f}" height="20" rx="10" '
                 f'fill="{CLAY_50}" stroke="{CLAY_100}"/>')
        b.append(t(px + 10, py + 3, c, SANS_SB, 9.5, CLAY_600))
        px += wd + 7
    y = py + 34

    for mta in ["Online · across Germany", "Sessions in German & English",
                "No-obligation intro call · €45 / 50 min"]:
        b.append(f'<circle cx="{MARGIN+3}" cy="{y-3:.0f}" r="2.5" fill="{SAGE_600}"/>')
        b.append(t(MARGIN + 14, y, mta, SANS, 11, SLATE_700))
        y += 20

    cy = 472
    b.append(f'<rect x="{MARGIN}" y="{cy}" width="{W-2*MARGIN}" height="64" rx="14" '
             f'fill="{SAGE_900}"/>')
    b.append(t(MARGIN + 20, cy + 26, "Book an appointment", SERIF_SB, 15, SAND_50))
    b.append(t(MARGIN + 20, cy + 45, "Scan the code for a no-obligation intro call", SANS, 9.5, "#C9D6CE"))
    qx = W - MARGIN - 64
    b.append(f'<rect x="{qx-7}" y="{cy+8}" width="56" height="48" rx="6" fill="#FFFFFF"/>')
    b.append(qr_svg("https://cal.com/pfaffeneder/psychologische-beratung",
                    qx, cy + 10, 44, dark=SAGE_900))

    b.append(footer_bar("Online · across Germany  ·  German & English  ·  +49 155 6713 8410"))
    save("05-english", "\n".join(b))


if __name__ == "__main__":
    flyer4("de")
    flyer4("en")
    print("\nAll flyers written to", OUT)
