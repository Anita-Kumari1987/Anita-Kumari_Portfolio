"use client";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });

export default function TestimonialClient() {
  return <Testimonials />;
}
