import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nika Qvrivishvili's portfolio",
  description: "Portfolio of Nika Qvrivishvili generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed px-12 py-6 w-full flex text-slate-400 bg-gradient-to-br from-[#1E1B4B0A] backdrop-blur-3xl shadow-sm to-[#0A0A0A0A] z-10">
          <nav className="flex gap-8 ml-auto text-xl">
            <a href="/" className="text-indigo-400">home</a>
            <a href="/" className="text-slate-400">about me</a>
            <a href="/" className="text-slate-400">my skills</a>
            <a href="/" className="text-slate-400">my work</a>
            <a href="/" className="text-slate-400">contact me</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
