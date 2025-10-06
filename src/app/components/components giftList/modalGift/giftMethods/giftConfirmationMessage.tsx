export default function GiftConfirmationMessage({menssage}:{menssage:string}) {
  return (
    <div className="mb-4 leading-none">
      <h2 className="font-semibold uppercase text-center text-xl md:text-2xl">
        Presente confirmado ✅
      </h2>
      <p className="text-center text-[12px] md:text-sm">
        {menssage}
      </p>
    </div>
  );
}
