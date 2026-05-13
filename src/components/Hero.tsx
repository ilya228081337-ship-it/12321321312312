import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

const placeholders = [
  'Я владелец салона красоты, хочу сайт с записью клиентов...',
  'Мне нужен интернет-магазин для продажи товаров...',
  'Хочу лендинг для услуг ремонта с заявками в CRM...',
  'Нужна витрина для моей пекарни с оформлением заказов...',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    const speed = isDeleting ? 30 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPlaceholder.length) {
          setDisplayText(currentPlaceholder.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPlaceholder.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, placeholderIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 pt-20 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F2EE] via-[#FAF8F4] to-[#F0EBE6]" />

      {/* Animated blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#C8A882]/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#8EA8A0]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Accent text */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8A882] tracking-[0.15em] uppercase mb-6 px-4 py-2 bg-[#C8A882]/8 rounded-full border border-[#C8A882]/20">
          <span className="w-2 h-2 rounded-full bg-[#C8A882] animate-pulse" />
          Бесплатный сайт для бизнеса
        </span>

        {/* Main heading */}
        <h1 className="text-6xl lg:text-7xl font-semibold text-[#1A1714] leading-[1.1] tracking-tight mb-6">
          Ваш сайт
          <br />
          <span className="bg-gradient-to-r from-[#C8A882] via-[#8EA8A0] to-[#B5956B] bg-clip-text text-transparent">
            за несколько дней
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-[#5C5550] leading-relaxed max-w-xl mx-auto mb-12">
          Опишите, какой сайт нужен вашему бизнесу. Мы разработаем дизайн, запустим его бесплатно через банк-партнер и подключим все необходимые интеграции.
        </p>

        {/* Input Section with enhanced design */}
        <div className="mx-auto max-w-2xl">
          <div className="group relative">
            {/* Input container with gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C8A882]/20 via-[#8EA8A0]/20 to-[#B5956B]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 backdrop-blur-sm p-1">
              <div className="flex items-center gap-2 bg-white rounded-xl p-4 lg:p-5">
                <input
                  type="text"
                  value={inputValue || displayText}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setInputValue('')}
                  placeholder={displayText || placeholders[0]}
                  className="flex-1 bg-transparent text-[#1A1714] placeholder-[#9A8A7A] outline-none text-base lg:text-lg font-medium"
                />
                <button className="group/btn shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8A882] to-[#B5956B] flex items-center justify-center hover:shadow-[0_8px_24px_rgba(200,168,130,0.4)] transition-all duration-200 hover:scale-105 active:scale-95">
                  <Send
                    size={18}
                    className="text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Social proof / Channels hint */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-[#7A7570] font-medium">Отправим через:</span>
            <div className="flex items-center gap-3">
              {['Email', 'Telegram', 'WhatsApp'].map((channel) => (
                <button
                  key={channel}
                  className="px-4 py-2 text-[#5C5550] hover:text-[#1A1714] border border-[#D4CEC5] hover:border-[#C8A882] rounded-lg hover:bg-[#C8A882]/5 transition-all duration-200 text-xs font-medium"
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-white/40">
          <p className="text-xs font-semibold text-[#9A8A7A] tracking-[0.15em] uppercase mb-6">
            Доверяют нам
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {['Бизнес', 'Стартапы', 'Салоны', 'Магазины', 'Эксперты'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C8A882]" />
                <span className="text-sm text-[#5C5550] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#9A8A7A] font-medium">Прокрутите вниз</span>
        <svg className="w-5 h-5 text-[#C8A882]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
