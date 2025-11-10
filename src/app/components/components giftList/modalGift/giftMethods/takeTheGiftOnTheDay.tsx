import Image from "next/image";
import GiftConfirmationMessage from "./giftConfirmationMessage";

export default function TakeTheGiftOnTheDay() {
  return (
    <div className="text-center flex flex-col gap-4">
      <GiftConfirmationMessage menssage="Leve seu presente no dia da festa e comemore com a gente." />
      <h2 id="gift-info-title" className="text-xl font-semibold">
        Informações do presente
      </h2>
      <Image
        src="/assets/image.png"
        alt="Imagem de um liquidificador"
        width={200}
        height={200}
        className="m-auto"
      />
      <dl className="space-y-2">
        <div className="flex justify-center gap-1">
          <dt className="font-medium">Nome:</dt>
          <dd>Liquidificador</dd>
        </div>
        <div className="flex justify-center gap-1">
          <dt className="font-medium">Cor de preferência:</dt>
          <dd>Preto</dd>
        </div>
      </dl>
    </div>
  );
}
