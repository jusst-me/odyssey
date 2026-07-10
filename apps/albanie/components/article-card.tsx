import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Badge } from '@odyssey/ui';
import type { ArticleListItem } from '../lib/blog-data';

export function ArticleCard({ article }: { article: ArticleListItem }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group border-border bg-card focus-visible:ring-ring block overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-4">
        <Badge variant="ghost" className="px-0">
          {article.category}
        </Badge>
        <h3 className="line-clamp-2 text-lg font-semibold">{article.title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">{article.teaser}</p>
        <p className="text-muted-foreground flex flex-wrap gap-x-3 text-xs">
          <time dateTime={article.dateTime}>{article.date}</time>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" aria-hidden="true" />
            {article.readTime}
          </span>
        </p>
      </div>
    </Link>
  );
}
