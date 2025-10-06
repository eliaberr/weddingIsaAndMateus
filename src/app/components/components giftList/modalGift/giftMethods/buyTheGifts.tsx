import Button from "@/app/components/ui/ux/button";
import GiftConfirmationMessage from "./giftConfirmationMessage";

export default function BuyTheGifts() {
  return (
    <div>
      <GiftConfirmationMessage
        menssage="Compre o presente pelo link abaixo e leve no dia da festa"
      />
      <h3 className="font-medium text-center">
        Acesse o link para comparar o presente:
      </h3>
      <div>
        <Button
          onClick={() =>
            window.open(
              "https://www.amazon.com.br/s?k=liquidificador&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss",
              "_blank"
            )
          }
        >
          Clique aqui para comprar o presente
        </Button>
      </div>
    </div>
  );
}
