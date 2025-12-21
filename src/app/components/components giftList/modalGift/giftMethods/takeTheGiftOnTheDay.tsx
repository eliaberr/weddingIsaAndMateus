import Image from "next/image";
import GiftConfirmationMessage from "./giftConfirmationMessage";

export default function TakeTheGiftOnTheDay({ gift }: { gift: Gift }) {
  return (
    <div className="text-center flex flex-col gap-4">
      <GiftConfirmationMessage menssage="Leve seu presente no dia da festa e comemore com a gente." />
      <h2 id="gift-info-title" className="text-xl font-semibold">
        Informações do presente
      </h2>
      <Image
        src={gift.urlImage || '/placeholder.jpg'}
        alt="Imagem de um liquidificador"
        width={200}
        height={200}
        className="m-auto"
      />
      <dl className="space-y-2">
        <div className="flex justify-center gap-1">
          <dt className="font-medium">Nome:</dt>
          <dd>{gift.name}</dd>
        </div>
        <div className="flex justify-center gap-1">
          <dt className="font-medium">Cor de preferência:</dt>
          <dd>{gift.color}</dd>
        </div>
      </dl>
    </div>
  );
}
