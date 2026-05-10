"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-sans text-xs tracking-[0.25em] uppercase text-sage mb-16"
        >
          Our Philosophy
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Pull quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="border-l-2 border-sage pl-8"
          >
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-charcoal">
              &ldquo;{site.about.pullQuote}&rdquo;
            </blockquote>
          </motion.div>

          {/* Paragraphs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 pt-2"
          >
            {site.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-sans font-light text-base md:text-lg leading-relaxed text-charcoal/75"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-24 flex items-center gap-6"
        >
          <div className="w-12 h-px bg-sand" />
          <p className="font-sans text-xs tracking-widest uppercase text-charcoal/40">
            Est. 2024 · Thessaloniki, Greece
          </p>
        </motion.div>
      </div>
    </section>
  );
}
