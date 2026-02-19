import { useState } from "react";
import Icon from "@/components/ui/icon";

const DELIVERY_TYPES = [
  { id: "marketplace", label: "Маркетплейс", icon: "ShoppingBag" },
  { id: "shop", label: "Интернет-магазин", icon: "Store" },
  { id: "transport", label: "Транспортная компания", icon: "Truck" },
];

const CITIES = [
  { id: "lugansk", label: "Луганск" },
  { id: "alchevsk", label: "Алчевск" },
  { id: "severodonetsk", label: "Северодонецк" },
  { id: "lisichansk", label: "Лисичанск" },
  { id: "krasnyj-luch", label: "Красный Луч" },
  { id: "stakhanov", label: "Стаханов" },
  { id: "other", label: "Другой город" },
];

const WEIGHT_RANGES = [
  { id: "light", label: "До 5 кг", min: 0, max: 5, basePrice: 450 },
  { id: "medium", label: "5–15 кг", min: 5, max: 15, basePrice: 750 },
  { id: "heavy", label: "15–30 кг", min: 15, max: 30, basePrice: 1200 },
  { id: "extra", label: "Более 30 кг", min: 30, max: 100, basePrice: 1800 },
];

const TYPE_MULTIPLIER: Record<string, number> = {
  marketplace: 1,
  shop: 1.1,
  transport: 0.95,
};

const CITY_EXTRA: Record<string, number> = {
  lugansk: 0,
  alchevsk: 100,
  severodonetsk: 150,
  lisichansk: 150,
  "krasnyj-luch": 200,
  stakhanov: 120,
  other: 250,
};

const CalculatorSection = () => {
  const [type, setType] = useState("marketplace");
  const [city, setCity] = useState("");
  const [weight, setWeight] = useState("");
  const [calculated, setCalculated] = useState(false);

  const selectedWeight = WEIGHT_RANGES.find((w) => w.id === weight);
  const multiplier = TYPE_MULTIPLIER[type] || 1;
  const cityExtra = city ? (CITY_EXTRA[city] ?? 0) : 0;

  const price = selectedWeight
    ? Math.round(selectedWeight.basePrice * multiplier + cityExtra)
    : 0;

  const priceMax = selectedWeight
    ? Math.round(price * 1.25)
    : 0;

  const canCalculate = type && city && weight;

  const handleCalculate = () => {
    if (canCalculate) setCalculated(true);
  };

  const handleReset = () => {
    setCalculated(false);
    setCity("");
    setWeight("");
  };

  return (
    <section id="calculator" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2440] to-[#162d50]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Icon name="Calculator" size={16} />
            Калькулятор
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
            Рассчитаем стоимость твоей доставки уже сейчас
          </h2>
          <p className="text-blue-200/60 max-w-lg mx-auto">
            Укажите параметры — получите ориентировочную стоимость за 10 секунд
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            {!calculated ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-3">
                    Тип доставки
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {DELIVERY_TYPES.map((dt) => (
                      <button
                        key={dt.id}
                        onClick={() => setType(dt.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
                          type === dt.id
                            ? "bg-accent/20 border-accent text-white"
                            : "bg-white/5 border-white/10 text-blue-200/70 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <Icon name={dt.icon} size={22} />
                        <span className="text-xs md:text-sm text-center leading-tight">{dt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-3">
                    Город получения
                  </label>
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all cursor-pointer"
                    >
                      <option value="" className="bg-[#0f2440] text-white">Выберите город</option>
                      {CITIES.map((c) => (
                        <option key={c.id} value={c.id} className="bg-[#0f2440] text-white">
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <Icon name="ChevronDown" size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200/50 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-3">
                    Вес посылки
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {WEIGHT_RANGES.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setWeight(w.id)}
                        className={`p-3 rounded-xl border transition-all duration-200 text-sm font-medium ${
                          weight === w.id
                            ? "bg-accent/20 border-accent text-white"
                            : "bg-white/5 border-white/10 text-blue-200/70 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!canCalculate}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold transition-all duration-200 ${
                    canCalculate
                      ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-2">
                  <Icon name="PackageCheck" size={32} className="text-accent" />
                </div>

                <div>
                  <p className="text-blue-200/60 text-sm mb-2">Ориентировочная стоимость</p>
                  <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    {price.toLocaleString("ru-RU")} — {priceMax.toLocaleString("ru-RU")} ₽
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 space-y-2 text-left max-w-sm mx-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200/60">Тип</span>
                    <span className="text-white font-medium">
                      {DELIVERY_TYPES.find((d) => d.id === type)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200/60">Город</span>
                    <span className="text-white font-medium">
                      {CITIES.find((c) => c.id === city)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200/60">Вес</span>
                    <span className="text-white font-medium">
                      {WEIGHT_RANGES.find((w) => w.id === weight)?.label}
                    </span>
                  </div>
                </div>

                <p className="text-blue-200/40 text-xs max-w-sm mx-auto">
                  Точная стоимость зависит от габаритов и условий доставки. Свяжитесь с нами для уточнения.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href="#contacts"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25"
                  >
                    Оформить заявку
                    <Icon name="ArrowRight" size={16} />
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/15 transition-colors"
                  >
                    <Icon name="RotateCcw" size={16} />
                    Пересчитать
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
