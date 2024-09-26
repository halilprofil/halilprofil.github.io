import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="header">
      <Link href="/">Anasayfa </Link>
      <Link href="/category/beauty">beauty </Link>
      <Link href="/category/smartphones">smartphones </Link>
      <Link href="/category/tablets">tablets </Link>
      <Link href="/category/laptops">laptops </Link>
      <Link href="/category/vehicle">vehicle </Link>
      </div>
        {children}
      </body>
    </html>
  );
}
