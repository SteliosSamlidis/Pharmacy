"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-cream"
    >
      {/* Decorative background ring */}
      <div className="absolute w-[750px] h-[750px] rounded-full border border-sand/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[1050px] h-[1050px] rounded-full border border-sand/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Leaf motif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="mb-8"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sage"
        >
          <path
            d="M20 36C20 36 6 28 6 16C6 9.373 12.268 4 20 4C27.732 4 34 9.373 34 16C34 28 20 36 20 36Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="20"
            y1="36"
            x2="20"
            y2="14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="20"
            x2="13"
            y2="14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="25"
            x2="27"
            y2="19"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-charcoal text-center leading-none tracking-tight"
      >
        {site.name}
      </motion.h1>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        className="mt-6 mb-6 w-16 h-px bg-sage origin-left"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
        className="font-sans text-sm md:text-base tracking-[0.25em] uppercase text-charcoal/60 text-center"
      >
        {site.tagline}
      </motion.p>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-charcoal/40 hover:text-sage transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="font-sans text-xs tracking-widest uppercase">Discover</span>
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3L8 13M8 13L4 9M8 13L12 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.a>
    </section>
  );
}
