import { Button } from '@odyssey/ui';

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-24">
      <p className="text-primary text-sm font-medium tracking-widest uppercase">
        Odyssey · Albanië
      </p>
      <h1 className="text-foreground text-4xl">Fundament staat</h1>
      <p className="text-muted-foreground text-lg">
        Dit is een tijdelijke placeholder. De volledige homepage en alle features worden gebouwd
        vanuit de Linear-backlog. Deze pagina valideert alleen de monorepo-, design-system- en
        UI-package-koppeling.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  );
}
