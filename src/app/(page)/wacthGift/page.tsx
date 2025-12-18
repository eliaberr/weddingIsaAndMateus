"use client"
import { useEffect, useState } from "react"

export default function WacthGift() {
    const [gifts, setGifts] = useState<Gift[]>([]);

    useEffect(() => {
      const fetchGifts = async () => {
        const response = await fetch("https://prj-casamento-backend.vercel.app/presentes");
        const data = await response.json();
  
        const normalized: Gift[] = Array.isArray(data) ? data : [data];
  
        setGifts(normalized);
      };
      fetchGifts();
    }, []);
    return (
        <div className="h-screen desktop pt-30 bg-gray-50">
            <div className="flex flex-col gap-4 w-full p-2 border">
              <label htmlFor="">Nome: </label>
              <label>Preço: </label>
              <label htmlFor="">Cor: </label>
              <label htmlFor="">Telefone: </label>
              <label htmlFor="">WhatsApp: <a href=""></a></label>
            </div>
        </div>
    )
}
