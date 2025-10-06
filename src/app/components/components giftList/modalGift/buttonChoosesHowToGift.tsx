import Button from "../../ui/ux/button";

export default function buttonChoosesHowToGift({
  setState,
}: {
  setState: (gift: string) => void;
}) {
  const chosenGift = (gift: string) => {
    if (setState) {
      setState(gift);
    }
  };

  return (
    <div>
      <Button onClick={() => chosenGift("PixGift")}>Presentear com pix</Button>
      <Button onClick={() => chosenGift("buyTheGifts")}>
        Comprar no site Escolhido e Levar no dia
      </Button>
      <Button onClick={() => chosenGift("PixGift")}>
        levar presente no dia
      </Button>
    </div>
  );
}
