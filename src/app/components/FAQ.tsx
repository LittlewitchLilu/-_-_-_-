import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Есть ли у вас понимание куда двигаться?",
    a: "Тех, у кого всё сложно, я приглашаю на консультацию. Там мы в совместной работе решим вопрос «а кем я всё-таки буду когда вырасту». Я не гарантирую, что за 1,5 часа переверну вашу жизнь. Но точно смогу внести ясность.",
  },
  {
    q: "Если у меня совсем не было опыта на похожих должностях?",
    a: "На предварительном бесплатном созвоне я рассмотрю именно вашу ситуацию, чтобы понять, смогу ли я помочь. Многие думают, что их случай безнадёжен — но чаще всего опыт есть, просто он не упакован.",
  },
  {
    q: "Будет ли запись консультации?",
    a: "Да, будет. Она будет персонально ваша, и я не буду её нигде использовать. Вы сможете пересматривать её и возвращаться к ключевым моментам.",
  },
  {
    q: "Какой метод будет использован?",
    a: "Я буду задавать вам наводящие вопросы, и мы пройдём несколько техник. Опираюсь на психотипирование и профессиональный опыт более 1000 собеседований.",
  },
  {
    q: "Что конкретно произойдёт с резюме?",
    a: "Я помогу вам составить и отредактировать ваше резюме, а его финальное написание проверю в качестве домашнего задания — уже в рамках недельного сопровождения после консультации.",
  },
  {
    q: "А вдруг мне не понравится?",
    a: "У вас будет целых 20 минут переписки или созвона для сонастройки до начала основного времени. Это гарантирует, что мы на одной волне.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(44,24,16,0.1)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#1C1208] text-sm leading-snug" style={{ fontWeight: 500 }}>{q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#B84B2A] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-[#6B5D52] text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#F2EDE3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="text-[#B84B2A] text-sm tracking-widest uppercase mb-4">FAQ</p>
            <h2
              className="text-[#1C1208] mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 500, lineHeight: 1.2 }}
            >
              Частые вопросы
            </h2>
            <p className="text-[#6B5D52] leading-relaxed text-sm max-w-xs">
              Если вашего вопроса нет здесь — напишите мне в Telegram, отвечу быстро.
            </p>
            <a
              href="https://t.me/DashaFinenko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-[#B84B2A] text-sm hover:underline"
            >
              @DashaFinenko →
            </a>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <Item key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
