import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Обо мне", href: "#about" },
    { label: "Консультация", href: "#consultation" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F0]/90 backdrop-blur-sm border-b border-[rgba(44,24,16,0.08)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-[#1C1208]" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem" }}>
          Дарья Финенко
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#6B5D52] hover:text-[#B84B2A] transition-colors duration-200 text-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#B84B2A] text-[#FAF7F0] text-sm hover:bg-[#9E3D1F] transition-colors duration-200"
        >
          Записаться
        </a>

        <button
          className="md:hidden text-[#1C1208]"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF7F0] border-t border-[rgba(44,24,16,0.08)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1C1208] hover:text-[#B84B2A] transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#B84B2A] text-[#FAF7F0] text-sm mt-2"
          >
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}
