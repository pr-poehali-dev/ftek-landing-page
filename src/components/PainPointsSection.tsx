import Icon from "@/components/ui/icon";

const points = [
  {
    icon: "Ban",
    pain: "Нет прямого доступа к маркетплейсам и логистическим сервисам РФ",
    solution: "FTEK даёт этот доступ через единый сервис доставки",
  },
  {
    icon: "Car",
    pain: "Нужно ехать в Ростов или другой город РФ, чтобы забрать посылку",
    solution: "Мы доставляем заказы в пункты выдачи FTEK в ЛНР",
  },
  {
    icon: "HelpCircle",
    pain: "Сложно разобраться, как оформить доставку и отслеживать заказ",
    solution: "Простой алгоритм в три шага и уведомления о статусе",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Какие задачи решает FTEK
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Мы закрываем основные сложности доставки из РФ в ЛНР
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <Icon name={point.icon} size={20} className="text-destructive" />
              </div>
              <p className="text-sm font-medium text-foreground/60 mb-3 leading-relaxed">
                {point.pain}
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-foreground leading-relaxed">
                    {point.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
