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

{ /**
  "id":1,
      "name":"Geladeira Electrolux",
      "price":3299,
      "url":"https://loja.electrolux.com.br/geladeira-electrolux-frost-free-duplex-efficient-com-autosense-cor-inox-look-390l--if43s-/p?idsku=310120866&msclkid=36b0628cfea11f03bfd60b865797b381&utm_source=bing&utm_medium=cpc&utm_campaign=%5BVitrio%5D%20PLA%20%7C%20USC%20%7C%20Top%20Produtos&utm_term=2333713430299282&utm_content=Top%20Produtos",
      "color":"inox",
      "phone":null,
      "urlImage
*/}