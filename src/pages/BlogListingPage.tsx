import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SEO } from "@/components/seo";

const categoryColors: Record<string, string> = {
  SEO: 'text-blue-400 bg-blue-400/10',
  GEO: 'text-purple-400 bg-purple-400/10',
  AEO: 'text-green-400 bg-green-400/10',
  Strategy: 'text-yellow-400 bg-yellow-400/10',
  'Local SEO': 'text-orange-400 bg-orange-400/10',
  'AI Automation': 'text-cyan-400 bg-cyan-400/10',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const BlogListingPage = () => {
  useEffect(() => {
    document.title = "Vyzma AI Blog — SEO, GEO, AEO & AI Automation Insights";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'SEO, GEO, AEO, and AI automation insights for Indian businesses. Practical guides on AI chatbots, workflow automation, voice AI, and digital growth.');
    }
  }, []);

  return (
    <>
      <SEO
        title="Blog — Vyzma AI | SEO, GEO, AEO & AI Automation Insights for Indian Businesses"
        description="Practical SEO, GEO, AEO, and AI automation insights for Indian businesses. Learn how to rank in Google AI Overviews, ChatGPT Search, and grow with AI-powered marketing."
        canonicalUrl="https://vyzma.in/blog"
      />
    <div className="pt-24 min-h-screen bg-[#0C0C0C] text-white">
      {/* Header */}
      <section className="border-b border-white/[0.06] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-general text-[10px] tracking-widest text-[#3DA3FF] uppercase">
            Vyzma AI — Insights
          </p>
          <h1 className="special-font font-zentry text-4xl font-black tracking-tight text-white md:text-6xl">
            BL<b>O</b>G
          </h1>
          <p className="mt-4 max-w-xl text-white/50 font-robert-regular text-sm leading-relaxed">
            SEO, GEO, AEO, and AI automation — practical insights for Indian businesses ready to grow smarter.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-white/[0.16] hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-general font-medium ${categoryColors[post.category] ?? 'text-white/50 bg-white/10'}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-white/30 font-robert-regular">{post.readTime}</span>
                </div>
                <h2 className="mb-2 text-lg font-semibold leading-snug text-white group-hover:text-[#3DA3FF] transition-colors font-robert-medium">
                  {post.title}
                </h2>
                <p className="mb-4 flex-1 text-sm text-white/50 leading-relaxed font-robert-regular">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30 font-robert-regular">{formatDate(post.date)}</span>
                  <span className="text-xs font-medium text-[#3DA3FF] group-hover:underline font-general uppercase tracking-widest">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 font-general text-[10px] tracking-widest text-[#3DA3FF] uppercase">
            Ready to grow?
          </p>
          <h2 className="mb-6 text-2xl font-black text-white font-zentry uppercase">
            Let Vyzma AI build your strategy
          </h2>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#3DA3FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3DA3FF]/90 transition-colors"
          >
            Start a Project →
          </a>
        </div>
      </section>
    </div>
    </>
  );
};
