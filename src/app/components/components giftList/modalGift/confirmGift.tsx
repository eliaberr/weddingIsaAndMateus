import { useState } from "react";
import Button from "../../ui/ux/button";
import Cleave from "cleave.js/react";

export default function ConfirmGift({id, setState}: {id :number, setState: () => void}) {
  const [telefone, setTelefone] = useState("");

  const validarTelefone = (numero: string) => {
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/; // (11) 91234-5678
    return regex.test(numero);
  };

  const handleConfirm = () => {
    if (!validarTelefone(telefone)) {
      alert("Por favor, insira um número de telefone válido!");
      return;
    } else {
      alert("Presente confirmado com sucesso!");
      confirmGift();
    }
    setState();
  };

  function confirmGift() {
  fetch(`http://localhost:3001/presentes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      phone: telefone
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Resposta do backend:", data)
  })
  .catch(err => console.error(err))
}

  return (
    <div className="flex flex-col justify-center gap-3 h-full ">
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
