import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(220,72%,16%)] to-[hsl(220,60%,12%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="Shield" size={14} />
            <span>Более 100 000 доставленных заказов</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight mb-6">
            FTEK — ваш единый сервис для онлайн&#8209;покупок и&nbsp;логистических&nbsp;услуг
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            Заказывайте на маркетплейсах и в интернет&#8209;магазинах РФ, мы доставим в&nbsp;ЛНР без сложностей и лишних поездок.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors"
            >
              Выбрать услугу
              <Icon name="ArrowRight" size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Как это работает
            </a>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 opacity-20">
          <Icon name="Package" size={48} className="text-white" />
          <Icon name="Truck" size={48} className="text-white" />
          <Icon name="MapPin" size={48} className="text-white" />
        </div>
      </div>

      <div className="relative h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />
    </section>
  );
};

export default HeroSection;
