"use client";
import dynamic from "next/dynamic";

const ExperienceGrid = dynamic(() => import("../../../components/ExperienceGrid"), { ssr: false });

export default function ExperienceClient() {
  return <ExperienceGrid />;
}
