import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "ShoppingCart",
    title: "Заказываете товар",
    text: "Оформляете покупку в маркетплейсе, интернет-магазине или через транспортную компанию РФ по нашей инструкции.",
  },
  {
    num: "02",
    icon: "FileText",
    title: "Оформляете заявку",
    text: "Создаёте заявку на сайте FTEK и получаете трек-номер для отслеживания статуса доставки.",
  },
  {
    num: "03",
    icon: "PackageCheck",
    title: "Забираете посылку",
    text: "Получаете заказ в пункте выдачи FTEK в ЛНР или курьерской доставкой, если она доступна в вашем городе.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Как это работает
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Три простых шага от заказа до получения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="text-6xl font-extrabold text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                {step.num}
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5">
                  <Icon name={step.icon} size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-4 w-8 text-primary/20">
                  <Icon name="ChevronRight" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 max-w-lg mx-auto">
          Привычная и понятная схема: заказ → заявка → получение. Без лишних шагов и бюрократии.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
