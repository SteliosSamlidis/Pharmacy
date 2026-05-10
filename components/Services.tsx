"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const icons: Record<string, React.ReactNode> = {
  drop: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L6 11.5a6 6 0 1 0 12 0L12 3z" />
    </svg>
  ),
  flower: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="6.5" rx="2" ry="3" />
      <ellipse cx="12" cy="17.5" rx="2" ry="3" />
      <ellipse cx="6.5" cy="12" rx="3" ry="2" />
      <ellipse cx="17.5" cy="12" rx="3" ry="2" />
    </svg>
  ),
  leaf: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C12 22 4 16 4 10a8 8 0 0 1 16 0c0 6-8 12-8 12z" />
      <line x1="12" y1="22" x2="12" y2="9" />
      <line x1="12" y1="13" x2="8.5" y2="10" />
      <line x1="12" y1="17" x2="15.5" y2="14" />
    </svg>
  ),
  heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  flask: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v8.5L5.5 18A2 2 0 0 0 7.36 21h9.28a2 2 0 0 0 1.86-3L15 11.5V3" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  ),
  sun: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs tracking-[0.25em] uppercase text-sage mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl font-light text-charcoal"
          >
            How We Can Help
          </motion.h2>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {site.services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group flex flex-col gap-5 p-8 border-l-2 border-sand hover:border-sage bg-white transition-colors duration-300"
            >
              <div className="text-sage/70 group-hover:text-sage transition-colors duration-300">
                {icons[service.icon]}
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="font-sans font-light text-sm leading-relaxed text-charcoal/60">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
