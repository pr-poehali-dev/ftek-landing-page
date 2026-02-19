import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Как это работает", href: "#how" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#why" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const Index = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-primary">
            FTEK
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:inline-flex" asChild>
            <a href="#services">Выбрать услугу</a>
          </Button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Icon name={mobileMenu ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full" asChild>
              <a href="#services" onClick={() => setMobileMenu(false)}>
                Выбрать услугу
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2440] to-[#162d50]" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.poehali.dev/projects/33e848ff-65e7-4d3b-95ac-16b0d6501c89/files/a05532a0-e9e1-43f6-9b85-1b89be03ff4a.jpg')",
          }}
        />
        <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              FTEK — ваш единый сервис
              <br />
              <span className="text-blue-300">для онлайн-покупок и логистики</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100/80 mb-10 max-w-2xl leading-relaxed">
              Заказывайте на маркетплейсах и в интернет-магазинах РФ — мы доставим
              в ЛНР без сложностей и лишних поездок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6" asChild>
                <a href="#services">Выбрать услугу</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="#how">Как это работает</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Какие проблемы мы решаем
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Знаем, с чем сталкиваются жители ЛНР при онлайн-покупках — и закрываем каждую из этих проблем
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Ban",
                pain: "Нет прямого доступа к маркетплейсам и логистическим сервисам РФ",
                solution:
                  "FTEK даёт этот доступ через единый сервис доставки — без посредников и переплат.",
              },
              {
                icon: "MapPin",
                pain: "Нужно ехать в Ростов или другой город РФ, чтобы забрать посылку",
                solution:
                  "Мы доставляем заказы в пункты выдачи FTEK в ЛНР — забирайте у себя в городе.",
              },
              {
                icon: "HelpCircle",
                pain: "Сложно разобраться, как оформить доставку и отслеживать заказ",
                solution:
                  "Простой алгоритм в три шага и уведомления о статусе на каждом этапе.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-5">
                  <Icon name={item.icon} size={24} className="text-red-500" />
                </div>
                <p className="font-semibold text-foreground mb-3">{item.pain}</p>
                <div className="w-8 h-0.5 bg-primary mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Как это работает
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Три простых шага от заказа до получения
          </p>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-border" />
            {[
              {
                step: "01",
                title: "Заказываете товар",
                desc: "Оформляете заказ в маркетплейсе, интернет-магазине или через транспортную компанию РФ по нашей инструкции.",
                icon: "ShoppingCart",
              },
              {
                step: "02",
                title: "Оформляете заявку",
                desc: "Создаёте заявку на сайте FTEK и получаете трек-номер для отслеживания статуса доставки.",
                icon: "FileText",
              },
              {
                step: "03",
                title: "Забираете посылку",
                desc: "Получаете заказ в пункте выдачи FTEK в ЛНР или курьерской доставкой, если она доступна в вашем городе.",
                icon: "PackageCheck",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-lg font-bold relative z-10">
                  <Icon name={item.icon} size={28} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                  Шаг {item.step}
                </span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-14 text-sm max-w-lg mx-auto">
            Привычная схема: заказ → заявка → получение. Никаких сложных процедур — всё
            прозрачно и понятно с первого раза.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Услуги FTEK
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Выберите подходящий вариант доставки
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Store",
                title: "Маркетплейсы",
                desc: "Доставка товаров с Wildberries, Ozon и других маркетплейсов из РФ в ЛНР. Принимаем крупногабаритные грузы.",
                bullets: [
                  "Понятные условия и фиксированные тарифы",
                  "Крупногабаритные грузы без ограничений",
                  "Сроки доставки от 3 рабочих дней",
                ],
              },
              {
                icon: "Globe",
                title: "Интернет-магазины",
                desc: "Доставка заказов из популярных интернет-магазинов РФ. Принимаем товар на партнёрских ПВЗ и довозим до вашего города.",
                bullets: [
                  "Приём на партнёрских ПВЗ в РФ",
                  "Доставка до ПВЗ FTEK в ЛНР",
                  "Уведомления о статусе на каждом этапе",
                ],
              },
              {
                icon: "Truck",
                title: "Транспортные компании",
                desc: "Доставка грузов через СДЭК и другие ТК РФ с довозом до пунктов выдачи FTEK в ЛНР.",
                bullets: [
                  "Работаем с СДЭК, ПЭК и другими ТК",
                  "Консолидация грузов на складе",
                  "Курьерская доставка в отдельных городах",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FTEK */}
      <section id="why" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Почему FTEK
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Факты, которые говорят за нас
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "PackageCheck",
                value: "100 000+",
                text: "выполненных заказов",
              },
              {
                icon: "CalendarCheck",
                value: "~3 года",
                text: "работы, 7 дней в неделю",
              },
              {
                icon: "Truck",
                value: "Своя логистика",
                text: "и брендированные автомобили",
              },
              {
                icon: "ShieldCheck",
                value: "Гарантии",
                text: "юридические, сохранность груза",
              },
              {
                icon: "Sparkles",
                value: "Просто",
                text: "понятный сервис без бюрократии",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-border bg-white"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>
                <div className="text-xl font-bold mb-1">{item.value}</div>
                <div className="text-muted-foreground text-sm">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Кому подходит FTEK
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
            Наш сервис создан для разных задач
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "User",
                title: "Частные покупатели",
                desc: "Заказываете товары из РФ для себя и семьи — одежду, электронику, товары для дома. Мы привезём всё в ваш город.",
              },
              {
                icon: "Briefcase",
                title: "Малый бизнес",
                desc: "Закупаете товары для магазина или точки в ЛНР. Регулярные поставки, консолидация грузов, понятные условия.",
              },
              {
                icon: "Heart",
                title: "Родственники и друзья",
                desc: "Отправляете или получаете посылки между РФ и ЛНР. Подарки, вещи, грузы — доставим надёжно и в срок.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-center mb-14">
            Отвечаем на то, что спрашивают чаще всего
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Дойдёт ли моя посылка?",
                a: "Да. Мы работаем почти 3 года и выполнили более 100 000 заказов. Каждая посылка застрахована и отслеживается на всех этапах. Вы получите уведомление, когда груз прибудет в ваш ПВЗ.",
              },
              {
                q: "Сколько стоит доставка?",
                a: "Стоимость зависит от веса, габаритов и типа услуги. Точный расчёт можно получить при оформлении заявки на сайте — это бесплатно и занимает пару минут.",
              },
              {
                q: "Сколько идёт доставка?",
                a: "Среднее время — от 3 до 7 рабочих дней с момента получения товара на нашем складе. Сроки зависят от маршрута и типа груза.",
              },
              {
                q: "Что делать, если с товаром проблема?",
                a: "Свяжитесь с нами — разберёмся. Если товар повреждён при доставке, мы поможем оформить претензию. Груз застрахован, поэтому вы не останетесь без компенсации.",
              },
              {
                q: "Как оформить первый заказ, если я никогда не пользовался сервисом?",
                a: "Всё просто: выберите услугу на сайте, следуйте пошаговой инструкции, оформите заявку. Если возникнут вопросы — наша поддержка на связи и поможет на любом этапе.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="border border-border rounded-lg px-6 bg-white"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] via-[#0f2440] to-[#162d50] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Начните пользоваться FTEK уже сегодня
          </h2>
          <p className="text-blue-100/70 text-lg mb-10 max-w-2xl mx-auto">
            Сделайте онлайн-покупку в РФ и доверьте доставку нам — мы привезём
            в ваш город в ЛНР.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="#services">Выбрать услугу</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Оформить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer id="contacts" className="py-14 bg-[#060d1a] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-2xl font-extrabold tracking-tight mb-4">FTEK</div>
              <p className="text-white/50 text-sm leading-relaxed">
                Единый сервис для онлайн-покупок и логистических услуг.
                Доставка из РФ в ЛНР.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80">Навигация</h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white/80">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (XXX) XXX-XX-XX
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  info@ftek.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  ЛНР, пункты выдачи FTEK
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-8 text-center text-white/30 text-sm">
            &copy; {new Date().getFullYear()} FTEK. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
