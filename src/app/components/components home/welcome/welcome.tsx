"use client";

import { motion } from "motion/react";

export default function Welcome() {
  return (
    <div id="home" className="overflow-hidden">
      <motion.div
        className="bg-[url('/assets/backgraundWelcome.jpg')] bg-cover bg-center h-screen w-full relative overflow-hidden "
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 4 }}
      />
      <motion.div
        className="text-white text-center absolute bottom-36 left-1/2 -translate-x-1/2 -translate-y-2 lg:bottom-28"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay:4 }}
      >
        <h1 className="text-[55px] font-avoda w-screen md:text-8xl lg:w-full">
          Izabelly & Matheus
        </h1>
        <span className="text-base lg:text-3xl">16/11/25</span>
      </motion.div>
    </div>
  );
}
