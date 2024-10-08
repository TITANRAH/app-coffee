import type { Metadata } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// declaro la variable que contiene este tipo de letra
// en tailwind.config declaro que esta variable es el tipo font-primary o secondary segun necesite
// fontFamily: {
//   primary: "var(--font-cormorant_upright)",
//   secondary: "var(--font-open_sans)",
// },

// tamnbien declaro el color en tailwind.config 

// colors: {
//   primary: {
//     DEFAULT: "#100e0e",
//   },
//   secondary: {
//     DEFAULT: "#787f8a",
//   },
//   accent: {
//     DEFAULT: "#c7a17a",
//     hover: "#a08161"
//   },
// },

// y asi a cualquier cosa que le ponga accent secondary o primary como text-primary o text-accent o bg-accent etc
// tendra este color declarado

// tambien declaro fondos y lo que quiera 

// backgroundImage: {
//   hero: "url('/assets/hero/hero-overlay.png')",
//   opening_hours: "url('/assets/opening-hours/bg.png')",
//   footer: "url('/assets/footer/bg.png')",
// },


const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
      <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
