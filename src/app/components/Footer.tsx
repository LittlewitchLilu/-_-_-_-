export function Footer() {
  return (
    <footer className="bg-[#1C1208] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[rgba(255,255,255,0.08)]">
          <div>
            <p
              className="text-[#FAF7F0] mb-1"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600 }}
            >
              Дарья Финенко
            </p>
            <p className="text-[rgba(250,247,240,0.45)] text-sm">HR-специалист · Карьерный консультант</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { label: "Telegram", href: "https://t.me/DashaFinenko" },
              { label: "Канал", href: "https://t.me/dela_vremya" },
              { label: "ВКонтакте", href: "https://vk.ru/daria_finenko" },
              { label: "YouTube", href: "https://youtube.com/@darya_finenko" },
              { label: "Сайт", href: "https://daryafinenko.ru/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(250,247,240,0.55)] hover:text-[#B84B2A] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[rgba(250,247,240,0.3)] text-xs">
            © 2026 Дарья Финенко. Все права защищены.
          </p>
          <p className="text-[rgba(250,247,240,0.3)] text-xs">
            Сообщество «Хранители времени»
          </p>
        </div>
      </div>
    </footer>
  );
}
