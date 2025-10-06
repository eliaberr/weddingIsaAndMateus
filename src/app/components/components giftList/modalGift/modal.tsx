"use client";

import { MdClose } from "react-icons/md";
import InfoProductModalGift from "./infroProductModalGift";
import { useState } from "react";
import ConfirmGift from "./confirmGift";
import ButtonChoosesHowToGift from "./buttonChoosesHowToGift";
import PixGift from "./giftMethods/pixGift";
import BuyTheGifts from "./giftMethods/buyTheGifts";

export default function Modal({ onClick }: { onClick: () => void }) {
  const [openOption, setOpenOption] = useState("InfoProductModalGift");

  return (
    <div className="flex flex-col items-center justify-center bg-white/50 backdrop-blur w-screen h-screen fixed top-0 right-0 z-50">
      <div className="flex flex-col justify-center bg-white h-[90%] w-[90%] relative rounded-lg shadow-lg border py-8 px-4 md:p-8 md:w-[500px]">
        <button
          onClick={onClick}
          className="absolute top-1 right-1 text-2xl text-gray-600 hover:text-red-700 transition cursor-pointer"
        >
          <MdClose />
        </button>

        {openOption === "InfoProductModalGift" ? (
          <InfoProductModalGift onClick={() => setOpenOption("ConfirmGift")} />
        ) : openOption === "ConfirmGift" ? (
          <ConfirmGift
            setState={() => setOpenOption("buttonChoosesHowToGift")}
          />
        ) : openOption === "buttonChoosesHowToGift" ? (
          <ButtonChoosesHowToGift setState={setOpenOption} />
        ) : openOption === "PixGift" ? (
          <PixGift />
        ) : openOption === "buyTheGifts" ? (
          <BuyTheGifts />
        ) : null}
      </div>
    </div>
  );
}
