import type { Metadata } from "next";
import RecentProjects from "@/components/Projects";

export const metadata: Metadata = {
  title: "My Projects",
  description: "A small selection of recent projects",
};

export default function Page() {
  return <RecentProjects />;
}