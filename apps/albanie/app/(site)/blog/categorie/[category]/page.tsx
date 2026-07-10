import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ArticleCard } from '../../../../../components/article-card';
import { BlogPagination } from '../../../../../components/blog-pagination';
import {
  articles,
  getCategoryLabel,
  isArticleCategorySlug,
  paginateArticles,
  parsePageParam,
} from '../../../../../lib/blog-data';

type PageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ pagina?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  if (!isArticleCategorySlug(category)) return { title: 'Categorie niet gevonden' };

  const label = getCategoryLabel(category);
  return {
    title: `${label} — Blog`,
    description: `Alle artikelen in categorie ${label} over reizen in Albanië.`,
  };
}

export default async function BlogCategoryArchivePage({ params, searchParams }: PageProps) {
  const [{ category }, query] = await Promise.all([params, searchParams]);

  if (!isArticleCategorySlug(category)) notFound();

  const label = getCategoryLabel(category);
  const filtered = articles.filter((a) => a.category === label);
  const requestedPage = parsePageParam(query.pagina);
  const archive = paginateArticles(filtered, requestedPage);
  const basePath = `/blog/categorie/${category}`;

  return (
    <main>
      <section
        aria-labelledby="category-archive-heading"
        className="bg-muted border-border border-b py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl space-y-5 px-6">
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Terug naar blog
          </Link>
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase">Categorie</p>
          <h1 id="category-archive-heading" className="text-3xl md:text-4xl">
            {label}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {archive.totalItems} artikel{archive.totalItems === 1 ? '' : 'en'} — pagina{' '}
            {archive.currentPage} van {archive.totalPages}.
          </p>
          <p className="text-sm">
            <Link href="/blog/artikelen" className="text-primary hover:underline">
              Bekijk alle categorieën
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {archive.items.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {archive.items.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-center text-sm">
              Nog geen artikelen in deze categorie.
            </p>
          )}
          <BlogPagination
            basePath={basePath}
            currentPage={archive.currentPage}
            totalPages={archive.totalPages}
          />
        </div>
      </section>
    </main>
  );
}
