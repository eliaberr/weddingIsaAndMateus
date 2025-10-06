"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { motion } from "motion/react";
import HeartRain from "./heart_rain";

export function Countdown() {
  return (
    <motion.div
      className="flex justify-center items-center pt-20 flex-col w-screen text-center lg:w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="mb-5 uppercase">Contagem para o nosso grande dia</h2>
      <FlipClockCountdown
        to={new Date(2025, 10, 16).getTime()}
        labels={["Dias", "Horas", "Minutos", "Segundos"]}
        labelStyle={{ fontSize: 10, fontWeight: 500 }}
        className="flip-clock"
      >
        <motion.div
          className="text-3xl font-semibold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <HeartRain />
        </motion.div>
      </FlipClockCountdown>
    </motion.div>
  );
}
