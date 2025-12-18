"use client";

import Image from "next/image";
import { OptionNavBar } from "./opitonNavBar";
import { motion } from "motion/react";
import { MenuMobile } from "./menuMobile";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 z-20 w-screen h-28 flex items-center ${
        scrolled ? "shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <motion.div
        className="bg-white/85 h-full w-full absolute z-10"
        initial={{ opacity: 0 }}
        animate={scrolled ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="flex justify-between items-center desktop z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, delay: 5, ease: "easeIn" }}
      >
        <Link href="/" className="cursor-pointer">
          {" "}
          <Image src="/assets/logo.png" width={90} height={10} alt="logo" />
        </Link>
        <div className="hidden lg:grid">
          <OptionNavBar />
        </div>
        <MenuMobile />
      </motion.div>
    </motion.nav>
  );
}
