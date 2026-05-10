"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Brands() {
  return (
    <section id="brands" className="py-28 md:py-36 px-6 bg-white">
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
            Curated Selection
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl font-light text-charcoal"
          >
            The Brands We Trust
          </motion.h2>
        </motion.div>

        {/* Brand grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {site.brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeUp}
              className="group flex flex-col items-center justify-center gap-3 p-8 bg-cream rounded-sm border border-transparent hover:border-sand transition-all duration-300 cursor-default"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 rounded-full bg-sand/40 group-hover:bg-sage/10 flex items-center justify-center transition-colors duration-300">
                <span className="font-serif text-xl font-semibold text-charcoal/30 group-hover:text-sage transition-colors duration-300 select-none">
                  {brand.name[0]}
                </span>
              </div>
              <div className="text-center">
                <p className="font-sans text-sm font-medium text-charcoal/70 group-hover:text-charcoal transition-colors duration-200">
                  {brand.name}
                </p>
                <p className="font-sans text-xs text-charcoal/40 mt-0.5">
                  {brand.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 font-sans text-xs text-charcoal/40 text-center tracking-wide"
        >
          And many more — visit us in store to explore our full range.
        </motion.p>
      </div>
    </section>
  );
}
