import Link from "next/link";

export function ChooseGift() {
    return (
        <div>
        <h2>Escolha o presente ideal para os noivo</h2>
        <Link href="/giftList">
          Escolher Preente
        </Link>
      </div>
    )
}