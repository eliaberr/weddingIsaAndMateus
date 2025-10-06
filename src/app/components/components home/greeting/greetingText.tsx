"use client";

import { motion } from "motion/react";

export function GreetingText() {
  const textGreetingText = [
    {
      text: "Hoje celebramos não apenas um encontro de corações, mas a concretização de um propósito divino. Deus, em Sua infinita bondade, guiou nossos passos até este momento especial, em que dois se tornam um só diante d’Ele.",
      duration: 0.5,
    },
    {
      text: "Reconhecemos que o casamento é mais do que um contrato humano: é uma aliança sagrada, estabelecida pelo Criador desde o princípio. Assim como está escrito, “não é bom que o homem esteja só”, o Senhor nos deu a alegria de compartilhar a vida, a fé e os sonhos.",
      duration: 1.5,
    },
    {
      text: "Nossa oração é que cada instante dessa caminhada seja sustentado pelo amor, pelo respeito e pela presença de Deus em nosso lar. Que a graça do Senhor esteja sobre nós, fortalecendo-nos nos dias de alegria e também nos momentos de desafio.",
      duration: 2.5,
    },
    {
      text: "Nesta celebração, unimos não apenas nossas vidas, mas também nossas famílias, que agora se tornam uma só em Cristo Jesus. Que cada sorriso, cada gesto e cada palavra pronunciada hoje sejam testemunho da fidelidade de Deus e reflexo do amor que Ele derramou em nossos corações.",
      duration: 3.5,
    },
  ];
  return (
    <motion.div
      className="text-start grid gap-5 mt-20 px-3 w-screen lg:px-0 lg:w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className="font-medium col-span-3 text-justify">
        Com as bênçãos de nossos pais, nós damos início a esta união.
      </p>
      {textGreetingText.map((item, index) => (
        <motion.div
          className={`col-span-3 text-justify`}
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: item.duration }}
          viewport={{ once: true }}
        >
          <p>{item.text}</p>
        </motion.div>
      ))}
      <motion.h3
        className="font-medium col-span-3 text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
      >
        Para que todos vejam, e saibam, e considerem, e juntamente entendam que
        a mão do Senhor fez isto -{" "}
        <span className="font-normal">Isaías 41:20</span>
      </motion.h3>
    </motion.div>
  );
}
