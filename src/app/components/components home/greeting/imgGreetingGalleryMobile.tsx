"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function GreetingGallery() {
  const imgsGreetingGallery = [
    {
      src: "/assets/imgGreetingGallery1.jpg",
      position: "pt-10",
      animationPosition: -60,
    },
    {
      src: "/assets/imgGreetingGallery3.jpg",
      position: "pb-10",
      animationPosition: 60,
    },
    {
      src: "/assets/imgGreetingGallery2.jpg",
      position: "pt-10",
      animationPosition: -60,
    },
    {
      src: "/assets/imgGreetingGallery4.jpg",
      position: "pb-10",
      animationPosition: 60,
    },
  ];
  return (
    <div className="grid gap-1 grid-cols-12 mt-20 lg:hidden">
      {imgsGreetingGallery.map((item, index) => (
        <motion.div
          className={`col-span-3 ${item.position}`}
          key={index}
          initial={{ y: item.animationPosition, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image src={item.src} width={4000} height={6000} alt="img" />
        </motion.div>
      ))}
    </div>
  );
}
