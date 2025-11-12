"use client";

import { useEffect, useState } from "react";
import GiftCard from "./githCard";

export default function GithCardList() {
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const fetchGifts = async () => {
      const response = await fetch(
        "prjcasamentobackend-production.up.railway.app/presentes"
      );
      const data = await response.json();

      const normalized: Gift[] = Array.isArray(data) ? data : [data];

      setGifts(normalized);
    };
    fetchGifts();
  }, []);

  return (
    <div className="grid grid-cols-12">
      {gifts?.map((item) => (
        <GiftCard key={item.id} gift={item} />
      ))}
    </div>
  );
}
