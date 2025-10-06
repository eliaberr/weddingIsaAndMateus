"use client";

import { useState } from "react";

export default function FormConfirmAttendance() {
  const [nameGuest, setNameGuest] = useState("");
  const [guestType, setGuestType] = useState("");
  const openWhatsAppMensagery = () => {
    const phoneNumber = "5511939201298";
    const message = `Olá, meu nome é ${nameGuest} sou convidado ${
      guestType == "Noiva" ? "da Noiva" : "do Noivo"
    } gostaria de confirmar minha presença no casamento da Izabelly e Matheus!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={openWhatsAppMensagery}
      className="flex flex-col gap-4 max-w-[450px] mt-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="">Digite seu Nome</label>
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Digite seu nome completo"
          onChange={(e) => setNameGuest(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">De quem você é convidado ?</label>
        <select
          onChange={(e) => setGuestType(e.target.value)}
          className="border p-2 rounded w-full"
          defaultValue=""
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Noiva" key="noiva">
            Noiva
          </option>
          <option value="Noivo" key="noivo">
            Noivo
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 border rounded max-w-[350px] cursor-pointer transition duration-300 hover:bg-gray-200"
      >
        Confirmar Presença
      </button>
    </form>
  );
}
