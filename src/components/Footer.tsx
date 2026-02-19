const Footer = () => {
  return (
    <footer id="contacts" className="bg-[hsl(220,40%,8%)] text-white/60 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="text-2xl font-extrabold text-white tracking-tight">FTEK</span>
            <p className="mt-4 text-sm leading-relaxed">
              Единый сервис для онлайн-покупок и логистических услуг. Доставляем товары из РФ в ЛНР.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              <li><a href="#how-it-works" className="text-sm hover:text-white transition-colors">Как это работает</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#why-ftek" className="text-sm hover:text-white transition-colors">О нас</a></li>
              <li><a href="#faq" className="text-sm hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Email: info@ftek.ru</li>
              <li>Режим работы: ежедневно, 9:00–20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} FTEK. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
