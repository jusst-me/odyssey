import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Badge, Button } from '@odyssey/ui';
import { ArticleProse } from '../../../../components/article-prose';
import { ListicleSection } from '../../../../components/listicle-section';
import {
  buildArticleNav,
  isFullArticle,
  resolveArticle,
  type ArticleNavItem,
} from '../../../../lib/article-data';
import { articleAffiliateDisclosure } from '../../../../lib/deals-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = resolveArticle(slug);
  if (!article) return { title: 'Artikel niet gevonden' };

  return {
    title: article.title,
    description: article.lead,
  };
}

function ArticleSidebarNav({ items }: { items: ArticleNavItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-labelledby="article-nav" className="border-border bg-card rounded-xl border p-5">
      <h2 id="article-nav" className="mb-3 text-sm font-semibold">
        In dit artikel
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-brand-700 hover:text-brand-800 text-sm font-medium underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
            {item.children ? (
              <ul className="border-border mt-2 space-y-1.5 border-l pl-3">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className="text-muted-foreground hover:text-foreground text-xs underline-offset-4 hover:underline"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ListicleIntroSection({
  id,
  title,
  paragraphs,
}: {
  id: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = resolveArticle(slug);
  if (!article) notFound();

  const fullArticle = isFullArticle(slug);
  const navItems = buildArticleNav(article);

  return (
    <main>
      {/* Hero */}
      <section aria-labelledby="article-heading" className="relative min-h-[40vh] md:min-h-[45vh]">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[40vh] max-w-3xl flex-col justify-end px-6 pt-24 pb-10 md:min-h-[45vh] md:pb-12">
          <nav aria-label="Broodkruimel" className="mb-6">
            <Link
              href="/blog"
              className="text-primary-foreground/80 hover:text-primary-foreground focus-visible:ring-ring inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Blog
            </Link>
          </nav>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary-foreground text-neutral-900">
                {article.category}
              </Badge>
              {fullArticle ? (
                <Badge variant="secondary" className="bg-primary-foreground text-neutral-900">
                  Redactioneel
                </Badge>
              ) : null}
            </div>
            <h1
              id="article-heading"
              className="text-primary-foreground text-3xl md:text-4xl lg:text-5xl"
            >
              {article.title}
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">{article.lead}</p>
            <p className="text-primary-foreground/70 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <time dateTime={article.dateTime}>{article.date}</time>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {article.readTime} lezen
              </span>
              <span>{article.updatedLabel}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background overflow-x-clip py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <article
            className={`mx-auto min-w-0 space-y-10 overflow-x-clip lg:mx-0 ${article.contentType === 'listicle' ? 'max-w-none' : 'max-w-3xl'}`}
          >
            {article.contentType === 'prose' ? (
              <ArticleProse blocks={article.blocks} />
            ) : (
              <>
                {article.sections
                  .filter((section) => section.id === 'intro')
                  .map((section) => (
                    <ListicleIntroSection
                      key={section.id}
                      id={section.id}
                      title={section.title}
                      paragraphs={section.paragraphs}
                    />
                  ))}

                <ListicleSection data={article.listicle} />

                {article.sections
                  .filter((section) => section.id !== 'intro')
                  .map((section) => (
                    <ListicleIntroSection
                      key={section.id}
                      id={section.id}
                      title={section.title}
                      paragraphs={section.paragraphs}
                    />
                  ))}
              </>
            )}

            <p className="text-muted-foreground border-border border-t pt-8 text-sm italic">
              Geschreven door de Bukura-redactie ·{' '}
              {article.contentType === 'listicle'
                ? articleAffiliateDisclosure
                : 'Affiliate-links in dit artikel zijn transparant gemarkeerd waar van toepassing.'}
            </p>
          </article>

          <aside className="min-w-0 space-y-8 lg:sticky lg:top-24 lg:self-start">
            <ArticleSidebarNav items={navItems} />

            {article.relatedLocations.length > 0 ? (
              <div className="border-border bg-card space-y-3 rounded-xl border p-5">
                <h2 className="text-sm font-semibold">Gerelateerde bestemmingen</h2>
                <ul className="space-y-2">
                  {article.relatedLocations.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        href={`/bestemmingen/${loc.slug}`}
                        className="text-brand-700 hover:text-brand-800 text-sm font-medium underline-offset-4 hover:underline"
                      >
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      {/* Related articles */}
      {article.relatedArticles.length > 0 ? (
        <section aria-labelledby="related-heading" className="bg-muted py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <h2 id="related-heading" className="text-2xl md:text-3xl">
              Lees ook
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {article.relatedArticles.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group border-border bg-card block rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Badge variant="ghost" className="mb-2 px-0">
                      {related.category}
                    </Badge>
                    <h3 className="group-hover:text-primary mb-2 text-lg font-semibold">
                      {related.title}
                    </h3>
                    <time dateTime={related.dateTime} className="text-muted-foreground text-xs">
                      {related.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Exit */}
      <section aria-labelledby="article-exit-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-2xl space-y-6 px-6 text-center">
          <h2 id="article-exit-heading" className="text-2xl md:text-3xl">
            Klaar om te plannen?
          </h2>
          <p className="text-muted-foreground text-sm">
            Ga van inspiratie naar concrete routes en bestemming-guides.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft aria-hidden="true" />
                Terug naar blog
              </Link>
            </Button>
            <Button asChild>
              <Link href="/bestemmingen">
                Bestemmingen
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
