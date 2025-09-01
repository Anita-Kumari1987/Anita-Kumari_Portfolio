import Image from "next/image";

export default function Logo3D() {
  return (
    <div className="w-[120px] h-[120px] flex items-center justify-center perspective">
      <Image
        src="/images/logo.png"   // place file at /public/images/logo.png
        alt="Logo"
        width={120}
        height={120}
        className="object-contain animate-spin3d rounded-full p-4"
      />

      {/* Make styles global so they apply to the <img> inside <Image /> */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .animate-spin3d {
          animation: spin3d 6s linear infinite;
          transform-style: preserve-3d;
        }
        @keyframes spin3d {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}