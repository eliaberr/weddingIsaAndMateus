import GithCardList from "@/app/components/components giftList/card/githCardList";

export default function PageGiftList() {
  return (
    <main className="relative">
      <section className="w-screen bg-[url('/assets/backgraundGiftList.jpg')] bg-no-repeat bg-cover bg-[calc(50%+80px)_center] md:bg-[center_calc(20%-80px)] lg:w-full h-[600px]" />
      <section className="flex flex-col items-center justify-center mt-8 mb-16 ">
        <div className="text-center px-2 lg:px-0">
          <h2 className="font-medium text-2xl">
            Escolha o Presnete Ideal para os Noivos
          </h2>
          <span className="text-sm">
            O presente que nunca erra começa com P e termina com ixxx…
          </span>
        </div>
        <GithCardList/>
      </section>
    </main>
  );
}
