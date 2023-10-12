import MainNav from "@/components/MainNav";
import "./globals.css";
import { Asap_Condensed } from "next/font/google";

const asapCondensed = Asap_Condensed({ subsets: ["latin"], weight: "200" });

export const metadata = {
  title: "VeeSoccer",
  description: "VeeSoccer all about soccer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asapCondensed.className}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
