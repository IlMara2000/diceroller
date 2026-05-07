import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Carichiamo il font Inter di Google per un look moderno
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dice Roller - Lancia il tuo dado",
  description: "Una semplice app creata con Next.js e Vercel per lanciare dadi online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "#f0f2f5", // Un grigio chiaro di sfondo
          color: "#333",
        }}
      >
        {children}
      </body>
    </html>
  );
}
