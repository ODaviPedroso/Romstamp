import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Romstamp — Feitos que merecem um carimbo", description: "Comunidade de desafios gamers e feitos homologados." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
