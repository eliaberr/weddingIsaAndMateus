"use client";

import Button from "@/app/components/ui/ux/button";
import { createStaticPix, hasError } from "pix-utils";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function PixGift() {
  const [pixCode, setPixCode] = useState("");
  const [copied, setCopied] = useState<boolean | null>(null);

  useEffect(() => {
    const pix = createStaticPix({
      merchantName: "Izabelly Ramos",
      merchantCity: "Itu",
      pixKey: "Izabellyramosr@gmail.com",
      infoAdicional: "Gerado por Pix-Utils",
      transactionAmount: 500.0,
    });
    if (!hasError(pix)) {
      const brCode = pix.toBRCode();
      setPixCode(brCode);
    }
  }, []);

  const copiedPix = (pix: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(pix)
        .then(() => setCopied(true))
        .catch(() => setCopied(false));
    } else {
      try {
        const input = document.createElement("textarea");
        input.value = pix;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        setCopied(true);
      } catch {
        setCopied(false);
      }
    }
  };

  return (
    <div className="gap-2 flex flex-col justify-center">
      <div className="mb-4 leading-none">
        <h2 className="font-semibold uppercase text-center text-xl md:text-2xl">
          Presente confirmado ✅
        </h2>
        <p className="text-center text-[12px] md:text-sm">
          Pague via PIX nas próximas 48 horas para garantir o presente.
        </p>
      </div>

      <h3 className="font-medium text-center">
        Para presentear com pix, copie o código abaixo ou utilize o QR Code
      </h3>

      <div>
        <QRCodeCanvas value={pixCode} size={200} className="m-auto mb-5" />
        <div className="border text-center rounded p-2 overflow-y-auto whitespace-pre-wrap break-words">
          {pixCode}
        </div>

        <Button onClick={() => copiedPix(pixCode)}>
          Clique aqui para copiar o PIX
        </Button>

        <p
          className={`${
            copied == null
              ? "text-gray-600"
              : copied
              ? "text-green-600"
              : "text-red-600"
          } text-center`}
        >
          {copied == null
            ? ""
            : copied
            ? "Pix copiado com sucesso!"
            : "Erro ao copiar Pix"}
        </p>
      </div>
    </div>
  );
}
