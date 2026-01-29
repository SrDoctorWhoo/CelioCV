import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "célio veloso | currículo & portfólio",
  description: "currículo e portfólio: dados, automação, sistemas e dashboards.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
