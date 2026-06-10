export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-14">
        <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4">Стоимость</p>
        <h2
          className="text-[#1C1208]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}
        >
          Записаться на консультацию
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="bg-[#1C1208] rounded-2xl p-8 md:p-10">
          <div className="flex items-end gap-2 mb-2">
            <span
              className="text-[#FAF7F0]"
              style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 600, lineHeight: 1 }}
            >
              3 000
            </span>
            <span className="text-[rgba(250,247,240,0.55)] mb-2">₽</span>
          </div>
          <p className="text-[rgba(250,247,240,0.55)] text-sm mb-8">Полная консультация · 90 минут</p>

          <ul className="space-y-3 mb-10">
            {[
              "20 мин — сонастройка",
              "30 мин — карьерная траектория",
              "40 мин — разбор резюме",
              "Видеозапись встречи",
              "Сопровождение 7 дней",
              "Помощь в поиске вакансий",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[rgba(250,247,240,0.75)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B84B2A] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://t.me/DashaFinenko"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-7 py-3.5 rounded-full bg-[#B84B2A] text-[#FAF7F0] hover:bg-[#9E3D1F] transition-colors duration-200"
          >
            Записаться в Telegram
          </a>
        </div>

        <div className="space-y-4">
          <div className="bg-[#F2EDE3] rounded-2xl p-7">
            <div className="flex items-end gap-2 mb-2">
              <span
                className="text-[#1C1208]"
                style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600, lineHeight: 1 }}
              >
                Бесплатно
              </span>
            </div>
            <p className="text-[#6B5D52] text-sm mb-4">Предварительный созвон · 20 минут</p>
            <p className="text-[#6B5D52] text-sm leading-relaxed mb-6">
              Перед консультацией — бесплатный созвон для сонастройки. Поймём, подходим ли друг другу и сформулируем ваш запрос.
            </p>
            <a
              href="https://t.me/DashaFinenko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#B84B2A] text-sm hover:underline"
            >
              Написать в Telegram →
            </a>
          </div>

          <div className="bg-[#F2EDE3] rounded-2xl p-7">
            <p className="text-[#1C1208] text-sm mb-3" style={{ fontWeight: 500 }}>
              Другие способы связи
            </p>
            <div className="space-y-2">
              {[
                { label: "Telegram", value: "@DashaFinenko", href: "https://t.me/DashaFinenko" },
                { label: "ВКонтакте", value: "@daria_finenko", href: "https://vk.ru/daria_finenko" },
                { label: "Сайт", value: "daryafinenko.ru", href: "https://daryafinenko.ru/" },
                { label: "Телефон", value: "+7 911 344-58-87", href: "tel:+79113445887" },
              ].map((c) => (
                <div key={c.label} className="flex items-center justify-between text-sm">
                  <span className="text-[#6B5D52]">{c.label}</span>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C1208] hover:text-[#B84B2A] transition-colors"
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
