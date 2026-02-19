import Icon from "@/components/ui/icon";

const facts = [
  { icon: "Package", text: "Более 100 000 выполненных заказов" },
  { icon: "CalendarDays", text: "Работаем почти 3 года, 7 дней в неделю" },
  { icon: "Truck", text: "Собственная логистика и брендированные автомобили" },
  { icon: "ShieldCheck", text: "Юридические гарантии и сохранность груза" },
  { icon: "Sparkles", text: "Понятный сервис без лишней бюрократии" },
];

const WhyFtekSection = () => {
  return (
    <section id="why-ftek" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Почему FTEK
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Факты, которые подтверждают нашу надёжность
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={fact.icon} size={22} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFtekSection;
