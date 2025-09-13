"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="relative isolate w overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6 py-4 md:py-4">
      <div className="py-20">
        <h1 className="mt-6 bg-clip-text text-center text-[72px] font-rajdhani tracking-tight text-transparent bg-gradient-to-b from-orange-200 to-orange-500">
          My-Projects
        </h1>
        <p className="mt-0 text-lg sm:text-xl text-white/80 text-center mb-15">
          A small selection of recent projects
        </p>
        <div className="flex flex-wrap items-center justify-center gap-20 mt-1">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-100 w-[100vw] mb-16"
              key={item.id}
            >
              <PinContainer title=" " href="https://twitter.com/mannupaaji">
                <div className="relative flex items-center justify-center sm:w-96 w-[90vw] overflow-hidden h-[220px] lg:h-[300px] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D] flex items-center justify-center"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <h1 className="font-rajdhani text-xl md:text-2xl lg:text-3xl line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon.startsWith('/') ? icon : `/${icon}`} alt="icon5" width={32} height={32} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
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
