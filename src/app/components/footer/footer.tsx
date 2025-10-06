"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="w-full h-20 text-white flex justify-center items-center bg-[#7c5a42]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <p className="text-sm">
          Desenvovido por{" "}
          <a
            href="https://www.eliaberodrigues.dev/"
            className="relative font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eliabe Rodrigues
          </a>
        </p>
      </motion.div>
    </div>
  );
}
