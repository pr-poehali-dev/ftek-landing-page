import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Услуги", href: "#services" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "О нас", href: "#why-ftek" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold tracking-tight text-primary select-none">
          FTEK
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#services"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
        >
          Выбрать услугу
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#services"
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Выбрать услугу
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;