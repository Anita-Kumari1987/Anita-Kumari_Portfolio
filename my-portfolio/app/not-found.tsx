"use client";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/80 text-white px-4">
      <h1 className="text-5xl font-bold mb-4 text-orange-400">404</h1>
      <h2 className="text-2xl font-semibold mb-2">This page could not be found.</h2>
      <p className="mb-6 text-lg text-white/80">Sorry, the page you are looking for does not exist or has been moved.</p>
      <a
        href="/"
        className="px-6 py-2 rounded bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold hover:from-orange-600 hover:to-orange-800 transition"
      >
        Go Home
      </a>
    </div>
  );
}
