const reviews = [
  {
    name: "Анастасия К.",
    text: "Дарья помогла мне структурировать резюме, подсветила мои сильные стороны и показала, как грамотно их упаковать. Особенно поразило, что она увидела мои навыки под другим углом — так, чтобы они выглядели презентабельно. После консультации у меня появилось гораздо больше понимания своей ценности как специалиста.",
  },
  {
    name: "Марина В.",
    text: "Дарья очень помогла — прояснила направление и в случае поиска работы, и с собственным делом. Вопросы были проясняющие и очень точные. Была рада увидеть последние строки про идеальный вариант: ассистентство = опора, своё дело = параллельный трек.",
  },
  {
    name: "Елена Т.",
    text: "Очень хорошие вопросы, проясняющие видение профессиональной траектории. Дарья постоянно была на связи, отвечала на все вопросы. Для меня очень важно понимать, что специалист заинтересован в результате. Рекомендую тем, кто хочет разобраться в карьерном векторе.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-14">
        <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4">Отзывы</p>
        <h2
          className="text-[#1C1208]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}
        >
          Что говорят клиенты
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-[#F2EDE3] rounded-2xl p-7 flex flex-col"
          >
            <div className="mb-5">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12.308C0 9.487 0.667 7.026 2 4.923 3.333 2.821 5.4 1.282 8.2.308L9.6 2.462c-1.6.615-2.867 1.513-3.8 2.692-.933 1.18-1.467 2.41-1.6 3.692H7.2V20H0zm14.4 0V12.308c0-2.82.667-5.282 2-7.385 1.333-2.102 3.4-3.641 6.2-4.615l1.4 2.154c-1.6.615-2.867 1.513-3.8 2.692-.933 1.18-1.467 2.41-1.6 3.692H21.6V20H14.4z" fill="#B84B2A" fillOpacity="0.2"/>
              </svg>
            </div>
            <p className="text-[#3D2E25] leading-relaxed text-sm flex-1">{r.text}</p>
            <div className="mt-6 pt-5 border-t border-[rgba(44,24,16,0.1)]">
              <p className="text-[#1C1208] text-sm" style={{ fontWeight: 500 }}>{r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
