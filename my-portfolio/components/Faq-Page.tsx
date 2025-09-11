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
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="mt-6 bg-clip-text text-left text-[72px] font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
            FAQs
          </h2>
        </div>

        <Accordion items={faqs} />
        <AskMe />
      </div>
    </section>
  );
}

/* ---------- Accordion (Jayden-style dark) ---------- */

function Accordion({ items }: { items: QA[] }) {
  const [openId, setOpenId] = React.useState<number | null>(1);

  return (
    <div role="list">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id} role="listitem" className="py-4">
            <h3>
              <button
                id={buttonId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="group flex w-full items-center justify-between gap-6 text-left"
              >
                {/* QUESTION — animate on scroll (once) */}
                <span className="flex-1">
                  <TextAnimate
                    by="word"
                    animation="blurInUp"
                    once
                    stagger={0.02}
                    className="text-2xl font-light text-white/90 group-hover:text-white"
                  >
                    {item.question}
                  </TextAnimate>
                </span>

                {/* Plus → X circle */}
                <span
                  aria-hidden="true"
                  className={`grid h-15 w-10 shrink-0 place-items-center rounded-full border transition ${
                    isOpen ? "border-white/20 bg-white/15" : "border-white/10 bg-white/5"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 text-white transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                {/* ANSWER — animate when opened (mounts only while open) */}
                {isOpen && (
                  <TextAnimate
                    as="p"
                    by="word"
                    animation="blurInUp"
                    stagger={0.012}
                    duration={0.6}
                    className="mt-2 max-w-3xl text-base leading-relaxed text-white/70"
                  >
                    {item.answer}
                  </TextAnimate>
                )}
              </div>
            </div>

            {/* ONE separator only; hidden after the last item */}
            {i < items.length - 1 && (
              <div className="mt-8 h-px w-full bg-white/15" />
            )}
          </div>
        );
      })}
    </div>
  );
}
