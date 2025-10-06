"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading({ children }: { children?: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4000); // 4 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative h-screen w-full lg:h-full ${
        showLoader ? "overflow-hidden" : ""
      }`}
    >
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-50 flex justify-center items-center bg-white"
          >
            <Image
              src="/assets/logo.png"
              alt="Loading..."
              width={200}
              height={200}
              className="absolute"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`${showLoader ? "pointer-events-none select-none" : ""}`}>
        {children}
      </div>
    </div>
  );
}
