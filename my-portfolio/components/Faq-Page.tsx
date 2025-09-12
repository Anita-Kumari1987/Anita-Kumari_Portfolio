"use client";
import React from "react";
import AskMe from "./AskMe-FAQ";
import { TextAnimate } from "@/components/magicui/text-animate"; // ⬅️ add this

type QA = { id: number; question: string; answer: string };

const faqs: QA[] = [
  {
    id: 1,
    question:
      "Where are you currently based, and how long have you been living there?",
    answer:
      "I am living in Stockholm, Sweden and I have been living here for past 7 years.",
  },
  {
    id: 2,
    question:
      "Do you have the legal right to work in Sweden, or would you require visa assistance?",
    answer:
      "I hold a valid work permit to work in Sweden and do not require any additional visa assistance. This allows me to start working without administrative delays.",
  },
  {
    id: 3,
    question:
      "What motivated your transition from Human Resources to Web Development?",
    answer:
      "My curiosity for problem-solving and creativity led me to web development. HR taught me to understand real user needs. Here, I can turn those user needs into action and visible features by crafting user-friendly, impactful applications.",
  },
  {
    id: 4,
    question:
      "In what ways does your HR and recruitment experience add value to your work as a developer?",
    answer:
      "My HR background strengthened my communication, collaboration, and problem-solving skills. I’m comfortable gathering requirements, empathizing with users, and working with cross-functional teams—bringing a human-centered mindset to technical work.",
  },
  {
    id: 5,
    question:
      "What type of working arrangement are you seeking (remote, hybrid, or on-site)?",
    answer:
      "I’m flexible and open to remote, hybrid, or on-site roles. I adapt quickly to the team’s workflow and communication style to stay productive in any setup.",
  },
];

export default function FAQJaydenDark() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] isolate">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.7)_0%,#0a0a0a_50%)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl px-6 py-20 z-10">
        <div className="mb-12 text-center relative">
          <h2 className="mt-6 bg-clip-text text-center text-[72px] font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
            FAQs
          </h2>
          <p className="mt-4 text-lg text-white/70">Find answers to commonly asked questions</p>
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl" />
        </div>

        <Accordion items={faqs} />
        <AskMe />
      </div>
    </section>
  );
}

/* ---------- Accordion (Jayden-style dark) ---------- */

function Accordion({ items }: { items: QA[] }) {
  const [openId, setOpenId] = React.useState<number | null>(null);

  return (
    <div role="list" className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id} role="listitem">
            <h3>
              <button
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="group flex w-full flex-col text-left rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="flex-1">
                    <TextAnimate
                      by="word"
                      animation="blurInUp"
                      once
                      delay={0.02}
                      className="text-2xl font-light text-white/90 group-hover:text-white"
                    >
                      {item.question}
                    </TextAnimate>
                  </span>

                  {/* Plus/Minus circle */}
                  <span
                    aria-hidden="true"
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen 
                        ? "border-orange-400/30 bg-gradient-to-br from-orange-500/20 to-orange-600/10" 
                        : "border-white/10 bg-white/5 group-hover:border-orange-400/20 group-hover:bg-gradient-to-br group-hover:from-orange-500/10 group-hover:to-orange-600/5"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-white transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {isOpen ? (
                        <path d="M5 12h14" strokeLinecap="round" />
                      ) : (
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      )}
                    </svg>
                  </span>
                </div>

                {/* Answer section */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "mt-6 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <TextAnimate
                    as="p"
                    by="word"
                    animation="blurInUp"
                    delay={0.012}
                    duration={0.6}
                    className="text-base leading-relaxed text-white/70 border-t border-white/10 pt-6"
                  >
                    {item.answer}
                  </TextAnimate>
                </div>
              </button>
            </h3>
          </div>
        );
      })}
    </div>
  )}
  