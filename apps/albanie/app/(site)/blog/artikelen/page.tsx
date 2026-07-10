import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ArticleCard } from '../../../../components/article-card';
import { BlogPagination } from '../../../../components/blog-pagination';
import {
  articleCategories,
  articles,
  paginateArticles,
  parsePageParam,
} from '../../../../lib/blog-data';

type PageProps = {
  searchParams: Promise<{ pagina?: string }>;
};

export const metadata: Metadata = {
  title: 'Alle artikelen',
  description: 'Volledig archief van reistips, lijstjes en verhalen over Albanië.',
};

export default async function BlogArchivePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const requestedPage = parsePageParam(params.pagina);
  const archive = paginateArticles(articles, requestedPage);
  const basePath = '/blog/artikelen';

  return (
    <main>
      <section
        aria-labelledby="archive-heading"
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
          <h1 id="archive-heading" className="text-3xl md:text-4xl">
            Alle artikelen
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Chronologisch archief — {archive.totalItems} artikelen, pagina {archive.currentPage} van{' '}
            {archive.totalPages}.
          </p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {articleCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/blog/categorie/${cat.slug}`}
                  className="bg-background text-muted-foreground hover:text-foreground inline-flex rounded-full border px-3 py-1 text-xs font-medium"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archive.items.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
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
