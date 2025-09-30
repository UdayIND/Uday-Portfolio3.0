import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { METADATA } from "@/constants";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={roboto.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
