import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa6";

const footerLinks = {
  services: ["AI Chatbots", "AI Voice Agents", "Workflow Automation", "AI Film Making", "Website Design", "SEO + AEO + GEO", "Meta Ads", "Google Ads", "Digital Marketing"],
  industries: ["Clinics & Hospitals", "Restaurants & Cafes", "Gyms & Fitness", "Coaching Institutes", "Real Estate", "D2C & E-commerce", "Retail & Shops"],
  company: ["About Vyzma", "Pricing", "Contact Us", "Bangalore Office", "Vizag Office"],
};

export const Footer = () => {
  const socialIcons = [FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp];

  return (
    <footer className="bg-[#0A0A0D] border-t border-white/5 px-5 sm:px-8 md:px-10 pt-16 pb-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <img src="/img/vyzma-logo.png" alt="Vyzma" className="h-12 w-auto mb-4" />
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            India's most affordable AI agency.<br />
            Helping businesses grow with AI.<br />
            Starting at ₹4,999/month.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((Icon, i) => (
              <a key={i} href="#" className="text-white/30 hover:text-white transition text-lg">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-5">Services</h4>
          <ul className="space-y-2.5">
            {footerLinks.services.map((link) => (
              <li key={link} className="text-white/40 hover:text-white text-sm transition cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-5">Industries</h4>
          <ul className="space-y-2.5">
            {footerLinks.industries.map((link) => (
              <li key={link} className="text-white/40 hover:text-white text-sm transition cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-5">Company</h4>
          <ul className="space-y-2.5">
            {footerLinks.company.map((link) => (
              <li key={link} className="text-white/40 hover:text-white text-sm transition cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">© 2026 Vyzma AI. All rights reserved.</p>
        <p className="text-white/30 text-xs">📱 8886720908 | 📧 vyzmaai.in@gmail.com</p>
        <div className="flex gap-4 text-white/30 text-xs">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
