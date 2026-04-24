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
| **Design** | Clean, modern, summery — Blau/Grün/Amber Farbpalette |

---

## Seiten

| Datei | Seite | Beschreibung |
|---|---|---|
| `index.html` | Startseite | Hero mit Orbit-Animation, Stats, Vorteile, Split-CTA, Standort/Einsatzgebiet, Prozess, Testimonial |
| `ueber-uns.html` | Über uns | Mission, Werte, Geschichte, Fachbereiche |
| `unternehmen.html` | Für Unternehmen | Zielgruppen, Vorteile, 3-Schritt-Anfrage-Modal |
| `karriere.html` | Karriere & Stellen | 11 Stellenangebote, 5 Filterkategorien, 3-Schritt-Bewerbungs-Modal |
| `kontakt.html` | Kontakt | Formular, Kontaktdaten |
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
│   └── logo.png
│
├── css/
│   └── style.css         # Haupt-Stylesheet (alle Seiten)
│
├── js/
│   └── main.js           # Navigation, Animationen, Count-up, Formulare
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
| `--primary` | `#0ea5e9` | Sky-Blau — Buttons, Links, Akzente |
| `--primary-dark` | `#0284c7` | Hover-Zustände |
| `--primary-light` | `#e0f2fe` | Hintergründe, Badges |
| `--secondary` | `#10b981` | Emerald-Grün — Erfolgsstatus, Akzente |
| `--secondary-light` | `#d1fae5` | Grüne Hintergründe |
| `--accent` | `#f59e0b` | Amber — Highlights, Orbit-Bubbles |
| `--bg-subtle` | `#f5f5f7` | Abschnittshintergründe |
| `--text` | `#1a1a1a` | Primärtext |
| `--text-2` | `#6e6e73` | Sekundärtext |

### Typografie

- **Font:** Inter (Google Fonts) + System-Fallback
- **H1:** `clamp(2.4rem, 5vw, 4rem)` — Bold
- **H2:** `clamp(1.8rem, 3.5vw, 2.8rem)` — Bold
- **Body:** `17px / 1.65` — Regular

### Breakpoints

| Breakpoint | Verhalten |
|---|---|
| `> 1024px` | Desktop — 4-Spalten-Grid, volle Navigation |
| `≤ 1024px` | Tablet — 2-Spalten-Grid |
| `≤ 768px` | Mobile — 1 Spalte, Hamburger-Menü |
| `≤ 480px` | Small Mobile — angepasste Schriftgrößen |

---

## Animationen

### Hero & Global

| Animation | Dauer | Beschreibung |
|---|---|---|
| `heroGradient` | 14s Loop | Hintergrund-Gradient verschiebt sich sanft |
| `orbFloat1/2` | 18–22s Loop | Hintergrund-Orbs driften |
| `badgePulse` | 3.5s Loop | Hero-Badge leuchtet subtil auf |
| `heroFadeUp` | 0.7s einmalig | Text-Elemente blenden gestaffelt ein |
| `shimmer` | 4s Loop | Headline-Wort "wirklich" — Blau→Grün Gradient |
| `btnShimmer` | 4s Loop | Alle Primary-Buttons — durchlaufender Lichteffekt |
| `splitGloss` | 4s Loop | Split-Sektion Homepage — gemeinsamer Glanz-Sweep |

### Orbit-Animation (alle Seiten)

Jede Seite hat eine `.hero__visual` / `.page-hero__visual` mit zwei Umlaufbahnen:

- **Innere Bahn** (`.ho-orbit--in`): 3 Bubbles, 11s im Uhrzeigersinn
- **Äußere Bahn** (`.ho-orbit--out`): 3 Bubbles, 17s gegen den Uhrzeigersinn
- Icons bleiben via Gegen-Rotation immer aufrecht
- Farben: `.ho-sky`, `.ho-amber`, `.ho-green`, `.ho-pink`, `.ho-violet`, `.ho-rose`

### Scroll-Animationen

Cards, Job-Cards, Steps und Testimonials werden mit `IntersectionObserver` eingeblendet (`.scroll-hidden` → `.scroll-visible`). Fallback-Timer nach 800ms.

### Count-up (alle Seiten)

Zahlen in `.stats__number` zählen beim Einblenden hoch — Ease-out cubic, 1.6s Dauer.

---

## Navbar (Island-Style)

Die Navigation ist als schwebendes Island-Element umgesetzt:

```css
.nav {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 18px;
  backdrop-filter: blur(16px);
}
```

- Wird beim Scrollen dunkler (`.scrolled`)
- CTA-Button (`nav__cta`) hat weiße Schrift (`color: #fff !important`)
- Mobile: Hamburger-Menü mit Slide-down Panel

---

## Modals

### Bewerbungs-Modal (`karriere.html`)

3-Schritt-Stepper für Stellenbewerbungen:

| Schritt | Felder |
|---|---|
| 1 — Kontakt | Vorname, Nachname, E-Mail, Telefon |
| 2 — Qualifikation | Abschluss, Anschreiben |
| 3 — Unterlagen | Datei-Upload (Pflicht), Datenschutz |

- Drag & Drop Datei-Upload, max. 10 MB pro Datei
- Schrittweise Validierung vor Weiter-Navigation
- Abgeschlossene Schritte zeigen grünes Häkchen

### Anfrage-Modal (`unternehmen.html`)

3-Schritt-Stepper für Personalanfragen von Einrichtungen:

| Schritt | Felder |
|---|---|
| 1 — Kontakt | Vorname, Nachname, Einrichtung, E-Mail, Telefon |
| 2 — Bedarf | Art der Stelle, Anzahl, Einsatz ab, Einsatzdauer |
| 3 — Übersicht | Zusammenfassung, Anmerkungen, Kontaktweg-Wahl |

---

## Bilder

Alle Bilder kommen von **Unsplash** (kostenlose kommerzielle Lizenz):

| Seite | Platzierung | Beschreibung |
|---|---|---|
| `index.html` | Prozess-Sektion | Pflegekraft mit älterer Dame |
| `index.html` | Photo-Banner | Pflegeteam — mit Zitat-Overlay |
| `ueber-uns.html` | Mission-Sektion | Professionelle Pflegefachkraft |
| `ueber-uns.html` | Photo-Banner | Pflegeteam — mit Zitat-Overlay |
| `unternehmen.html` | Vorteile-Sektion | Pflegerin im Gespräch mit Patientin |
| `karriere.html` | Photo-Banner | Pflegefachkraft — mit Zitat-Overlay |

---

## Kontaktformular

Das Formular auf `kontakt.html` ist aktuell **frontend-only** (Demo-Modus). Für echten E-Mail-Versand:

**Empfohlene Optionen:**
- [Formspree](https://formspree.io) — kostenfrei bis 50 Einsendungen/Monat
- [Netlify Forms](https://www.netlify.com/products/forms/) — bei Hosting über Netlify
- PHP-Skript auf eigenem Server

```html
<!-- Formspree einbinden: -->
<form action="https://formspree.io/f/DEIN_FORMULAR_ID" method="POST">
```

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

Rein statische Website — läuft auf jedem Webserver oder Static-Hosting:

```bash
# GitHub Pages
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USER/zeitblick-personal.git
git push -u origin main
# → GitHub Settings → Pages → Branch: main → / (root)
```

**Weitere Optionen:** Netlify, Vercel, Strato, IONOS, All-Inkl.

---

## TODO / Nächste Schritte

- [x] Navbar CTA-Button Schriftfarbe auf Weiß gesetzt
- [x] Favicon eingebunden (`assets/favicon.svg`)
- [x] SEO: `og:image`, `og:description` Meta-Tags auf allen Seiten
- [x] Standort-Sektion auf Startseite (Adresse, Telefon, Einsatzgebiet)
- [x] Karriere-Seite: 11 Stellenangebote in 5 Kategorien (Fachkräfte, Assistenz, Hilfskräfte, Medizin, Hauswirtschaft)
- [ ] Kontaktformular-Backend einbinden (Formspree o.ä.)
- [ ] Unsplash-Bilder durch lizenzfreie Eigenfotos ersetzen
- [ ] Cookie-Banner (DSGVO)
- [ ] Google Analytics / Matomo optional einbinden
- [ ] Domain verknüpfen & SSL sicherstellen
- [ ] Stellenangebote dynamisch verwalten (z.B. via CMS)
