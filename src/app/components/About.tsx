export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative flex flex-col gap-4">
          <div className="bg-[#1C1208] rounded-2xl p-8 flex flex-col gap-6">
            {[
              { value: "4+", label: "лет опыта в HR и рекрутинге" },
              { value: "1000+", label: "проведённых собеседований" },
              { value: "100+", label: "успешных кейсов подбора" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-5 border-b border-[rgba(255,255,255,0.07)] last:border-0 pb-5 last:pb-0">
                <span
                  className="text-[#B84B2A] flex-shrink-0"
                  style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 600, lineHeight: 1, minWidth: "5rem" }}
                >
                  {s.value}
                </span>
                <span className="text-[rgba(250,247,240,0.6)] text-sm leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#EDE8DF] rounded-2xl p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#B84B2A]/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B84B2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#1C1208] text-sm" style={{ fontWeight: 500 }}>Бесплатный созвон</p>
              <p className="text-[#6B5D52] text-xs mt-0.5">Напишите в Telegram — @DashaFinenko</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4">Обо мне</p>
          <h2
            className="text-[#1C1208] mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            Дарья Финенко
          </h2>
          <div className="space-y-4 text-[#6B5D52] leading-relaxed">
            <p>
              HR-специалист, рекрутер и основатель сообщества бизнес-ассистентов «Хранители времени». Магистрант ВШЭ по направлению «Бизнес-психология».
            </p>
            <p>
              Я видела изнутри разные бизнесы и знаю, как по-разному предприниматели находят причины отказать кандидатам. Знаю формулы, как этого избежать — через грамотно составленное резюме и подготовленную историю на собеседовании.
            </p>
            <p>
              Провела более 1000 собеседований. Провожу психотипирование кандидатов под каждую должность. Выступаю спикером на государственных и региональных площадках.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { label: "Эксперт по подбору", desc: "и адаптации персонала" },
              { label: "Спикер", desc: "государственных и региональных площадок" },
              { label: "Основатель", desc: "сообщества «Хранители времени»" },
              { label: "Магистрант ВШЭ", desc: "направление «Бизнес-психология»" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F2EDE3] rounded-xl p-4">
                <p className="text-[#1C1208] text-sm mb-0.5" style={{ fontWeight: 500 }}>{item.label}</p>
                <p className="text-[#6B5D52] text-xs leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
