"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function LetsChatPage() {
  return (
    <section className="relative isolate overflow-hidden flex flex-col items-center justify-center min-h-screen w-[92%] px-6  md:py-2">
      {/* orange radial background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,94,0,0.2)_0%,transparent_55%)] pointer-events-none" />
      
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 bg-clip-text text-transparent text-[72px] font-rajdhani bg-gradient-to-b from-orange-200 to-orange-500"
        >
          Let's Work Together
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-200/90 mb-12 leading-relaxed"
        >
          Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact">
            <Button
              borderRadius="1.75rem"
              className="px-8 py-4 text-lg font-medium cursor-pointer"
              borderClassName="!bg-[radial-gradient(#fb923c_40%,transparent_60%)]"
            >
              Get In Touch
            </Button>
          </Link>
          
          <Link href="/images/Anita-Kumari_Resume.pdf" download>
            <Button
              borderRadius="1.75rem"
              className="px-8 py-4 text-lg font-medium cursor-pointer"
            >
              Download Resume
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Quick Response</h3>
            <p className="text-slate-200/70">I typically respond within 24 hours</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Fast Delivery</h3>
            <p className="text-slate-200/70">Efficient development process</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Quality Work</h3>
            <p className="text-slate-200/70">Clean, modern, and accessible code</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
