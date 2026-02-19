import Icon from "@/components/ui/icon";

const segments = [
  {
    icon: "User",
    title: "Частные покупатели",
    text: "Заказывают для себя товары из российских маркетплейсов и интернет-магазинов — от одежды и электроники до товаров для дома.",
  },
  {
    icon: "Briefcase",
    title: "Малый бизнес",
    text: "Закупают товары для магазинов, салонов и торговых точек в ЛНР. Регулярные поставки с предсказуемыми сроками.",
  },
  {
    icon: "Heart",
    title: "Родственники и друзья",
    text: "Отправляют и получают посылки и грузы между РФ и ЛНР. Подарки, вещи, всё что нужно близким.",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Кому подходит FTEK
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {segments.map((seg, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={seg.icon} size={22} className="text-accent" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {seg.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {seg.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
