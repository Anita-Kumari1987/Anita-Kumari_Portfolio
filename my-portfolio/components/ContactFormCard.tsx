"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import BorderSpotlight from "./BorderSpotlight";

export const TOPICS = [
  "Portfolio inquiry",
  "Freelance project",
  "UI/UX",
  "Interview",
  "Other",
] as const;

export const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Enter a valid email"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),
  topic: z.enum(TOPICS),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1500, "Message too long"),
  consent: z.boolean().refine((v) => v === true, { message: "Consent required" }),
});

export type FormData = z.infer<typeof schema>;

export default function ContactFormCard() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl"
        aria-live="polite"
        role="status"
      >
        <BorderSpotlight />
        <h2 className="mb-2 text-2xl font-bold text-green-700 sm:text-3xl">
          Thanks! I’ll reply soon.
        </h2>
        <p className="text-center text-slate-300/85">
          Your message was sent successfully.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-8"
      noValidate
      aria-describedby={error ? "form-error" : undefined}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <BorderSpotlight />

      <fieldset disabled={isSubmitting} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1 block font-medium text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="mt-1 block text-sm text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1 block font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="mt-1 block text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="mb-1 block font-medium text-white">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            autoComplete="off"
            {...register("subject")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="What’s this about?"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="mt-1 block text-sm text-red-500">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Topic */}
        <div>
          <label htmlFor="topic" className="mb-1 block font-medium text-white">
            Topic
          </label>
          <select
            id="topic"
            defaultValue=""
            {...register("topic", {
              validate: (v) => (v ? true : "Please select a topic"),
            })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            aria-invalid={!!errors.topic}
            aria-describedby={errors.topic ? "topic-error" : undefined}
          >
            <option value="" disabled>
              Select a topic…
            </option>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.topic && (
            <span id="topic-error" className="text-sm text-red-500">
              {errors.topic.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1 block font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            autoComplete="off"
            {...register("message")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="Tell me about your project, timeline, and goals…"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="mt-1 block text-sm text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Consent */}
        <div className="flex items-center gap-2">
          <input
            id="consent"
            type="checkbox"
            {...register("consent")}
            className="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/60"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <label htmlFor="consent" className="text-sm text-white">
            You can contact me at this email.
          </label>
        </div>
        {errors.consent && (
          <span id="consent-error" className="mt-1 block text-sm text-red-500">
            {errors.consent.message}
          </span>
        )}

        {error && (
          <div
            id="form-error"
            role="alert"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {error}
          </div>
        )}

        <motion.button
          type="submit"
          className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-[0_0_0_1.5px_rgba(168,85,247,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(168,85,247,0.9)] focus-visible:ring-2 focus-visible:ring-blue-400/60"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          whileHover={{ y: -2 }}
        >
          {isSubmitting && (
            <span
              className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
              role="status"
              aria-label="Loading"
            />
          )}
          Send message
        </motion.button>
      </fieldset>
    </motion.form>
  );
}
