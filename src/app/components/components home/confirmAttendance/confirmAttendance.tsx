"use client";

import { motion } from "motion/react";
import FormConfirmAttendance from "./formConfirmAttendance";

export default function ConfirmAttendance() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true, amount: 0.1 }}
      className="my-20 text-center desktop"
      id="confirmAttendance"
    >
      <h2 className="font-medium text-2xl">Confirmação de Presença</h2>
      <p className="mt-4 uppercase text-sm">
        Sua presença é muito importante para nós!
      </p>
      <div className="mt-10 text-start grid gap-3 px-3 w-screen lg:px-0 lg:w-full">
        <p>
          Por favor, confirme sua presença até o dia{" "}
          <span className="font-medium">9 de novembro de 2025</span>, para que
          possamos organizar tudo com muito carinho.
        </p>

        <FormConfirmAttendance />

        <p className="mt-4">
          Aguardamos ansiosamente para celebrar este momento especial com você!
        </p>
      </div>
    </motion.div>
  );
}
