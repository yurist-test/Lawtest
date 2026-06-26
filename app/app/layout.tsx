import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LawTest — Yuridik OTM imtihonlariga tayyorgarlik",
  description:
    "O'zbekistonda huquqshunoslik yo'nalishiga kiruvchi abituriyentlar uchun professional onlayn test platformasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
