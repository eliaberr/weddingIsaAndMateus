import { motion } from "motion/react";
import Link from "next/link";
import { FaGifts } from "react-icons/fa";


export function ChooseGift() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true, amount: 0.1 }}
      className="desktop text-start mt-5 grid gap-4 grid-cols-10"
    >
      <h2 className="font-medium col-span-10" >Escolha o presente ideal para os noivos</h2>
      <Link className="flex justify-center items-center gap-2 col-span-4 h-10 border rounded cursor-pointer transition duration-300 hover:bg-gray-200 leading-none" href="/giftList">
        <FaGifts/>Escolher Presente
      </Link>
    </motion.div>
  );
}
