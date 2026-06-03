export interface City {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  population: string;
  knownFor: string;
}

export interface ServiceInfo {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  keywords: string[];
}

export const CITIES: City[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "India's Financial & Commercial Capital",
    description: "Mumbai, the city that never sleeps, is home to India's largest concentration of businesses — from Bollywood to fintech, real estate to hospitality. As the financial capital, Mumbai businesses need cutting-edge AI solutions to stay competitive in the world's most demanding market.",
    population: "12.6M+",
    knownFor: "Financial district, Bollywood, startups, real estate",
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    tagline: "India's Capital & Political Hub",
    description: "Delhi NCR, encompassing Delhi, Gurgaon, and Noida, is India's largest metropolitan region and a powerhouse of commerce, politics, and technology. From government contracts to B2B services, Delhi businesses need AI-driven efficiency to lead the national capital region.",
    population: "19M+",
    knownFor: "Government, trade, manufacturing, startups",
  },
  {
    slug: "bangalore",
    name: "Bengaluru",
    state: "Karnataka",
    tagline: "India's Silicon Valley & Tech Capital",
    description: "Bengaluru (Bangalore) is India's undisputed tech capital, home to thousands of startups, global R&D centers, and the most concentrated pool of tech talent in the country. From Koramangala to Whitefield, Bangalore businesses rely on AI to innovate faster and scale smarter.",
    population: "8.4M+",
    knownFor: "IT parks, startups, R&D centers, innovation",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tagline: "The City of Pearls & Tech Innovation",
    description: "Hyderabad, with its world-class HITEC City and thriving pharma ecosystem, has emerged as India's second-largest tech hub. From Gachibowli to Madhapur, Hyderabad businesses are adopting AI at scale to power everything from life sciences to enterprise software.",
    population: "6.9M+",
    knownFor: "Pharma, IT/ITES, biotechnology, startups",
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    tagline: "India's Manufacturing & Auto Hub",
    description: "Chennai, the Detroit of India, is a powerhouse of manufacturing, automotive, and IT services. From OMR to the industrial corridors, Chennai businesses are leveraging AI to optimize supply chains, improve manufacturing quality, and deliver world-class software.",
    population: "7.1M+",
    knownFor: "Automotive, manufacturing, IT, healthcare",
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    tagline: "The City of Joy — Eastern India's Business Hub",
    description: "Kolkata, the cultural and commercial capital of Eastern India, has a rich legacy of industry, trade, and intellectual capital. From Salt Lake Sector V to the CBD, Kolkata businesses are embracing AI to modernize traditional industries and drive digital transformation across the eastern corridor.",
    population: "4.5M+",
    knownFor: "Manufacturing, IT, education, cultural industries",
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    tagline: "India's Education & Automotive Hub",
    description: "Pune, the Oxford of the East, combines a thriving education ecosystem with a booming automotive and IT industry. From Hinjawadi to Kharadi, Pune businesses are leveraging AI for everything from car manufacturing to edtech, making it one of India's fastest-growing AI adoption markets.",
    population: "3.1M+",
    knownFor: "Automotive, education, IT, manufacturing",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    tagline: "India's Commercial & Industrial Powerhouse",
    description: "Ahmedabad, the commercial capital of Gujarat, is a hub of trade, textiles, pharmaceuticals, and manufacturing. From the SG Highway corridor to the GIFT City financial hub, Ahmedabad businesses are rapidly adopting AI to drive efficiency in traditional industries and build the next generation of smart enterprises.",
    population: "5.6M+",
    knownFor: "Textiles, pharma, trading, manufacturing",
  },
  {
    slug: "vizag",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    tagline: "The City of Destiny — Emerging Tech Hub",
    description: "Visakhapatnam (Vizag) is quickly emerging as Andhra Pradesh's tech and business capital. With the Rushikonda IT corridor, expanding startup ecosystem, and strategic port economy, Vizag businesses are turning to AI to accelerate growth and compete on a national scale.",
    population: "2.0M+",
    knownFor: "IT corridor, port economy, tourism, startups",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City — Rajasthan's Business Capital",
    description: "Jaipur, Rajasthan's largest city and a UNESCO World Heritage site, blends a rich cultural heritage with a growing business ecosystem. From textile exports to tourism tech, Jaipur businesses are adopting AI to modernize traditional industries and reach global markets.",
    population: "3.0M+",
    knownFor: "Tourism, textiles, handicrafts, trade",
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    tagline: "The City of Nawabs — Uttar Pradesh's Growth Engine",
    description: "Lucknow, the capital of Uttar Pradesh, is emerging as a major business and technology hub in Northern India. With a growing startup ecosystem and government-backed IT initiatives, Lucknow businesses are embracing AI to drive digital transformation across the state.",
    population: "2.8M+",
    knownFor: "IT services, education, manufacturing, trade",
  },
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    tagline: "India's Diamond & Textile Capital",
    description: "Surat, the diamond polishing and textile capital of India, is one of the fastest-growing cities in the world. From diamond trading to textile manufacturing, Surat businesses are leveraging AI for quality control, inventory management, and global trade optimization.",
    population: "4.5M+",
    knownFor: "Diamonds, textiles, trading, manufacturing",
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    tagline: "The Queen of the Arabian Sea — Kerala's Tech Hub",
    description: "Kochi (Cochin), the commercial capital of Kerala, is a major port city and the state's technology hub. With the InfoPark and SmartCity Kochi campuses driving IT growth, Kochi businesses are adopting AI for logistics, tourism, and fintech innovation.",
    population: "2.1M+",
    knownFor: "Port, IT parks, tourism, spices trade",
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    tagline: "The City of Lakes — Central India's Tech Hub",
    description: "Bhopal, the capital of Madhya Pradesh, is emerging as a technology and education hub in Central India. With government IT initiatives and a growing startup scene, Bhopal businesses are turning to AI to drive efficiency and innovation.",
    population: "1.8M+",
    knownFor: "IT, education, manufacturing, tourism",
  },
  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    tagline: "India's Cleanest City & Commercial Hub",
    description: "Indore, consistently ranked India's cleanest city, is the commercial capital of Madhya Pradesh. From textile trading to IT services, Indore businesses are rapidly adopting AI to modernize operations and drive growth in Central India's most dynamic economy.",
    population: "2.0M+",
    knownFor: "Trading, textiles, IT, education",
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    tagline: "India's Best Planned City — IT & Innovation Hub",
    description: "Chandigarh, India's first planned city, serves as the capital of both Punjab and Haryana. With the Chandigarh IT Park and a thriving startup ecosystem, Chandigarh businesses are leveraging AI to drive innovation across North India.",
    population: "1.0M+",
    knownFor: "IT park, education, healthcare, design",
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    tagline: "The Orange City — India's Geographic Center",
    description: "Nagpur, located at India's geographic center, is a growing logistics and IT hub in Maharashtra. With the MIHAN project and expanding IT corridor, Nagpur businesses are adopting AI to drive efficiency in logistics, manufacturing, and services.",
    population: "2.4M+",
    knownFor: "Logistics, IT, manufacturing, education",
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    tagline: "The Manchester of South India",
    description: "Coimbatore, the textile and engineering hub of Tamil Nadu, is a rapidly growing industrial center. From textile manufacturing to foundries and IT services, Coimbatore businesses are leveraging AI to optimize production and compete globally.",
    population: "1.0M+",
    knownFor: "Textiles, engineering, manufacturing, IT",
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    tagline: "The Temple City — Eastern India's Tech Hub",
    description: "Bhubaneswar, the capital of Odisha, is emerging as a technology and startup hub in Eastern India. With the Infocity IT park and a growing startup ecosystem, Bhubaneswar businesses are adopting AI to drive digital transformation across the state.",
    population: "1.0M+",
    knownFor: "IT parks, education, startups, tourism",
  },
  {
    slug: "guwahati",
    name: "Guwahati",
    state: "Assam",
    tagline: "The Gateway to Northeast India",
    description: "Guwahati, the largest city in Northeast India, is the region's commercial and educational hub. With growing IT infrastructure and a vibrant startup ecosystem, Guwahati businesses are turning to AI to connect the Northeast to India's digital economy.",
    population: "1.0M+",
    knownFor: "Trade, education, tourism, IT services",
  },
];

export const SERVICES_LIST: ServiceInfo[] = [
  {
    slug: "ai-agency",
    name: "AI Agency Services",
    shortName: "AI Services",
    description: "Full-stack AI agency services including chatbots, automation, AI search optimization, voice AI, and custom AI development. We help businesses in {city} leverage the latest AI technologies to automate workflows, engage customers, and drive revenue growth.",
    keywords: ["AI agency", "artificial intelligence services", "AI consulting"],
  },
  {
    slug: "website-design",
    name: "Website Design & Development",
    shortName: "Website Design",
    description: "High-performance websites built with Next.js and React — sub-2 second loads, SEO-ready architecture, AI integrations, and mobile-first design tailored for {city} businesses. From landing pages to complex web applications.",
    keywords: ["website design", "web development", "web design company"],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media",
    description: "Strategic social media management for {city} businesses — content creation, community management, paid advertising on Meta, Instagram, LinkedIn, and Twitter. Build brand presence and drive engagement across all platforms.",
    keywords: ["social media management", "social media marketing", "SMM"],
  },
  {
    slug: "seo-services",
    name: "SEO & AI Search Optimization",
    shortName: "SEO Services",
    description: "Rank higher on Google and get cited by ChatGPT, Claude, and Perplexity. Technical SEO, local SEO, content strategy, and GEO (Generative Engine Optimization) for {city} businesses looking to dominate search results.",
    keywords: ["SEO services", "search engine optimization", "SEO agency"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    description: "Data-driven digital marketing for {city} businesses — SEO, Google Ads, Meta Ads, content marketing, email marketing, and analytics. Full-funnel strategies that drive measurable ROI and business growth.",
    keywords: ["digital marketing", "online marketing", "digital marketing agency"],
  },
  {
    slug: "google-ads",
    name: "Google Ads Management",
    shortName: "Google Ads",
    description: "Expert Google Ads management for {city} businesses — search, display, shopping, and Local Services Ads. Data-driven bidding, A/B testing, and landing page optimization to maximize ROAS.",
    keywords: ["Google Ads", "PPC management", "Google advertising"],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots & Automation",
    shortName: "AI Chatbots",
    description: "Deploy AI-powered chatbots on your website and WhatsApp for {city} businesses. GPT-4o and Claude-powered — handles customer queries, books appointments, qualifies leads, and works 24/7 in multiple Indian languages.",
    keywords: ["AI chatbots", "chatbot development", "WhatsApp chatbot"],
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    shortName: "WhatsApp Marketing",
    description: "WhatsApp Business API marketing for {city} businesses — broadcast campaigns, AI chatbot integration, order notifications, and two-way customer engagement at 98% open rates.",
    keywords: ["WhatsApp marketing", "WhatsApp Business API", "WhatsApp chatbot"],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find(c => c.slug === slug);
}

export function getService(slug: string): ServiceInfo | undefined {
  return SERVICES_LIST.find(s => s.slug === slug);
}

export function cityServiceTitle(service: ServiceInfo, city: City): string {
  return `${service.shortName} in ${city.name} | Vyzma AI`;
}

export function cityServiceDescription(service: ServiceInfo, city: City): string {
  return service.description.replace(/\{city\}/g, city.name);
}

export function cityHubTitle(city: City): string {
  return `AI & Digital Services in ${city.name} | Vyzma AI`;
}

export function cityHubDescription(city: City): string {
  return `Best AI agency, website design, and digital marketing services in ${city.name}, ${city.state}. ${city.tagline}. Vyzma AI helps ${city.name} businesses grow with AI-powered solutions.`;
}
