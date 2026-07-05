# BUKURA · Albanië Reisgids — WordPress-installatiegids

Dit pakket zet je prototype **live in het huidige design** met zo min mogelijk werk.
Volg de stappen op volgorde. Geschatte tijd: **een dagdeel**.

**Bestanden in dit pakket**
| Bestand | Wat het is |
|---|---|
| `bukura-styles.css` | De volledige stylesheet (inclusief lettertypen). Eén keer site-breed laden. |
| `1-homepage-blok.html` | De complete homepage om in één Custom HTML-blok te plakken. |
| `2-calculator-blok.html` | De budget-calculator als losstaand blok (werkt overal, ook los). |
| `3-blog-bouwstenen.html` | Herbruikbare blokken: inhoudsopgave, affiliate-blokken, callout, eind-CTA. |

> **Aanbevolen thema:** Kadence of GeneratePress (allebei licht en snel). De stappen werken op beide; waar het verschilt staat het erbij.

---

## STAP 1 — Laad de stylesheet site-breed (eenmalig)

Je wilt dat `bukura-styles.css` op élke pagina geladen wordt (homepage én blog). Kies één methode:

**Methode A — via plugin "Code Snippets" (makkelijkst, geen risico)**
1. Installeer de gratis plugin **Code Snippets**.
2. Voeg een nieuw **CSS-snippet** toe.
3. Plak de volledige inhoud van `bukura-styles.css`.
4. Zet op "Overal uitvoeren" / "Site wide" en activeer.

**Methode B — via een child-thema**
1. Upload `bukura-styles.css` naar je child-thema-map.
2. Zet in `functions.php`:
   ```php
   add_action('wp_enqueue_scripts', function () {
     wp_enqueue_style('bukura', get_stylesheet_directory_uri().'/bukura-styles.css', [], '1.0');
   });
   ```

> Gebruik **niet** het kleine "Extra CSS"-venster van de Customizer — de stylesheet is daarvoor te groot.

---

## STAP 2 — Zet de homepage live

1. Maak een nieuwe **Pagina** → titel bijv. "Home".
2. Rechterpaneel → **Paginakenmerken → Template** → kies de **blanco / volledige breedte zonder koptekst**:
   - Kadence: *"Blank — Disable Elements"* of stel onder Kadence-paginainstellingen "Disable Header / Footer / Title" in.
   - GeneratePress: template **"Blank"** (alleen Premium) óf zet header/footer uit via *Paginabouwer-container*.
3. Voeg één **Custom HTML-blok** toe.
4. Plak de volledige inhoud van `1-homepage-blok.html`.
5. Publiceer.
6. Ga naar **Instellingen → Lezen → Je homepage toont → Een statische pagina** en kies "Home".

✅ Je homepage staat nu identiek aan het prototype live, **inclusief de werkende budget-calculator** (die zit al in dit blok).

> **Calculator als losse pagina?** Maak nog een Pagina "Reisbudget calculator", voeg een Custom HTML-blok toe en plak `2-calculator-blok.html`. Handig om vanuit je blogposts naartoe te linken.

---

## STAP 3 — Maak het blog-template (één keer, daarna automatisch)

Dit is het enige onderdeel dat een template vraagt — zodat élke nieuwe blogpost automatisch deze layout krijgt en gewoon vindbaar is voor Google (RankMath).

### Met Kadence (aanbevolen — via Kadence Elements)
1. Ga naar **Appearance → Kadence → Elements → Add New**.
2. Type: **Template** → "Single Post" (alle berichten).
3. Bouw de structuur met blokken in deze volgorde:
   - **Rij** (volledige breedte) → daarin twee kolommen: links 1fr (inhoud), rechts 300px (sidebar).
   - **Linkerkolom:**
     - *Dynamische inhoud* → **Berichttitel** (kies in stijl: kop H1).
     - *Berichtmeta* (auteur, datum, leestijd).
     - Een **Groep/HTML-blok** met `<div class="article">` … hierin plaats je het **"Berichtinhoud"-blok** (the_content). Sluit af met `</div>`.
       → Hierdoor krijgt alle tekst die je in een post typt automatisch de juiste opmaak (koppen, lijsten, quotes).
     - Eronder een **Custom HTML-blok** met de eind-CTA uit `3-blog-bouwstenen.html`.
   - **Rechterkolom (sidebar):** Custom HTML-blok met de advertentie + "Lees ook" + verzekeringsblok (kopieer uit de sidebar van het prototype).
4. Onder **"Display Settings"** → toon op **alle berichten (Single Posts)**.
5. Publiceer het Element.

> Het kopgedeelte (logo + menu) en de footer regel je één keer via de **Kadence Header/Footer Builder** (Appearance → Kadence → Header). Bouw daar je menu met de items: Bestemmingen, Praktisch, Accommodatie, Vervoer, Blog. Zo zijn ze automatisch op élke pagina gelijk.

### Met GeneratePress
- Zelfde principe via **GenerateBlocks + "Block Element → Content Template"** (Premium). Wikkel het Berichtinhoud-blok in een container met **Extra CSS-class `article`**.

### Hoe je daarna een blogpost schrijft
1. **Berichten → Nieuw bericht**, titel + tekst typen zoals normaal.
2. Bovenaan een **inhoudsopgave** plakken (uit `3-blog-bouwstenen.html`) of de auto-TOC van RankMath gebruiken.
3. Waar je een hotel/auto aanraadt: het bijbehorende **affiliate-blok** invoegen (sla die op als *Synced Pattern* zodat het één klik is). Vervang de link door je **Pretty Link**.
4. RankMath: focus-keyword invullen (bijv. "auto huren Albanië tips").

---

## STAP 4 — Advertentieposities (Ad Inserter)

Installeer de gratis plugin **Ad Inserter** en stel deze posities in (precies zoals in het ontwerp):

| Positie | Formaat | Instelling in Ad Inserter |
|---|---|---|
| Homepage, na hero | 728×90 | Zit al in het homepage-blok als placeholder — vervang door je AdSense-code. |
| Homepage sidebar | 300×250 | Idem, in het homepage-blok. |
| Blog, onder titel | 728×90 | "Before content" / na de titel. |
| Blog, na 3e alinea | 300×250 | **"Insert after paragraph 3"**. |
| Blog sidebar (desktop) | 300×600 | In de sidebar van het template, **sticky**. |
| Blog footer (mobiel) | 320×50 | Ad Inserter → **"Sticky footer", alleen mobiel**. |

> **AdSense-richtlijn:** houd minstens een alinea afstand tussen een advertentie en een affiliate-blok, en plaats nooit twee advertenties direct na elkaar. Ad Inserter respecteert dit met de "minimum afstand"-instelling.

---

## STAP 5 — Afronden

- **Pretty Links:** maak per partner een nette link (`/go/booking`, `/go/rentalcars`, `/go/verzekering`) en gebruik die overal.
- **RankMath:** sitemap aan, focus-keywords per post, schema "Article".
- **Snelheid:** WP Rocket of LiteSpeed Cache → caching + lazy-load afbeeldingen aan.
- **Affiliate-disclosure:** voeg een korte disclosure-pagina toe en link ernaar in de footer (staat al in het ontwerp).

---

### Samengevat
1. CSS één keer site-breed laden.
2. Homepage = 1 Custom HTML-blok op een blanco pagina.
3. Blog = 1 template (Kadence Element), daarna typ je gewoon posts.
4. Advertenties via Ad Inserter, links via Pretty Links.

Vragen over een specifieke stap? Geef aan welke en ik werk hem verder uit.
