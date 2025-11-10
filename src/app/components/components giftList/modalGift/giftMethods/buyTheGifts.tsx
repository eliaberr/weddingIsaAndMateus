import Button from "@/app/components/ui/ux/button";
import GiftConfirmationMessage from "./giftConfirmationMessage";

export default function BuyTheGifts() {
  return (
    <div>
      <GiftConfirmationMessage menssage="Compre o presente pelo link abaixo e leve no dia da festa" />
      <h2 className="font-medium text-center">Acesse o link para comprar o presente:</h2>

      <div className="mt-6 text-center" aria-labelledby="gift-shipping-title">
        <h3 id="gift-shipping-title" className="text-lg font-semibold">
          Informações para envio
        </h3>
        <p className="mt-2">
          Se preferir enviar o presente para o nosso endereço, confira abaixo:
        </p>

        <address className="not-italic mt-4 space-y-1">
          <p>
            <strong>Nome:</strong> Izabelly Ramos Rodrigues
          </p>
          <p>
            <strong>Endereço:</strong> Rua Pedregulho, 72
          </p>
          <p>
            <strong>Cidade:</strong> Itu/SP
          </p>
          <p>
            <strong>Bairro:</strong> Cidade Nova
          </p>
          <p>
            <strong>Cep:</strong> 13308-123
          </p>
        </address>
      </div>
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
  );
}
