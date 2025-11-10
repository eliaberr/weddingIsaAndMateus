import Image from "next/image";
import Button from "../../ui/ux/button";
import { ModalProps } from "@/types/modalProps";

export default function InfoProductModalGift({
  gift,
  onClick,
}: ModalProps) {
  return (
    <div className="gap-2 flex flex-col justify-center">
      <Image
        src={gift.urlImage || '/placeholder.jpg'}
        width={400}
        height={400}
        alt="Imagem do Presente"
        className="border border-gray-300 w-full m-auto"
      />
      <h3 className="font-medium">
        Nome: <span className="font-normal">{gift.name}</span>
      </h3>
      <h3 className="font-medium">
        Valor: <span className="font-normal">R$ {gift.price}</span>
      </h3>
      <h3 className="font-medium">
        Cor de preferência: <span className="font-normal">{gift.color}</span>
      </h3>
      <Button onClick={onClick}>Escolher este presente</Button>
    </div>
  );
}
