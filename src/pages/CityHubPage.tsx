import { useParams, Link } from "react-router-dom";
import { CITIES, SERVICES_LIST, getCity, cityHubTitle } from "@/lib/city-data";
import { useEffect } from "react";

export const CityHubPage = () => {
  const { city: citySlug } = useParams<{ city: string }>();
  const city = getCity(citySlug ?? "");

  useEffect(() => {
    if (city) {
      document.title = cityHubTitle(city);
    }
  }, [city]);

  if (!city) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">City Not Found</h1>
          <p className="text-white/50 mb-8">We don't have a page for this city yet. Check our main services or contact us.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">Home</Link>
            <Link to="/blog" className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">Home</Link>
            <span className="text-white/20 mx-2">/</span>
            <span className="text-white/60 text-sm">{city.name}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI & Digital Services in <span className="text-[#c4a05c]">{city.name}</span>
          </h1>
          <p className="text-lg text-white/50 mb-2">{city.tagline}</p>
          <p className="text-white/40 max-w-3xl mb-8">{city.description}</p>

          <div className="flex flex-wrap gap-6 mb-12 text-sm">
            <div className="flex items-center gap-2 text-white/40">
              <span className="text-white/60">Population:</span>
              <span className="text-white/80">{city.population}</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <span className="text-white/60">Known for:</span>
              <span className="text-white/80">{city.knownFor}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_LIST.map((service, i) => (
              <Link
                key={service.slug}
                to={`/${city.slug}/${service.slug}`}
                className="group block p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
              >
                <span className="text-[10px] font-mono tracking-[0.1em] text-white/20 mb-3 block">0{i + 1}</span>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#c4a05c] transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {service.description.replace(/\{city\}/g, city.name)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why {city.name} Businesses Choose Vyzma AI
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            We build AI-powered solutions that help {city.name} businesses automate operations, engage customers, and drive measurable growth. From chatbots and automation to SEO, website design, and digital marketing — we deliver results.
          </p>
          <a
            href="https://wa.me/919139393097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4a05c] text-black font-semibold rounded-lg hover:bg-[#d4b06c] transition-colors"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export const CityServicePage = () => {
  const { city: citySlug, service: serviceSlug } = useParams<{ city: string; service: string }>();
  const city = getCity(citySlug ?? "");
  const service = SERVICES_LIST.find(s => s.slug === serviceSlug);

  useEffect(() => {
    if (city && service) {
      document.title = `${service.shortName} in ${city.name} | Vyzma AI`;
    }
  }, [city, service]);

  if (!city || !service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-white/50 mb-8">This page doesn't exist yet. Check our main services.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20">Home</Link>
            <Link to="/blog" className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20">Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  const desc = service.description.replace(/\{city\}/g, city.name);

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">Home</Link>
            <span className="text-white/20 mx-2">/</span>
            <Link to={`/${city.slug}`} className="text-white/40 hover:text-white/60 text-sm transition-colors">{city.name}</Link>
            <span className="text-white/20 mx-2">/</span>
            <span className="text-white/60 text-sm">{service.shortName}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {service.name} in <span className="text-[#c4a05c]">{city.name}</span>
          </h1>
          <p className="text-white/50 text-lg mb-8">{city.tagline}</p>
          <p className="text-white/40 max-w-3xl mb-12 leading-relaxed">{desc}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              `${city.name} expertise — we understand local business needs`,
              `Team of AI specialists delivering results for Indian businesses`,
              `Proven track record with clients across ${city.name}`,
              `Affordable pricing built for ${city.name} businesses`,
              `Multilingual support — English, Hindi, and regional languages`,
              `End-to-end service from strategy to execution and support`,
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                <span className="text-[#c4a05c] mt-0.5 shrink-0">◆</span>
                <span className="text-white/60 text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/919139393097"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c4a05c] text-black font-semibold rounded-lg hover:bg-[#d4b06c] transition-colors"
            >
              Get Started in {city.name}
            </a>
            <Link
              to={`/${city.slug}`}
              className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              All {city.name} Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Other Services in {city.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES_LIST.filter(s => s.slug !== service.slug).map(s => (
              <Link
                key={s.slug}
                to={`/${city.slug}/${s.slug}`}
                className="block p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all text-sm"
              >
                <span className="text-white/80">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const allCityServicePairs = () => {
  const pairs: { city: string; service: string }[] = [];
  for (const city of CITIES) {
    for (const service of SERVICES_LIST) {
      pairs.push({ city: city.slug, service: service.slug });
    }
  }
  return pairs;
};
