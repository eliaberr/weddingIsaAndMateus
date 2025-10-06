import Image from "next/image";
import Button from "../../ui/ux/button";

export default function InfoProductModalGift( {onClick}: {onClick: () => void} ) {
  return (
    <div className="gap-2 flex flex-col justify-center">
      <Image
        src={"/assets/image.png"}
        width={400}
        height={400}
        alt="Imagem do Presente"
        className="border border-gray-300 w-full m-auto"
      />
      <h3 className="font-medium">
        Nome: <span className="font-normal">Liquidificador</span>
      </h3>
      <h3 className="font-medium">
        Valor: <span className="font-normal">R$ 150,00</span>
      </h3>
      <h3 className="font-medium">
        Cor de preferência: <span className="font-normal">Preto</span>
      </h3>
      <Button onClick={onClick} >
        Escolher este presente
      </Button>
    </div>
  );
}
