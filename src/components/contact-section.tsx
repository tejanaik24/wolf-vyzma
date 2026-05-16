import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FadeIn } from "@/components/ui/fade-in";

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    businessType: "",
    city: "",
    whatsapp: "",
    challenge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <FadeIn delay={0} x={-30}>
          <h2 className="text-white font-black text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.9] mb-4">
            Let's Talk About<br />Your Business
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
            Free 30-minute call. No sales pitch. We'll show you exactly what AI can do
            for your business and what it will cost. You decide if it makes sense.
          </p>

          <a
            href="https://wa.me/918886720908"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white rounded-full px-6 py-3 font-medium text-sm mb-6 hover:opacity-90 transition"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp: 8886720908
          </a>

          <p className="text-white/60 text-sm mb-2">
            📧 vyzmaai.in@gmail.com
          </p>
          <p className="text-white/40 text-xs">
            We reply within 2 hours on WhatsApp.<br />
            Within 24 hours on email.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} x={30}>
          <div className="bg-[#14151A] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-[#0C0C0C] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#3DA3FF] outline-none transition placeholder:text-white/30"
              />
              <select
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="w-full bg-[#0C0C0C] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#3DA3FF] outline-none transition"
              >
                <option value="">Business Type</option>
                <option value="Clinic">Clinic / Hospital</option>
                <option value="Restaurant">Restaurant / Cafe</option>
                <option value="Gym">Gym / Fitness</option>
                <option value="Coaching">Coaching Institute</option>
                <option value="RealEstate">Real Estate</option>
                <option value="Ecommerce">E-commerce</option>
                <option value="Retail">Local Shop / Retail</option>
                <option value="Other">Other</option>
              </select>
              <input
                name="city"
                placeholder="Your City"
                value={form.city}
                onChange={handleChange}
                className="w-full bg-[#0C0C0C] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#3DA3FF] outline-none transition placeholder:text-white/30"
              />
              <input
                name="whatsapp"
                type="tel"
                placeholder="WhatsApp Number"
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full bg-[#0C0C0C] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#3DA3FF] outline-none transition placeholder:text-white/30"
              />
              <textarea
                name="challenge"
                placeholder="What is your biggest challenge right now?"
                value={form.challenge}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[#0C0C0C] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#3DA3FF] outline-none transition placeholder:text-white/30 resize-none"
              />
              <button className="w-full bg-[#3DA3FF] text-white rounded-full px-6 py-3 font-medium text-sm uppercase tracking-wider hover:bg-[#3DA3FF]/90 transition">
                Send Message →
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
