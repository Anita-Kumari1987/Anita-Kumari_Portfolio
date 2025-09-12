import type { Metadata } from "next";
import ProjectCarousel from "@/components/ProjectCarousel";

export const metadata: Metadata = {
  title: "My Projects",
  description: "A small selection of recent projects",
};

export default function Page() {
  return (
    <section className="px-6 py-12">
      <ProjectCarousel />
    </section>
  );
}