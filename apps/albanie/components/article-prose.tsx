import type { ProseBlock } from '../lib/article-data';

type ArticleProseProps = {
  blocks: ProseBlock[];
};

export function ArticleProse({ blocks }: ArticleProseProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            if (block.level === 2) {
              return (
                <h2 key={block.id} id={block.id} className="scroll-mt-24 text-2xl md:text-3xl">
                  {block.text}
                </h2>
              );
            }
            return (
              <h3 key={block.id} id={block.id} className="scroll-mt-24 text-xl md:text-2xl">
                {block.text}
              </h3>
            );

          case 'paragraph':
            return (
              <p key={`p-${index}`} className="text-muted-foreground leading-relaxed">
                {block.text}
              </p>
            );

          case 'bullets':
            return (
              <ul key={`ul-${index}`} className="text-muted-foreground list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item.slice(0, 48)} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );

          case 'blockquote':
            return (
              <figure
                key={`bq-${index}`}
                className="border-brand-600 bg-muted/50 space-y-2 border-l-4 py-1 pl-5"
              >
                <blockquote className="text-foreground text-lg leading-relaxed italic">
                  {block.text}
                </blockquote>
                {block.attribution ? (
                  <figcaption className="text-muted-foreground text-sm not-italic">
                    — {block.attribution}
                  </figcaption>
                ) : null}
              </figure>
            );

          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
