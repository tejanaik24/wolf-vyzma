import { useEffect } from "react";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement("meta");
    const parts = selector.match(/\[([\w-]+)=['"](.+?)['"]\]/);
    if (parts) { el.setAttribute(parts[1], parts[2]); }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const services = [
  { name: "AI Chatbots", desc: "Customer support, lead capture, WhatsApp and website chatbots — 24/7." },
  { name: "Workflow Automation", desc: "Connect your apps, eliminate manual data entry, automate repetitive tasks." },
  { name: "Answer Engine Optimisation", desc: "Rank in Google AI Overviews, ChatGPT, Perplexity — AI search for Indian businesses." },
  { name: "Voice AI", desc: "Multi-language voice assistants for phone support, IVR replacement, outbound calling." },
  { name: "Website Design", desc: "High-performance Next.js websites with AI-powered personalisation." },
  { name: "Google Ads", desc: "AI-optimised PPC, Local Services Ads, smart bidding for Indian markets." },
  { name: "WhatsApp Marketing", desc: "Broadcast campaigns, chatbot automation, WhatsApp Business API." },
  { name: "Performance Marketing", desc: "Meta Ads, Google Ads, AI-optimised digital advertising." },
];

const offices = [
  { city: "Visakhapatnam", address: "Madhurawada, Visakhapatnam — 530041", role: "Growth Hub" },
  { city: "Bangalore", address: "Koramangala, Bangalore — 560034", role: "Innovation Hub" },
];

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About Teja Naik & Vyzma AI | AI Agency India";
    setMeta('meta[name="description"]', "content", "Teja Naik is the founder of Vyzma AI, India's premier AI agency with offices in Visakhapatnam and Bangalore. We help Indian businesses automate with AI.");
    setMeta('meta[property="og:title"]', "content", "About Teja Naik & Vyzma AI | AI Agency India");
    setMeta('meta[property="og:description"]', "content", "Teja Naik is the founder of Vyzma AI, India's premier AI agency with offices in Visakhapatnam and Bangalore. We help Indian businesses automate with AI.");
    setMeta('meta[property="og:url"]', "content", "https://vyzma.in/about");
    setMeta('meta[property="og:type"]', "content", "profile");
    setMeta('meta[name="twitter:title"]', "content", "About Teja Naik & Vyzma AI | AI Agency India");
    setMeta('meta[name="twitter:description"]', "content", "Teja Naik is the founder of Vyzma AI, India's premier AI agency with offices in Visakhapatnam and Bangalore. We help Indian businesses automate with AI.");
    setMeta('link[rel="canonical"]', "href", "https://vyzma.in/about");

    document.querySelectorAll('script[data-dynamic]').forEach((s) => s.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-dynamic", "");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vyzma.in/about#person",
      "name": "Teja Naik",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://vyzma.in/#organization",
        "name": "Vyzma AI",
        "url": "https://vyzma.in/"
      },
      "url": "https://vyzma.in/about",
      "sameAs": [
        "https://linkedin.com/company/vyzmaai",
        "https://instagram.com/vyzmaai"
      ],
      "knowsAbout": ["Artificial Intelligence", "AI Agents", "Digital Marketing", "SEO", "Workflow Automation"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Visakhapatnam",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      }
    }, null, 2);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#0C0C0C] text-white">
      <section className="px-5 sm:px-8 md:px-10 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="hero-gradient font-black uppercase text-center text-[clamp(2.5rem,10vw,100px)] leading-[0.9] mb-16 font-zentry">
            About Vyzma AI
          </h1>

          {/* Founder */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 font-robert-medium">The Founder</h2>
            <div className="bg-[#14151A] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white font-robert-medium">Teja Naik</h3>
              <p className="text-[#3DA3FF] text-sm font-medium mb-4">Founder & CEO</p>
              <p className="text-white/70 leading-relaxed font-robert-regular">
                Based in Visakhapatnam. Started Vyzma AI in 2024 with a simple mission: make AI accessible to every Indian business, not just big corporations.
              </p>
              <p className="text-white/70 leading-relaxed mt-4 font-robert-regular">
                Teja founded Vyzma AI after seeing Indian SMEs pay ₹50,000+ per month for mediocre AI solutions built by agencies that did not understand local business needs. He believed businesses in Vizag, Bangalore, and beyond deserved better — AI that actually works, at prices that make sense, with support in the languages their customers speak.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 font-robert-medium">What We Do</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.name} className="bg-[#14151A] border border-white/10 rounded-xl p-6">
                  <h3 className="text-base font-semibold text-white mb-2 font-robert-medium">{s.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-robert-regular">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-6 font-robert-medium">Our Offices</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {offices.map((o) => (
                <div key={o.city} className="bg-[#14151A] border border-white/10 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-white font-robert-medium">{o.city}</h3>
                  <p className="text-[#3DA3FF] text-sm font-medium mb-2">{o.role}</p>
                  <p className="text-sm text-white/50 font-robert-regular">{o.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/#contact"
              className="inline-block rounded-full px-10 py-4 text-sm font-medium text-white uppercase tracking-widest"
              style={{ background: "linear-gradient(135deg, #3DA3FF, #8A5CFF)" }}
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
