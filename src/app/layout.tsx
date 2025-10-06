import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Izabelly e Matheus",
  description:
    "Izabelly e Matheus vão celebrar o casamento em 16 de outubro de 2025. Acompanhe os detalhes e compartilhe esse momento especial conosco.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer className="overflow-hidden">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
