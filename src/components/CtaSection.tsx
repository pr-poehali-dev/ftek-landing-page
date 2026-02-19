import Icon from "@/components/ui/icon";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Начните пользоваться FTEK уже сегодня
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Сделайте онлайн-покупку в РФ и доверьте доставку нам — мы привезём в ваш город в ЛНР.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors"
          >
            Выбрать услугу
            <Icon name="ArrowRight" size={18} />
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors"
          >
            Оформить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
