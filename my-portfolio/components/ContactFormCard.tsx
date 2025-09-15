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
        className="relative flex min-h-[280px] md:min-h-[320px] flex-col items-center justify-center rounded-3xl md:rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8 shadow-2xl backdrop-blur-xl"
        aria-live="polite"
        role="status"
      >
        <BorderSpotlight />
        <h2 className="mb-2 text-2xl md:text-[40px] font-rajdhani text-cyan-200 text-center">
          Thanks! I’ll reply soon.
        </h2>
        <p className="text-center text-green-700 text-sm md:text-base">
          Your message was sent successfully.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-3xl md:rounded-[28px] border border-white/10 bg-white/[0.04] p-5 md:p-8 shadow-2xl backdrop-blur-xl
                 w-full max-w-[26rem] md:max-w-none mx-auto"
      noValidate
      aria-describedby={error ? "form-error" : undefined}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <BorderSpotlight />

      <fieldset disabled={isSubmitting} className="space-y-6 md:space-y-8">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 md:mb-4 block ml-1.5 md:ml-5 font-medium text-white text-lg md:text-2xl"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:py-4 text-base md:text-xl
                       placeholder:text-base md:placeholder:text-xl placeholder-white/40
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="mt-1.5 md:mt-2 block text-sm md:text-xl font-light text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 md:mb-4 block ml-1.5 md:ml-4 font-medium text-white text-lg md:text-2xl"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:py-4 text-base md:text-xl
                       placeholder:text-base md:placeholder:text-xl placeholder-white/40
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="mt-1.5 md:mt-2 block text-sm md:text-xl font-light text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Topic */}
        <div>
          <label
            htmlFor="topic"
            className="mb-2 md:mb-4 block ml-1.5 md:ml-4 font-medium text-white text-lg md:text-2xl"
          >
            Subject
          </label>
          <select
            id="topic"
            defaultValue=""
            {...register("topic", { validate: (v) => (v ? true : "Please select a topic") })}
            className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:py-4
                       pr-10 md:pr-12 text-base md:text-xl backdrop-blur-xl
                       placeholder:text-base md:placeholder:text-xl placeholder-white/40
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60
                       [background:url('/images/svg-Icons/down-arrow.svg')_no-repeat_right_0.75rem_center]
                       md:[background-position:right_1rem_center] [background-size:20px] md:[background-size:24px]
                       [&::-ms-expand]:hidden"
            aria-invalid={!!errors.topic}
            aria-describedby={errors.topic ? "topic-error" : undefined}
          >
            <option value="" disabled>
              Select a subject…
            </option>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.topic && (
            <span id="topic-error" className="mt-1.5 md:mt-2 block text-sm md:text-xl font-light text-red-500">
              {errors.topic.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 md:mb-4 block ml-1.5 md:ml-4 font-medium text-white text-lg md:text-2xl"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:py-4 text-base md:text-xl
                       placeholder:text-base md:placeholder:text-xl placeholder-white/40
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            placeholder="Your message..."
          />
          {errors.message && (
            <span id="message-error" className="mt-1.5 md:mt-2 block text-sm md:text-xl font-light text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 h-5 w-5 md:h-6 md:w-6 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/60"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <label htmlFor="consent" className="text-sm md:text-xl text-white leading-relaxed">
            You can contact me at this email.
          </label>
        </div>
        {errors.consent && (
          <span id="consent-error" className="mt-1 block text-sm md:text-xl font-light text-red-500">
            {errors.consent.message}
          </span>
        )}

        {error && (
          <div id="form-error" role="alert" aria-live="polite" className="mt-1.5 text-sm text-red-500">
            {error}
          </div>
        )}

        <div className="flex justify-center mt-6 md:mt-8">
          <motion.button
            type="submit"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl
                       bg-gradient-to-r from-black via-orange-950 to-orange-900
                       px-5 py-3 md:px-8 md:py-4 text-base md:text-xl font-semibold text-white shadow-xl
                       transition-all duration-300 hover:scale-[1.02]
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                       w-full md:w-auto"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative flex items-center gap-2">
              {isSubmitting && (
                <span
                  className="h-4 w-4 md:h-5 md:w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
                  role="status"
                  aria-label="Loading"
                />
              )}
              <span className="bg-gradient-to-r from-orange-200 to-orange-100 bg-clip-text font-bold text-transparent">
                Send message
              </span>
            </span>
            <span className="absolute inset-0 transform bg-gradient-to-r from-black via-orange-900 to-orange-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        </div>
      </fieldset>
    </motion.form>
  );
}
