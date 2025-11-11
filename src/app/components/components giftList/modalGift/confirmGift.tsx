import { useState } from "react";
import Button from "../../ui/ux/button";
import Cleave from "cleave.js/react";

export default function ConfirmGift({ id, setState }: { id: number; setState: () => void }) {
  const [telefone, setTelefone] = useState("");

  const validarTelefone = (numero: string) => {
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/; // (11) 91234-5678
    return regex.test(numero);
  };

  const handleConfirm = async () => {
    if (!validarTelefone(telefone)) {
      alert("Por favor, insira um número de telefone válido!");
      return;
    }

    try {
      const res = await fetch(`https://prj-casamento-backend.vercel.app/presentes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: telefone }),
      });

      if (!res.ok) throw new Error("Erro ao confirmar presente");

      const data = await res.json();
      console.log("Resposta do backend:", data);

      alert("Presente confirmado com sucesso!");
      setState();
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao confirmar o presente.");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-3 h-full">
      <label htmlFor="telefone">Digite seu número de telefone</label>
      <Cleave
        options={{
          delimiters: ["(", ") ", "-"],
          blocks: [0, 2, 5, 4],
          numericOnly: true,
        }}
        placeholder="(11) 91234-5678"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        className="border rounded w-full h-10 px-2"
      />
      <Button onClick={handleConfirm}>Confirmar presente</Button>
    </div>
  );
}
