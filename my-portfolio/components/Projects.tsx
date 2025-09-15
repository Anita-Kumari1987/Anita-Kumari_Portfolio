"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="relative isolate overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-4 md:px-6 py-10 md:py-4 max-[550px]:pb-2">
      <div className="py-12 md:py-20">
        <h1 className="mt-2 md:mt-6 bg-clip-text text-center text-4xl md:text-[72px] leading-tight md:leading-none font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
          My-Projects
        </h1>

        <p className="mt-2 md:mt-0 text-base sm:text-lg md:text-xl text-white/80 text-center mb-8 md:mb-[3.75rem]">
          A small selection of recent projects
        </p>

        {/* Mobile = single column auto-height; Desktop = your original flex wrap */}
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-20 mt-1 max-[550px]:flex-col max-[550px]:gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="
    flex items-center justify-center
    w-full max-w-[22rem] sm:max-w-[24rem]   /* consistent width for all cards */
    h-auto md:h-[25rem]
    md:w-[100vw] lg:min-h-[32.5rem]
    md:mb-16 mb-18
    first:max-w-[22rem] first:w-full md:first:max-w-none  /* ✅ fix only first card on mobile */
  "
            >
              <PinContainer title=" " href="https://twitter.com/mannupaaji">
                {/* Image area */}
                <div className="relative flex items-center justify-center w-full max-w-[22rem] sm:max-w-[24rem] md:sm:w-96 overflow-hidden h-[200px] md:h-[220px] lg:h-[300px] mb-6 md:mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D] flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-rajdhani text-lg md:text-2xl lg:text-3xl line-clamp-1 text-center md:text-left">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="text-sm md:text-base lg:text-xl lg:font-normal font-light line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 md:mt-7 mb-2 md:mb-3">
                  {/* Tech icons */}
                  <div className="flex items-center min-w-0">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <Image
                          src={icon.startsWith("/") ? icon : `/${icon}`}
                          alt="tech"
                          width={32}
                          height={32}
                          className="p-1.5 md:p-2"
                        />
                      </div>
                    ))}
                  </div>

                  {/* CTA — keep on one line and prevent squish */}
                  <div className="flex justify-center items-center shrink-0 whitespace-nowrap">
                    <p className="flex text-sm md:text-base lg:text-xl text-purple">
                       Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
