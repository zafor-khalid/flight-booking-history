import { Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flight Booking",
  description: "Flight Booking History",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
