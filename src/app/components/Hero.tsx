import { ImageWithFallback } from "./figma/ImageWithFallback";
import daryaPhoto from "figma:asset/6OosFAYhuxx9cx9EYKBGPA8Xak4sMB8ffqJoUHCszNN2EORYvb8e_FCbMKh6LvA01F6-87q2C246IlZDOXJWBGE3__1_.jpg";

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Карьерные консультации
          </p>
          <h1
            className="text-[#1C1208] mb-6 leading-[1.15]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 600 }}
          >
            Упакую ваш опыт для заветного оффера
          </h1>
          <p className="text-[#6B5D52] text-lg leading-relaxed mb-8 max-w-md">
            Я не переписываю резюме — я вникаю в ваши сильные стороны и показываю двери, в которые вы можете войти. Их больше, чем кажется.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#B84B2A] text-[#FAF7F0] hover:bg-[#9E3D1F] transition-colors duration-200"
            >
              Записаться на консультацию
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[rgba(44,24,16,0.2)] text-[#1C1208] hover:border-[#B84B2A] hover:text-[#B84B2A] transition-colors duration-200"
            >
              Узнать подробнее
            </a>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-[rgba(44,24,16,0.1)]">
            {[
              { value: "4+", label: "лет опыта в HR" },
              { value: "1000+", label: "собеседований" },
              { value: "100+", label: "успешных кейсов" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-[#B84B2A] mb-0.5"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 600, lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p className="text-[#6B5D52] text-xs leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#DDD8CE]">
            <ImageWithFallback
              src={daryaPhoto}
              alt="Дарья Финенко — HR-специалист и карьерный консультант"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/20 to-transparent" />
          </div>
          <div
            className="absolute -bottom-5 -left-5 bg-[#FAF7F0] rounded-xl px-5 py-4 border border-[rgba(44,24,16,0.08)] shadow-sm"
          >
            <p className="text-[#6B5D52] text-xs mb-1">Специализация</p>
            <p className="text-[#1C1208] text-sm" style={{ fontWeight: 500 }}>
              HR · Рекрутинг · Карьера
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
