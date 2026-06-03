import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { BLOG_POSTS } from "@/lib/blog-data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderContent(content: string) {
  const paragraphs = content.split('\n\n');
  return paragraphs.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-white font-robert-medium">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith('### ')) {
      return (
        <h3 key={i} className="mt-6 mb-3 text-lg font-semibold text-white font-robert-medium">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.includes('|') && block.includes('---')) {
      const lines = block.split('\n').filter(Boolean);
      const headers = lines[0].split('|').filter((c) => c.trim()).map((c) => c.trim());
      const rows = lines.slice(2).map((line) =>
        line.split('|').filter((c) => c.trim()).map((c) => c.trim())
      );
      return (
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm text-white/80 font-robert-regular">
            <thead>
              <tr className="border-b border-white/10">
                {headers.map((h, j) => (
                  <th key={j} className="px-3 py-2 text-left font-semibold text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className="border-b border-white/5">
                  {row.map((cell, k) => (
                    <td key={k} className="px-3 py-2 text-white/70">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith('1. ') || block.startsWith('- ')) {
      const isOrdered = block.startsWith('1. ');
      const items = block.split('\n').filter(Boolean);
      const ListTag = isOrdered ? 'ol' : 'ul';
      const listClass = isOrdered ? 'list-decimal' : 'list-disc';
      return (
        <ListTag key={i} className={`my-4 space-y-2 pl-6 ${listClass}`}>
          {items.map((item, j) => (
            <li key={j} className="text-white/70 leading-relaxed pl-2 font-robert-regular"
                dangerouslySetInnerHTML={{
                  __html: item.replace(/^[\d]+\. /, '').replace(/^- /, '')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                }} />
          ))}
        </ListTag>
      );
    }
    if (block.startsWith('![')) {
      const match = block.match(/!\[(.+?)\]\((.+?)\)/);
      if (match) {
        return (
          <div key={i} className="my-8 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0d0d1a]">
            <img
              src={match[2]}
              alt={match[1]}
              className="w-full object-contain" style={{ aspectRatio: '16/9' }}
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-white/30 italic font-robert-regular">{match[1]}</p>
          </div>
        );
      }
    }
    if (block.startsWith('[') && block.includes('](')) {
      const match = block.match(/\[(.+?)\]\((.+?)\)/);
      if (match) {
        return (
          <div key={i} className="my-8">
            <a
              href={match[2]}
              className="inline-flex items-center justify-center rounded-lg bg-[#3DA3FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3DA3FF]/90 transition-colors font-robert-medium"
            >
              {match[1]}
            </a>
          </div>
        );
      }
    }
    const boldRendered = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return (
      <p
        key={i}
        className="my-4 text-white/70 leading-relaxed font-robert-regular"
        dangerouslySetInnerHTML={{ __html: boldRendered }}
      />
    );
  });
}

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement('meta');
    const parts = selector.match(/\[([\w-]+)=['"](.+?)['"]\]/);
    if (parts) { el.setAttribute(parts[1], parts[2]); }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Dynamic SEO updates for JS-executing crawlers
  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      setMeta('meta[name="description"]', 'content', post.metaDescription);
      setMeta('meta[property="og:title"]', 'content', post.metaTitle);
      setMeta('meta[property="og:description"]', 'content', post.metaDescription);
      setMeta('meta[property="og:url"]', 'content', `https://vyzma.in/blog/${post.slug}`);
      setMeta('meta[name="twitter:title"]', 'content', post.metaTitle);
      setMeta('meta[name="twitter:description"]', 'content', post.metaDescription);
      setMeta('link[rel="canonical"]', 'href', `https://vyzma.in/blog/${post.slug}`);

      // Remove old schemas, inject fresh ones
      document.querySelectorAll('script[data-dynamic]').forEach((s) => s.remove());

      const schemas: Record<string, unknown>[] = [];

      // BlogPosting schema
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `https://vyzma.in/blog/${post.slug}#blogposting`,
        headline: post.title,
        description: post.excerpt,
        url: `https://vyzma.in/blog/${post.slug}`,
        datePublished: post.date,
        author: {
          '@type': 'Organization',
          name: post.author?.name ?? 'Vyzma AI',
          url: 'https://vyzma.in/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Vyzma AI',
          url: 'https://vyzma.in/',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://vyzma.in/blog/${post.slug}`,
        },
      });

      // BreadcrumbList schema
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vyzma.in/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vyzma.in/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://vyzma.in/blog/${post.slug}` },
        ],
      });

      // FAQPage schema (if the post has FAQ data)
      if (post.faq && post.faq.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `https://vyzma.in/blog/${post.slug}#faq`,
          mainEntity: post.faq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        });
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic', '');
      script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : { '@graph': schemas });
      document.head.appendChild(script);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen bg-[#0C0C0C] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/[0.06] px-6 py-4 md:px-10">
        <div className="mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-[10px] font-general uppercase tracking-widest text-white/30">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full border border-[#3DA3FF]/30 px-3 py-0.5 text-[10px] font-general uppercase tracking-widest text-[#3DA3FF]">
              {post.category}
            </span>
            <span className="text-xs text-white/30 font-robert-regular">{post.readTime}</span>
            <span className="text-xs text-white/30">·</span>
            <span className="text-xs text-white/30 font-robert-regular">{formatDate(post.date)}</span>
          </div>

          <h1 className="mb-6 text-3xl font-black leading-tight text-white md:text-5xl font-zentry uppercase">
            {post.title.split(' ').map((word, i) => (
              <span key={i}>
                {word.includes('o') || word.includes('O') ? (
                  <>
                    {word.split('').map((char, j) =>
                      char.toLowerCase() === 'o' ? <b key={j}>{char}</b> : char
                    )}
                  </>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </h1>

          <p className="mb-10 text-lg text-white/50 leading-relaxed border-l-2 border-[#3DA3FF] pl-4 font-robert-medium">
            {post.excerpt}
          </p>

          <div className="prose-content">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 border-t border-white/[0.06] pt-8 text-center">
            <p className="mb-2 text-[10px] font-general uppercase tracking-widest text-white/40">{post.author ? 'Written by' : 'Published by'}</p>
            <p className="font-semibold text-white font-robert-medium">{post.author ? post.author.name : 'Vyzma AI'}</p>
            {post.author?.title && <p className="text-xs text-white/30 font-robert-regular">{post.author.title}</p>}
            {!post.author && <p className="text-xs text-white/30 font-robert-regular">India's Premier AI Agency · Bangalore & Vizag</p>}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-16 md:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-xl font-bold text-white font-robert-medium">More from the blog</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group rounded-lg border border-white/[0.08] bg-white/[0.02] p-4 transition-all hover:border-white/[0.16]"
                >
                  <span className="mb-2 block text-[10px] font-general uppercase tracking-widest text-[#3DA3FF]">{p.category}</span>
                  <h3 className="text-sm font-semibold text-white/80 leading-snug group-hover:text-white transition-colors font-robert-medium">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
