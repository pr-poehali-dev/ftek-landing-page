import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Дойдёт ли моя посылка?",
    a: "Да. За почти три года работы мы доставили более 100 000 заказов. Каждой посылке присваивается трек-номер, вы можете отслеживать статус в личном кабинете. Мы несём ответственность за сохранность груза на всём пути.",
  },
  {
    q: "Сколько стоит доставка?",
    a: "Стоимость зависит от веса, габаритов и типа услуги. Базовые тарифы начинаются от 300 ₽ за посылку. Точную стоимость вы узнаете при оформлении заявки — никаких скрытых доплат.",
  },
  {
    q: "Сколько идёт доставка?",
    a: "Среднее время доставки — от 5 до 10 рабочих дней с момента поступления товара на наш склад. Сроки зависят от маршрута и загруженности, но мы всегда информируем о статусе.",
  },
  {
    q: "Что делать, если с товаром проблема?",
    a: "Свяжитесь с нами через форму на сайте или по телефону. Мы поможем оформить возврат или решить вопрос с продавцом. Если повреждение произошло при доставке — компенсируем.",
  },
  {
    q: "Как оформить первый заказ, если я никогда не пользовался сервисом?",
    a: "Зайдите на сайт, выберите услугу и следуйте инструкции. На каждом шаге есть подсказки. Если возникнут вопросы — наша поддержка поможет оформить заказ за пару минут.",
  },
  {
    q: "Можно ли доставить крупногабаритный груз?",
    a: "Да, мы доставляем грузы любых размеров — от небольших посылок до мебели и бытовой техники. Крупногабаритные отправления рассчитываются по отдельному тарифу.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
