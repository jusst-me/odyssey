'use client';

import { useState } from 'react';
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@odyssey/ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="border-border border-b pb-2 text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`border-border size-12 rounded-lg border ${className}`} />
      <span className="text-muted-foreground text-xs">{name}</span>
    </div>
  );
}

export default function StyleguidePage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="mx-auto max-w-4xl space-y-12 px-6 py-12">
      <header>
        <p className="text-primary text-sm font-medium tracking-widest uppercase">Odyssey</p>
        <h1 className="text-4xl">Component Styleguide</h1>
        <p className="text-muted-foreground text-lg">
          Visueel overzicht van alle gedeelde UI-primitieven uit <code>@odyssey/ui</code>.
        </p>
      </header>

      {/* ---- Colour Palette ---- */}
      <Section title="Kleurenpalet">
        <h3 className="text-lg font-medium">Semantisch</h3>
        <div className="flex flex-wrap gap-4">
          <Swatch name="background" className="bg-background" />
          <Swatch name="foreground" className="bg-foreground" />
          <Swatch name="primary" className="bg-primary" />
          <Swatch name="secondary" className="bg-secondary" />
          <Swatch name="muted" className="bg-muted" />
          <Swatch name="accent" className="bg-accent" />
          <Swatch name="destructive" className="bg-destructive" />
          <Swatch name="card" className="bg-card" />
          <Swatch name="popover" className="bg-popover" />
          <Swatch name="border" className="bg-border" />
          <Swatch name="input" className="bg-input" />
          <Swatch name="ring" className="bg-ring" />
        </div>

        <h3 className="text-lg font-medium">Status</h3>
        <div className="flex flex-wrap gap-4">
          <Swatch name="success" className="bg-success" />
          <Swatch name="warning" className="bg-warning" />
          <Swatch name="error" className="bg-error" />
          <Swatch name="info" className="bg-info" />
        </div>

        <h3 className="text-lg font-medium">Brand (Adria)</h3>
        <div className="flex flex-wrap gap-2">
          <Swatch name="50" className="bg-brand-50" />
          <Swatch name="100" className="bg-brand-100" />
          <Swatch name="200" className="bg-brand-200" />
          <Swatch name="300" className="bg-brand-300" />
          <Swatch name="400" className="bg-brand-400" />
          <Swatch name="500" className="bg-brand-500" />
          <Swatch name="600" className="bg-brand-600" />
          <Swatch name="700" className="bg-brand-700" />
          <Swatch name="800" className="bg-brand-800" />
          <Swatch name="900" className="bg-brand-900" />
          <Swatch name="950" className="bg-brand-950" />
        </div>

        <h3 className="text-lg font-medium">Accent (Sun)</h3>
        <div className="flex flex-wrap gap-2">
          <Swatch name="50" className="bg-sun-50" />
          <Swatch name="100" className="bg-sun-100" />
          <Swatch name="200" className="bg-sun-200" />
          <Swatch name="300" className="bg-sun-300" />
          <Swatch name="400" className="bg-sun-400" />
          <Swatch name="500" className="bg-sun-500" />
          <Swatch name="600" className="bg-sun-600" />
          <Swatch name="700" className="bg-sun-700" />
          <Swatch name="800" className="bg-sun-800" />
          <Swatch name="900" className="bg-sun-900" />
          <Swatch name="950" className="bg-sun-950" />
        </div>
      </Section>

      {/* ---- Typography ---- */}
      <Section title="Typografie">
        <div className="space-y-3">
          <h1 className="text-4xl">Heading 1 — Fraunces Display</h1>
          <h2 className="text-3xl">Heading 2 — Fluid clamp</h2>
          <h3 className="text-2xl">Heading 3</h3>
          <h4 className="text-xl">Heading 4</h4>
          <p className="text-lg">Lead paragraph — text-lg (1.125rem)</p>
          <p className="text-base">Body text — text-base (1rem, Inter)</p>
          <p className="text-muted-foreground text-sm">Small / metadata — text-sm</p>
          <p className="text-muted-foreground text-xs">Caption / disclosure — text-xs</p>
        </div>
      </Section>

      {/* ---- Button ---- */}
      <Section title="Button">
        <div className="space-y-4">
          <h3 className="text-muted-foreground text-sm font-medium">Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>

          <h3 className="text-muted-foreground text-sm font-medium">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Icon button">
              ★
            </Button>
          </div>

          <h3 className="text-muted-foreground text-sm font-medium">Disabled</h3>
          <div className="flex gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </div>
      </Section>

      {/* ---- Input & Textarea ---- */}
      <Section title="Input & Textarea">
        <div className="grid max-w-md gap-4">
          <label className="space-y-1">
            <span className="text-sm font-medium">E-mailadres</span>
            <Input type="email" placeholder="naam@voorbeeld.nl" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-medium">Uitgeschakeld</span>
            <Input disabled placeholder="Niet bewerkbaar" />
          </label>
          <label className="space-y-1">
            <span className="text-sm font-medium">Bericht</span>
            <Textarea placeholder="Schrijf je bericht..." />
          </label>
        </div>
      </Section>

      {/* ---- Badge ---- */}
      <Section title="Badge">
        <div className="flex flex-wrap gap-3">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </Section>

      {/* ---- Card ---- */}
      <Section title="Card">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tirana</CardTitle>
              <CardDescription>De bruisende hoofdstad van Albanië</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Ontdek de kleurrijke gebouwen, levendige cafés en fascinerende geschiedenis van
                Tirana.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Lees meer
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Saranda</CardTitle>
              <CardDescription>Kustparadijs aan de Ionische Zee</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Kristalhelder water, Ksamil-eilanden en de ruïnes van Butrint op een steenworp
                afstand.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Lees meer
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* ---- Dialog ---- */}
      <Section title="Dialog">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Open dialoog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Bevestig boeking</DialogTitle>
              <DialogDescription>
                Weet je zeker dat je deze reis wilt boeken? Je wordt doorgestuurd naar de aanbieder.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Annuleren
              </Button>
              <Button onClick={() => setDialogOpen(false)}>Bevestigen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      {/* ---- DropdownMenu ---- */}
      <Section title="DropdownMenu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu openen</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profiel bekijken</DropdownMenuItem>
            <DropdownMenuItem>Instellingen</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Uitloggen</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      {/* ---- Tabs ---- */}
      <Section title="Tabs">
        <Tabs defaultValue="hotels" className="max-w-md">
          <TabsList>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="vluchten">Vluchten</TabsTrigger>
            <TabsTrigger value="autohuur">Autohuur</TabsTrigger>
          </TabsList>
          <TabsContent value="hotels" className="rounded-lg border p-4">
            <p className="text-sm">Hotels in Albanië zoeken en vergelijken.</p>
          </TabsContent>
          <TabsContent value="vluchten" className="rounded-lg border p-4">
            <p className="text-sm">Vluchten naar Tirana en omgeving.</p>
          </TabsContent>
          <TabsContent value="autohuur" className="rounded-lg border p-4">
            <p className="text-sm">Autohuur voor flexibel reizen door Albanië.</p>
          </TabsContent>
        </Tabs>
      </Section>

      {/* ---- Accordion ---- */}
      <Section title="Accordion">
        <Accordion type="single" collapsible className="max-w-md">
          <AccordionItem value="q1">
            <AccordionTrigger>Wat is de beste reistijd voor Albanië?</AccordionTrigger>
            <AccordionContent>
              Mei tot september is ideaal voor strandvakanties. Het voorjaar (april-mei) en najaar
              (september-oktober) zijn perfect voor wandelen en steden bezoeken.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Heb ik een visum nodig?</AccordionTrigger>
            <AccordionContent>
              Nee, EU-burgers hebben geen visum nodig voor verblijven tot 90 dagen. Neem een geldig
              paspoort of ID-kaart mee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Is Albanië veilig voor toeristen?</AccordionTrigger>
            <AccordionContent>
              Ja, Albanië is over het algemeen veilig voor toeristen. Zoals overal geldt: let op je
              spullen in drukke gebieden en gebruik je gezond verstand.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* ---- Radius & Shadows ---- */}
      <Section title="Radius & Schaduwen">
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-sm border shadow-sm" />
            <span className="text-muted-foreground text-xs">radius-sm</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-md border shadow-sm" />
            <span className="text-muted-foreground text-xs">radius-md</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-lg border shadow-sm" />
            <span className="text-muted-foreground text-xs">radius-lg</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-xl border shadow-sm" />
            <span className="text-muted-foreground text-xs">radius-xl</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 pt-4">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-lg shadow-sm" />
            <span className="text-muted-foreground text-xs">shadow-sm</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-lg shadow-md" />
            <span className="text-muted-foreground text-xs">shadow-md</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-card size-16 rounded-lg shadow-lg" />
            <span className="text-muted-foreground text-xs">shadow-lg</span>
          </div>
        </div>
      </Section>
    </main>
  );
}
