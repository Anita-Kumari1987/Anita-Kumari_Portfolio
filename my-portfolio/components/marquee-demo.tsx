import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const techSkills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Next JS" },
  { name: "Git & GitHub" },
  { name: "Figma" },
  { name: "Tailwind CSS" },
  { name: "TypeScript" },
  { name: "Node JS" },
  { name: "Mongo DB" },
  { name: "Shad CN" },
  { name: "Magic UI" },
  { name: "VS Code" },
];

// ✅ show all skills (no slice)
const ReviewCard = ({ name }: { name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center justify-center">
        {/* ✅ bigger text size and show name only once */}
        <figcaption className="text-3xl font-light dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {techSkills.map((skill) => (
          <ReviewCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* gradient fade edges */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
