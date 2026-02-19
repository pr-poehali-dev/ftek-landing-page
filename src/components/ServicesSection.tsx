import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "ShoppingBag",
    title: "Маркетплейсы",
    description: "Доставка товаров с маркетплейсов (Wildberries, Ozon и др.) из РФ в ЛНР. Крупногабаритные грузы, понятные условия, быстрые сроки.",
    benefits: [
      "Доставка любых габаритов — от косметики до мебели",
      "Прозрачные тарифы без скрытых доплат",
      "Среднее время доставки — от 5 рабочих дней",
    ],
  },
  {
    icon: "Store",
    title: "Интернет-магазины",
    description: "Доставка заказов из популярных интернет-магазинов РФ. Мы принимаем товар на партнёрских ПВЗ и довозим до города клиента в ЛНР.",
    benefits: [
      "Работаем с любыми интернет-магазинами РФ",
      "Приём на партнёрских пунктах по всей России",
      "Уведомления на каждом этапе доставки",
    ],
  },
  {
    icon: "Truck",
    title: "Транспортные компании",
    description: "Доставка грузов через транспортные компании РФ (СДЭК и др.) с довозом до ПВЗ FTEK в ЛНР.",
    benefits: [
      "Интеграция с крупнейшими ТК России",
      "Сохранность груза и юридические гарантии",
      "Курьерская доставка в отдельных городах",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Услуги FTEK
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Выберите подходящий способ доставки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Icon name={service.icon} size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2.5 mt-auto mb-6">
                {service.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Icon name="Check" size={15} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors mt-auto"
              >
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
