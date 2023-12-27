import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chart Instant",
  description: "Chart Instant: Create chart, maps and table",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center px-6 py-3">
          {children}
        </main>
      </body>
    </html>
  );
}
