"use client";

import { motion } from "motion/react";
import { GreetingText } from "./greetingText";
import { GreetingGallery } from "./imgGreetingGallery";

export function Greeting() {
  return (
    <div className="my-20 text-center desktop">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-screen px-2 lg:px-0 lg:w-full"
      >
        <h2 className="font-medium text-2xl">Você é parte desse sonho!</h2>
        <p className="mt-7 uppercase text-sm">
          Nosso coração se alegra em saber que você faz parte dessa história de
          amor que Deus tem escrito para nós.
        </p>
      </motion.div>

      <GreetingGallery />
      <GreetingText />
    </div>
  );
}
