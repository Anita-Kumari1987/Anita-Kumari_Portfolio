"use client";
import dynamic from "next/dynamic";

const EducationTimeline = dynamic(() => import("@/components/EducationTimeline"), { ssr: false });

export default function EducationClient() {
  return <EducationTimeline />;
}
