import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { ArticleCard } from '../../../components/article-card';
import { Badge, Button } from '@odyssey/ui';
import {
  articleCategories,
  articles,
  BLOG_HUB_RECENT_LIMIT,
  countArticlesByCategory,
  getCategoryPreviews,
  getCategorySlug,
  getFeaturedArticle,
  getHubRecentArticles,
} from '../../../lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Reistips, lijstjes en verhalen over Albanië — geschreven door onze redactie, niet door een algoritme.',
};

export default function BlogPage() {
  const featuredArticle = getFeaturedArticle();
  const recentArticles = getHubRecentArticles();
  const categoryPreviews = getCategoryPreviews();
  const totalArticles = articles.length;

  return (
    <main>
      {/* Hub intro — fixed size; does not grow with archive */}
      <section
        aria-labelledby="blog-heading"
        className="bg-muted border-border border-b py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-center">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
            Reisblog · Albanië
          </p>
          <h1 id="blog-heading" className="text-3xl md:text-4xl lg:text-5xl">
            Verhalen &amp; tips uit het land
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Lijstjes, praktische guides en persoonlijke ervaringen — geschreven door reizigers die
            Albanië echt kennen.
          </p>
          <p className="text-muted-foreground text-sm">{totalArticles} artikelen in ons archief</p>
        </div>
      </section>

      {/* Featured */}
      <section aria-labelledby="featured-article-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-primary mb-6 text-xs font-medium tracking-[0.2em] uppercase">
            Uitgelicht
          </p>
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:aspect-auto md:min-h-[360px]">
              <Image
                src={featuredArticle.image}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <Badge variant="secondary">{featuredArticle.category}</Badge>
              <h2
                id="featured-article-heading"
                className="group-hover:text-primary text-3xl transition-colors md:text-4xl"
              >
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {featuredArticle.teaser}
              </p>
              <p className="text-muted-foreground flex flex-wrap gap-x-4 text-sm">
                <time dateTime={featuredArticle.dateTime}>{featuredArticle.date}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {featuredArticle.readTime} lezen
                </span>
              </p>
              <span className="text-primary inline-flex items-center gap-1 text-sm font-medium">
                Lees artikel
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Category entry points → archives, not in-page filters */}
      <section aria-labelledby="categories-heading" className="bg-card py-10 md:py-12">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <h2 id="categories-heading" className="text-center text-2xl md:text-3xl">
            Blader per categorie
          </h2>
          <ul className="flex flex-wrap justify-center gap-2">
            <li>
              <Link
                href="/blog/artikelen"
                className="bg-primary text-primary-foreground focus-visible:ring-ring inline-flex rounded-full px-4 py-1.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Alle artikelen
              </Link>
            </li>
            {articleCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/blog/categorie/${cat.slug}`}
                  className="bg-muted text-muted-foreground hover:bg-muted/80 focus-visible:ring-ring inline-flex rounded-full px-4 py-1.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recent slice — capped; full list lives on /blog/artikelen */}
      <section aria-labelledby="recent-heading" className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 id="recent-heading" className="text-2xl md:text-3xl">
                Nieuwste artikelen
              </h2>
              <p className="text-muted-foreground text-sm">
                De {BLOG_HUB_RECENT_LIMIT} meest recente —{' '}
                <Link href="/blog/artikelen" className="text-primary hover:underline">
                  bekijk alles
                </Link>
              </p>
            </div>
          </header>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
          {totalArticles > BLOG_HUB_RECENT_LIMIT ? (
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/blog/artikelen">
                  Alle {totalArticles} artikelen bekijken
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Category previews — max 3 each, link to category archive */}
      {categoryPreviews.map((group, index) => (
        <section
          key={group.category}
          aria-labelledby={`preview-${group.category}-heading`}
          className={index % 2 === 0 ? 'bg-muted py-12 md:py-16' : 'bg-card py-12 md:py-16'}
        >
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <header className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-1">
                <h2 id={`preview-${group.category}-heading`} className="text-2xl md:text-3xl">
                  {group.category}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {countArticlesByCategory(group.category)} artikelen in totaal
                </p>
              </div>
              <Link
                href={`/blog/categorie/${getCategorySlug(group.category)}`}
                className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium"
              >
                Alle {group.category.toLowerCase()}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </header>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section aria-labelledby="blog-exit-heading" className="bg-brand-700 py-16 md:py-20">
        <div className="mx-auto max-w-xl space-y-6 px-6 text-center">
          <h2 id="blog-exit-heading" className="text-brand-50 text-2xl md:text-3xl">
            Plan je trip verder
          </h2>
          <p className="text-brand-100 text-sm leading-relaxed">
            Artikelen zijn het begin — combineer tips met onze bestemming-guides en redactie-routes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href="/bestemmingen">Bekijk bestemmingen</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-400 text-brand-50 hover:bg-brand-600/50 hover:text-brand-50"
            >
              <Link href="/routes">Bekijk routes</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
