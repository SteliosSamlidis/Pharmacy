import { site } from "@/lib/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/50 bg-cream py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-charcoal/40">
        <a
          href="#hero"
          className="font-serif text-lg font-semibold text-charcoal/70 hover:text-sage transition-colors"
        >
          {site.name}
        </a>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase hover:text-sage transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-sans text-xs">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
