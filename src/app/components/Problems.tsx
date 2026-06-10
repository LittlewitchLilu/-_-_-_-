const problems = [
  {
    num: "01",
    title: "Не знаете карьерный вектор",
    desc: "Непонятно, куда двигаться дальше и какие должности вам органично подойдут.",
  },
  {
    num: "02",
    title: "Беспричинные отказы",
    desc: "Рекрутеры отказывают без объяснений — резюме не работает так, как должно.",
  },
  {
    num: "03",
    title: "Не можете получить нужный оффер",
    desc: "Хочется конкретную должность, но что-то мешает дойти до финального предложения.",
  },
];

export function Problems() {
  return (
    <section className="py-20 bg-[#1C1208]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
          Узнаёте себя?
        </p>
        <h2
          className="text-[#FAF7F0] mb-14"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 500, lineHeight: 1.2 }}
        >
          Если вы здесь, значит одно из этого звучит знакомо
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.08)]">
          {problems.map((p) => (
            <div key={p.num} className="bg-[#1C1208] p-8 hover:bg-[#2C1F10] transition-colors duration-300">
              <span
                className="block text-[#B84B2A] mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 300, lineHeight: 1 }}
              >
                {p.num}
              </span>
              <h3
                className="text-[#FAF7F0] mb-3"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.3 }}
              >
                {p.title}
              </h3>
              <p className="text-[rgba(250,247,240,0.55)] leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
