import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Banknote,
  Car,
  ChevronDown,
  Compass,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import { Badge, Button } from '@odyssey/ui';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen',
  description:
    'Antwoorden op de meest gestelde vragen over reizen naar Albanië — praktisch, eerlijk en vanuit onze redactionele ervaring.',
};

// ---------------------------------------------------------------------------
// Placeholder data — replace with CMS when FAQ content is modeled
// ---------------------------------------------------------------------------

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  relatedLink?: { label: string; href: string };
};

type FaqCategory = {
  id: string;
  title: string;
  tagline: string;
  intro: string;
  icon: typeof Compass;
  faqs: FaqItem[];
};

const popularQuestions = [
  {
    id: 'visum',
    question: 'Heb ik als Nederlander een visum nodig?',
    answer:
      'Nee. Met een geldig paspoort of ID-kaart mag je tot 90 dagen visa-vrij reizen. Zorg dat je document nog minstens 3 maanden geldig is na vertrek.',
    categoryId: 'eerste-keer',
  },
  {
    id: 'veilig',
    question: 'Is Albanië veilig voor toeristen?',
    answer:
      'Over het algemeen wel. Petty crime komt voor in drukke steden — gebruik normale voorzichtigheid. In berggebieden let je op wegen en weer.',
    categoryId: 'veiligheid',
  },
  {
    id: 'geld',
    question: 'Betaal ik in euro of Lek?',
    answer:
      'Beide. Euro wordt overal geaccepteerd; Lek is handig voor kleine uitgaven. Pinautomaten staan in steden en toeristische plekken.',
    categoryId: 'geld',
  },
] as const;

const faqCategories: FaqCategory[] = [
  {
    id: 'eerste-keer',
    title: 'Eerste keer Albanië?',
    tagline: 'Start hier',
    intro:
      'Nieuw land, nieuwe regels — maar geen reden tot stress. Dit zijn de vragen die we het vaakst krijgen van reizigers die Albanië voor het eerst plannen.',
    icon: Compass,
    faqs: [
      {
        id: 'visum-detail',
        question: 'Heb ik als Nederlander een visum nodig?',
        answer:
          'Nee. EU-burgers reizen visa-vrij tot 90 dagen met paspoort of ID-kaart. Controleer altijd de actuele regels vóór vertrek — vooral als je langer blijft.',
        relatedLink: { label: 'Visum & inreizen', href: '/praktisch/visum' },
      },
      {
        id: 'reistijd',
        question: 'Wat is de beste reistijd?',
        answer:
          'Mei–juni en september–oktober zijn ideaal: aangenaam weer, minder drukte. Juli–augustus is heet en druk aan de kust. Winters zijn koud in de bergen, mild aan de kust.',
        relatedLink: { label: 'Beste reistijd', href: '/praktisch/beste-reistijd' },
      },
      {
        id: 'duur',
        question: 'Hoeveel dagen heb ik nodig?',
        answer:
          'Minimaal 7–10 dagen voor een eerste indruk (stad + kust of bergen). Met 2 weken combineer je Riviera, UNESCO-steden en een bergdagtrip comfortabel.',
        relatedLink: { label: 'Bekijk routes', href: '/routes' },
      },
      {
        id: 'taal',
        question: 'Spreek ik mezelf overal verstaanbaar?',
        answer:
          'In toeristische plekken en bij jongere Albanese spreken veel mensen Engels. Buiten de gebaande paden helpt Google Translate en een paar woorden Albanees enorm.',
        relatedLink: { label: 'Taal & cultuur', href: '/praktisch/taal-cultuur' },
      },
    ],
  },
  {
    id: 'onderweg',
    title: 'Onderweg',
    tagline: 'Vervoer & mobiliteit',
    intro:
      'Albanië is het makkelijkst te ontdekken met een mix van huurauto, bus en te voet. Flexibiliteit loont — vaste dienstregelingen zijn zeldzaam.',
    icon: Car,
    faqs: [
      {
        id: 'autohuur',
        question: 'Moet ik een auto huren?',
        answer:
          "Niet verplicht, wel aanbevolen als je de kust en bergen wilt combineren. In Tirana kom je ver met wandelen en taxi's. Kies een compacte auto voor smalle bergwegen.",
        relatedLink: { label: 'Auto huren', href: '/vervoer/auto-huren' },
      },
      {
        id: 'furgon',
        question: 'Hoe werken furgons en bussen?',
        answer:
          "Furgons (minibusjes) rijden tussen steden en dorpen zonder vaste schema's — ze vertrekken als ze vol zijn. Goedkoop en lokaal, maar plan extra tijd in.",
        relatedLink: { label: 'Bussen & furgon', href: '/vervoer/bussen-furgon' },
      },
      {
        id: 'rijden',
        question: 'Is rijden in Albanië eng?',
        answer:
          'Het vraagt alertheid: smalle wegen, grazende koeien en soms agressief rijgedrag. Vermijd nachtrijden in bergen. SH75 naar Theth is spectaculair maar niet voor nerveuze bestuurders.',
      },
      {
        id: 'vliegen',
        question: 'Waar vlieg ik naartoe?',
        answer:
          'Tirana (TIA) is de main hub. Alternatief: vliegen op Corfu (Grieks) en de ferry naar Sarandë — populair in de zomer, maar plan de overtocht vooraf.',
        relatedLink: { label: "Veerboten & ferry's", href: '/vervoer/veerboten' },
      },
    ],
  },
  {
    id: 'geld',
    title: 'Geld & budget',
    tagline: 'Pin, betalen, besparen',
    intro:
      'Albanië is betaalbaar vergeleken met West-Europa — maar prijzen stijgen snel aan de Riviera in juli/augustus. Dit helpt je realistisch te budgetteren.',
    icon: Banknote,
    faqs: [
      {
        id: 'valuta',
        question: 'Euro of Lek — wat is handig?',
        answer:
          "Neem euro's mee en wissel een deel naar Lek voor kleine winkels en markten. Wisselkoers wisselt; wissel bij officiële kantoren, niet op straat.",
        relatedLink: { label: 'Reisbudget & geld', href: '/praktisch/reisbudget' },
      },
      {
        id: 'dagbudget',
        question: 'Wat kost een dag ongeveer?',
        answer:
          'Backpacker: €35–45 · Mid-range: €55–80 · Comfort: €100+. Aan de kust in hoogseizoen zit je sneller boven €80 zonder luxe.',
      },
      {
        id: 'pinnen',
        question: 'Kan ik overal pinnen?',
        answer:
          'In steden en grotere dorpen wel. In Theth, kleine strandplaatsjes of op markten heb je contant geld nodig. Neem altijd een reserve mee.',
      },
      {
        id: 'fooi',
        question: 'Geef ik fooi?',
        answer:
          "Niet verplicht, wel gewaardeerd in restaurants (5–10% bij goede service). In taxi's rond je af naar boven.",
      },
    ],
  },
  {
    id: 'veiligheid',
    title: 'Veiligheid & gezondheid',
    tagline: 'Met een gerust hart reizen',
    intro:
      'Albanië voelt voor de meeste reizigers veilig en gastvrij. Wees wel realistisch — zoals overal waar toerisme groeit.',
    icon: Shield,
    faqs: [
      {
        id: 'veilig-detail',
        question: 'Is Albanië veilig voor solo reizigers?',
        answer:
          "Ja, solo reizen is gebruikelijk. Vermijd verlaten plekken 's nachts, let op je spullen in Tirana en aan drukke stranden. Vrouwen solo rapporteren over het algemeen positieve ervaringen.",
        relatedLink: { label: 'Veiligheid', href: '/praktisch/veiligheid' },
      },
      {
        id: 'water',
        question: 'Kan ik kraanwater drinken?',
        answer:
          'Liever niet — fleswater is goedkoop en overal verkrijgbaar. In berggebieden kan lokaal bronwater oké zijn; vraag het na bij je host.',
      },
      {
        id: 'verzekering',
        question: 'Heb ik een reisverzekering nodig?',
        answer:
          'Sterk aanbevolen. Zorg voor dekking voor autohuur (all-risk), bergwandelen en medische kosten. EU-zorgverzekering dekt niet alles buiten Nederland.',
      },
      {
        id: 'nood',
        question: 'Wat zijn belangrijke nummers?',
        answer:
          'Algemeen noodnummer Albanië: 112. Sla het adres van je accommodatie en embassy contact offline op. Mobiel bereik is goed langs de kust en in steden.',
      },
    ],
  },
  {
    id: 'cultuur',
    title: 'Cultuur & etiquette',
    tagline: 'Lokaal met respect',
    intro:
      'Albanië is gastvrij en trots. Een beetje culturele voorbereiding opent deuren — letterlijk, want locals nodigen je graag uit voor koffie.',
    icon: Users,
    faqs: [
      {
        id: 'kleding',
        question: 'Wat trek ik aan?',
        answer:
          'Aan de kust is shorts en bikini normaal. In dorpen en moskeeën kleed je bescheidener (schouders en knieën bedekt). In berggebieden neem je lagen mee.',
      },
      {
        id: 'religie',
        question: 'Hoe belangrijk is religie?',
        answer:
          "Albanië is religieus divers maar laic — in het dagelijks leven merk je het weinig. Respecteer gebedsruimtes en vraag toestemming voor foto's in moskeeën.",
      },
      {
        id: 'foto',
        question: 'Mag ik overal fotograferen?',
        answer:
          'Vraag mensen om toestemming — vooral op markten en in dorpen. Militaire objecten en sommige grensgebieden zijn taboe. Drones hebben regels; check lokaal.',
      },
      {
        id: 'beschikbaar',
        question: 'Hoe reageren locals op toeristen?',
        answer:
          'Overwegend warm en nieuwsgierig. Albanië zit in een fase van groeiend toerisme — wees respectvol, ondersteun lokale businesses en laat geen afval achter.',
        relatedLink: { label: 'Taal & cultuur', href: '/praktisch/taal-cultuur' },
      },
    ],
  },
  {
    id: 'praktisch',
    title: 'Dagelijkse praktijk',
    tagline: 'Wifi, sim & kleine dingen',
    intro:
      'De saai-but-crucial stuff — maar juist deze details maken je trip soepeler. Bewaar deze sectie voor vlak vóór vertrek.',
    icon: Sparkles,
    faqs: [
      {
        id: 'sim',
        question: 'Koopt u een lokale simkaart?',
        answer:
          'Handig voor data buiten wifi. Vodafone en ALBtelecom verkopen prepaid sims op het vliegveld en in steden. ID nodig bij registratie.',
      },
      {
        id: 'wifi',
        question: 'Is wifi betrouwbaar?',
        answer:
          'In hotels en cafés meestal prima. In bergdorpen kan het traag zijn — download offline kaarten (Maps.me of Google) vooraf.',
      },
      {
        id: 'kinderen',
        question: 'Is Albanië geschikt met kinderen?',
        answer:
          'Ja — stranden zijn kindvriendelijk, locals zijn attent. Bergwandelingen en lange furgon-rides zijn minder ideaal met jonge kinderen.',
        relatedLink: { label: 'Bestemmingen', href: '/bestemmingen' },
      },
      {
        id: 'stroom',
        question: 'Welke stopcontacten?',
        answer: 'Type C en F (Europees standaard, 230V). Geen adapter nodig vanuit Nederland.',
      },
    ],
  },
];

function FaqDisclosure({ faq }: { faq: FaqItem }) {
  return (
    <details className="group border-border border-b last:border-b-0">
      <summary className="focus-visible:ring-ring flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-4 text-left text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        <span>{faq.question}</span>
        <ChevronDown
          className="text-muted-foreground mt-1 size-4 shrink-0 transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="text-muted-foreground space-y-3 pr-8 pb-5 text-sm leading-relaxed">
        <p>{faq.answer}</p>
        {faq.relatedLink ? (
          <Link
            href={faq.relatedLink.href}
            className="text-primary hover:text-primary/80 inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
          >
            {faq.relatedLink.label}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </details>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function VeelgesteldeVragenPage() {
  return (
    <main>
      {/* SECTIE 1 — Intro */}
      <section
        aria-labelledby="faq-heading"
        className="bg-muted border-border border-b py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-center">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
            Praktisch · Albanië
          </p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl">
            Veelgestelde vragen
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Geen generieke FAQ-lijst — antwoorden zoals we ze aan vrienden geven: eerlijk, actueel
            en gebaseerd op eigen ervaring in het land.
          </p>
          <p className="text-muted-foreground text-sm">Bijgewerkt juli 2026 · door onze redactie</p>
        </div>
      </section>

      {/* SECTIE 2 — Populaire vragen (snelle antwoorden) */}
      <section aria-labelledby="popular-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1">
            <h2 id="popular-heading" className="text-2xl md:text-3xl">
              Meest gelezen
            </h2>
            <p className="text-muted-foreground text-sm">
              De drie vragen die we het vaakst via Instagram en mail krijgen
            </p>
          </header>
          <ul className="grid gap-4 md:grid-cols-3">
            {popularQuestions.map((item) => (
              <li key={item.id}>
                <article className="border-border bg-card flex h-full flex-col rounded-xl border p-5 shadow-sm">
                  <Badge variant="secondary" className="mb-3 w-fit">
                    Top 3
                  </Badge>
                  <h3 className="mb-2 leading-snug font-semibold">{item.question}</h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                  <a
                    href={`#${item.categoryId}`}
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Meer in deze categorie
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTIE 3 — Categorie-navigatie (speelse tegels) */}
      <section aria-labelledby="categories-nav-heading" className="bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="mx-auto max-w-2xl space-y-2 text-center">
            <h2 id="categories-nav-heading" className="text-2xl md:text-3xl">
              Waar ben je benieuwd naar?
            </h2>
            <p className="text-muted-foreground text-sm">
              Kies een thema — elke categorie heeft een korte intro en gerelateerde links
            </p>
          </header>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="group border-border bg-background hover:border-primary/30 focus-visible:ring-ring flex h-full flex-col items-center gap-2 rounded-xl border p-4 text-center shadow-sm transition-colors hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <span className="bg-primary/10 text-primary group-hover:bg-primary/15 flex size-10 items-center justify-center rounded-full transition-colors">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-tight font-semibold">{category.title}</span>
                    <span className="text-muted-foreground text-xs">{category.tagline}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SECTIE 4 — Categorie-blokken met FAQ's */}
      {faqCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className={
              index % 2 === 0
                ? 'bg-background scroll-mt-24 py-12 md:py-16'
                : 'bg-muted scroll-mt-24 py-12 md:py-16'
            }
          >
            <div className="mx-auto max-w-3xl px-6">
              <header className="mb-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-full">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-2">
                    <p className="text-primary text-xs font-medium tracking-wide uppercase">
                      {category.tagline}
                    </p>
                    <h2 id={`${category.id}-heading`} className="text-2xl md:text-3xl">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground pl-16 text-sm leading-relaxed md:pl-0 md:text-base">
                  {category.intro}
                </p>
              </header>

              <div className="border-border bg-card rounded-xl border px-5 shadow-sm md:px-6">
                {category.faqs.map((faq) => (
                  <FaqDisclosure key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* SECTIE 5 — Nog een vraag? */}
      <section aria-labelledby="help-heading" className="bg-brand-700 py-16 md:py-20">
        <div className="mx-auto max-w-xl space-y-6 px-6 text-center">
          <MessageCircle className="text-brand-200 mx-auto size-8" aria-hidden="true" />
          <h2 id="help-heading" className="text-brand-50 text-2xl md:text-3xl">
            Staat je vraag er niet tussen?
          </h2>
          <p className="text-brand-100 text-sm leading-relaxed">
            Stuur ons een bericht via Instagram — we beantwoorden praktische vragen regelmatig in
            stories en DM. Geen chatbot, geen callcenter: gewoon reizigers die het land kennen.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <a
                href="https://www.instagram.com/albanie_reizen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stel je vraag op Instagram
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-400 text-brand-50 hover:bg-brand-600/50 hover:text-brand-50"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTIE 6 — Verder lezen */}
      <section aria-labelledby="read-more-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="space-y-1 text-center">
            <h2 id="read-more-heading" className="text-2xl md:text-3xl">
              Verder dan FAQ&apos;s
            </h2>
            <p className="text-muted-foreground text-sm">
              Diepere guides, bestemmingen en routes — waar een kort antwoord niet genoeg is
            </p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-3">
            <li>
              <Link
                href="/bestemmingen"
                className="group border-border bg-card block rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="group-hover:text-primary mb-1 font-semibold">Bestemmingen</h3>
                <p className="text-muted-foreground text-sm">
                  Redactionele guides per stad, strand en regio
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/praktisch/visum"
                className="group border-border bg-card block rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="group-hover:text-primary mb-1 font-semibold">Praktisch</h3>
                <p className="text-muted-foreground text-sm">
                  Visum, budget, veiligheid en meer — uitgebreid uitgelegd
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="group border-border bg-card block rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="group-hover:text-primary mb-1 font-semibold">Blog</h3>
                <p className="text-muted-foreground text-sm">
                  Verhalen, lijstjes en tips recht uit het land
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
