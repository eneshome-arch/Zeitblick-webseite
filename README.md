# Zeitblick Personalservice — Website

Statische Unternehmenswebsite für **Zeitblick Personalservice**, eine Zeitarbeitsfirma für Altenpflege mit Sitz in Hannover.

---

## Projektübersicht

| | |
|---|---|
| **Kunde** | Zeitblick Personalservice |
| **Branche** | Pflege-Zeitarbeit / Personalvermittlung |
| **Standort** | Hannover, Deutschland |
| **Typ** | Statische HTML/CSS/JS Website |
| **Design** | Apple / OpenAI — clean, minimal, premium |

---

## Seiten

| Datei | Seite | Beschreibung |
|---|---|---|
| `index.html` | Startseite | Hero, Stats, Vorteile, Split-CTA, Prozess, Testimonial |
| `ueber-uns.html` | Über uns | Mission, Werte, Geschichte, Fachbereiche |
| `unternehmen.html` | Für Unternehmen | Zielgruppen, Vorteile, 48h-Versprechen, Prozess |
| `karriere.html` | Karriere & Stellen | 6 Stellenangebote, Filter, Bewerbungs-Modal |
| `kontakt.html` | Kontakt | Formular, Google Maps, Öffnungszeiten |
| `impressum.html` | Impressum | Pflichtangaben nach § 5 TMG |
| `datenschutz.html` | Datenschutz | DSGVO-konforme Datenschutzerklärung |

---

## Projektstruktur

```
zeitblick-personal/
├── index.html
├── ueber-uns.html
├── unternehmen.html
├── karriere.html
├── kontakt.html
├── impressum.html
├── datenschutz.html
│
├── assets/
│   └── logo.png          # Original-Logo (übernommen von zeitblick-personal.de)
│
├── css/
│   └── style.css         # Haupt-Stylesheet (alle Seiten)
│
├── js/
│   └── main.js           # Navigation, Animationen, Formulare
│
└── README.md
```

---

## Lokal starten

```bash
cd zeitblick-personal
python3 -m http.server 8080
```

Dann im Browser öffnen: **http://localhost:8080**

---

## Design-System

### Farben

| Variable | Hex | Verwendung |
|---|---|---|
| `--primary` | `#1a5096` | Buttons, Links, Akzente (Blau aus Logo) |
| `--primary-dark` | `#0e3a6e` | Hover-Zustände |
| `--primary-light` | `#e8f1fb` | Hintergründe, Badges |
| `--secondary` | `#2b5219` | Grün-Elemente (Grün aus Logo) |
| `--secondary-light` | `#eaf2e6` | Grüne Hintergründe |
| `--bg-subtle` | `#f5f5f7` | Abschnittshintergründe |
| `--bg-dark` | `#111111` | Footer, Dark Sections |
| `--text` | `#1a1a1a` | Primärtext |
| `--text-2` | `#6e6e73` | Sekundärtext, Fließtext |

### Typografie

- **Font:** Inter (Google Fonts) + System-Fallback
- **H1:** `clamp(2.4rem, 5vw, 4rem)` — Bold
- **H2:** `clamp(1.8rem, 3.5vw, 2.8rem)` — Bold
- **Body:** `17px / 1.65` — Regular
- **Antialiasing:** `-webkit-font-smoothing: antialiased`

### Breakpoints

| Breakpoint | Verhalten |
|---|---|
| `> 1024px` | Desktop — 4-Spalten-Grid, volle Navigation |
| `≤ 1024px` | Tablet — 2-Spalten-Grid |
| `≤ 768px` | Mobile — 1 Spalte, Hamburger-Menü |
| `≤ 480px` | Small Mobile — angepasste Schriftgrößen |

---

## Hero-Animationen

Die Hero-Sektion hat vier überlagerte CSS-Animationen:

| Animation | Dauer | Beschreibung |
|---|---|---|
| `heroGradient` | 14s Loop | Hintergrund-Gradient verschiebt sich sanft |
| `orbFloat1` | 18s Loop | Blauer Orb driftet langsam |
| `orbFloat2` | 22s Loop | Grüner Orb driftet in Gegenrichtung |
| `badgePulse` | 3.5s Loop | Badge leuchtet subtil auf |
| `heroFadeUp` | 0.7s einmalig | Text-Elemente blenden gestaffelt ein |
| `shimmer` | 4s Loop | "wirklich" — Blau→Grün Gradient-Shimmer |

---

## Kontaktformular

Das Formular auf `kontakt.html` ist aktuell **frontend-only** (Demo-Modus mit simuliertem Versand). Für echten E-Mail-Versand muss ein Backend oder ein Dienst eingebunden werden:

**Empfohlene Optionen:**
- [Formspree](https://formspree.io) — kostenfrei bis 50 Einsendungen/Monat
- [Netlify Forms](https://www.netlify.com/products/forms/) — bei Hosting über Netlify
- PHP-Skript auf eigenem Server

**Formspree einbinden:**
```html
<form action="https://formspree.io/f/DEIN_FORMULAR_ID" method="POST">
```

---

## Google Maps

Die Karte auf der Kontaktseite nutzt einen einfachen Google Maps iFrame **ohne API-Key**:

```html
<iframe src="https://maps.google.com/maps?q=Vahrenwalder+Stra%C3%9Fe+255,+30179+Hannover&output=embed">
```

Für erweiterte Funktionen (Routing, Marker-Styling) kann die [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) mit einem API-Key genutzt werden.

---

## Firmendaten

```
Zeitblick Personalservice
Vahrenwalder Straße 255
30179 Hannover

Tel:   +49 163 864 4309
Mail:  info@zeitblick-personal.de
USt:   95760381941
```

---

## Deployment

Da es sich um eine rein statische Website handelt, kann sie auf jedem Webserver oder Static-Hosting-Dienst betrieben werden:

```bash
# GitHub Pages
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USER/zeitblick-personal.git
git push -u origin main
# → In GitHub Settings: Pages → Branch: main → / (root)
```

**Weitere Optionen:** Netlify, Vercel, Strato, IONOS, All-Inkl.

---

## TODO / Nächste Schritte

- [ ] Kontaktformular-Backend einbinden (Formspree o.ä.)
- [ ] Echte Fotos / Bilder einpflegen
- [ ] SEO: `og:image`, `og:description` Meta-Tags ergänzen
- [ ] Favicon einbinden
- [ ] Google Analytics / Matomo optional einbinden
- [ ] Domain verknüpfen
- [ ] SSL-Zertifikat sicherstellen (HTTPS)
- [ ] Stellenangebote dynamisch verwalten (z.B. via CMS)
