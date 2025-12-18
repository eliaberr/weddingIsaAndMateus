"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CardLocation } from "./cardLocation";
import { ChooseGift } from "./chooseGift";

export default function InformationWedding() {
  return (
    <div id="informationWedding" className="my-20 text-center px-2 lg:px-0 overflow-hidden lg:desktop">
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src="/assets/imgInformationWedding.png"
          width={1000}
          height={900}
          alt="local_cerimonia"
          className="mx-auto mt-10 rounded"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto desktop"
      >
        <div className="mt-15">
          <h2 className="font-medium text-2xl">
            Informações sobre o Casamento
          </h2>
          <p className="mt-4 uppercase text-sm">
            Com muita alegria, convidamos você para celebrar conosco este
            momento tão especial!
          </p>
        </div>
        <div className="mt-10 text-start grid gap-3">
          <p>
            Nosso casamento será realizado no{" "}
            <span className="font-medium">Recanto Sheike</span>, localizado na{" "}
            <span className="font-medium">
              Rua Benedito de Paula Leite, nº 800.
            </span>
          </p>
          <p>
            {" "}
            A cerimônia acontecerá no dia{" "}
            <span className="font-medium">16 de novembro de 2025</span>, às{" "}
            <span className="font-medium">10h da manhã.</span>{" "}
          </p>
          <p>
            Será uma honra ter sua presença neste dia inesquecível! 💖 Esperamos
            por você!
          </p>
        </div>
       
      </motion.div>
      <CardLocation />
      <ChooseGift/>
    </div>
  );
}
