"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/80 text-white px-4">
      <h2 className="text-3xl font-bold mb-4 text-red-400">Something went wrong!</h2>
      <p className="mb-6 text-lg text-white/80">{error.message || "An unexpected error occurred. Please try again."}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 rounded bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold hover:from-orange-600 hover:to-orange-800 transition"
      >
        Try Again
      </button>
    </div>
  );
}
