import { Mulish } from "next/font/google";
import "./globals.css";

const fontSans = Mulish({
  subsets: ['latin'],
  variable: '--font-family-sans',
})

export const metadata = {
  title: "BandiCall",
  description: "Bandicall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={fontSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
