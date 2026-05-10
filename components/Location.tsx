"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Location() {
  const { location } = site;

  return (
    <section id="location" className="py-28 md:py-36 px-6 bg-white">
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
            Find Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl font-light text-charcoal"
          >
            Come Visit Us
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="w-full aspect-[4/3] bg-sand/30 rounded-sm overflow-hidden"
          >
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pharmacy location map"
            />
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-10 pt-2"
          >
            <motion.div variants={fadeUp}>
              <p className="font-sans text-xs tracking-widest uppercase text-sage mb-3">
                Address
              </p>
              <p className="font-serif text-xl text-charcoal">{location.address}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="font-sans text-xs tracking-widest uppercase text-sage mb-3">
                Contact
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="font-sans font-light text-charcoal/75 hover:text-sage transition-colors"
                >
                  {location.phone}
                </a>
                <a
                  href={`mailto:${location.email}`}
                  className="font-sans font-light text-charcoal/75 hover:text-sage transition-colors"
                >
                  {location.email}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="font-sans text-xs tracking-widest uppercase text-sage mb-3">
                Opening Hours
              </p>
              <div className="flex flex-col gap-2">
                {location.hours.map((h) => (
                  <div key={h.day} className="flex justify-between max-w-xs">
                    <span className="font-sans font-light text-sm text-charcoal/60">
                      {h.day}
                    </span>
                    <span className="font-sans text-sm text-charcoal/80">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
