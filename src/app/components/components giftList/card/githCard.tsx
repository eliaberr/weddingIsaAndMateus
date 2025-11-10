"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../modalGift/modal";
import Button from "../../ui/ux/button";

export default function GiftCard({ gift }: { gift: Gift }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="col-span-6 flex flex-col items-center justify-center p-4 m-4 border border-gray-300 rounded-lg shadow-lg lg:col-span-3">
      <Image
        src={gift.urlImage || '/placeholder.jpg'}
        width={250}
        height={300}
        alt="Imagem do Presente"
        className="border border-gray-300 rounded-lg w-[250px] h-[300px] object-cover object-center mb-4"
      />
      <h3>{gift.name}</h3>
      <span className="font-medium">R$ {gift.price}</span>
      {
        gift.phone != null ? (<Button color="bg-gray-500 hover:bg-gray-700">Indiponivel</Button>):(<Button onClick={() => setIsModalOpen(true)}>Escolher</Button>)
      }

      {isModalOpen && (
        <Modal gift={gift} onClick={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
