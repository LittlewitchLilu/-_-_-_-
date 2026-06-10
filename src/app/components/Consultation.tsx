const steps = [
  { title: "Сонастройка", desc: "Знакомимся, определяем ваш запрос и то, куда вы хотите прийти." },
  { title: "Карьерная траектория", desc: "Определяем цели и органичные ниши — ваши двери, которых больше, чем кажется." },
  { title: "Разбор резюме", desc: "Что отражаем по поводу опыта и эффективности, которую вы сами не замечаете." },
];

const included = [
  "Видеозапись консультации",
  "Сопровождение в течение недели",
  "Обратная связь по резюме",
  "Ответы на вопросы после встречи",
  "Подходящие вакансии от меня лично",
  "Связи и контакты из моей сети",
];

export function Consultation() {
  return (
    <section id="consultation" className="py-24 bg-[#F2EDE3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4">Формат работы</p>
          <h2
            className="text-[#1C1208]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            Карьерная консультация — 90 минут
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#FAF7F0] rounded-2xl p-7 relative overflow-hidden">
              <div
                className="absolute top-5 right-6 text-[#DDD8CE]"
                style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 600, lineHeight: 1 }}
              >
                {i + 1}
              </div>
              <h3
                className="text-[#1C1208] mb-2"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500 }}
              >
                {step.title}
              </h3>
              <p className="text-[#6B5D52] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1C1208] rounded-2xl p-8 md:p-10">
          <h3
            className="text-[#FAF7F0] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 500 }}
          >
            Что входит в сопровождение
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-[#B84B2A] flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#FAF7F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="text-[rgba(250,247,240,0.75)] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
