"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../modalGift/modal";
import Button from "../../ui/ux/button";

export default function GiftCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="col-span-6 flex flex-col items-center justify-center p-4 m-4 border border-gray-300 rounded-lg shadow-lg lg:col-span-3">
      <Image
        src={"/assets/image.png"}
        width={250}
        height={300}
        alt="Imagem do Presente"
        className="border border-gray-300 rounded-lg"
      />
      <h3>Liquidificador</h3>
      <span className="font-medium">R$ 150,00</span>
      <Button onClick={() => setIsModalOpen(true)}>Escolher</Button>
      {isModalOpen && <Modal onClick={() => setIsModalOpen(false)} />}
    </div>
  );
}
