"use client";

export default function BorderSpotlight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] p-[1.25px]"
      style={{
        backgroundImage:
          "radial-gradient(20px 20px at center, rgba(255,255,255,0.95), rgba(255,255,255,0.25) 45%, rgba(255,255,255,0) 70%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "40px 40px",
        backgroundPosition: "8% 8%",
        animation: "border-spot 7s linear infinite",
        mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
}