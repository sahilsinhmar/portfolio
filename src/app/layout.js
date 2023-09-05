import "./globals.css";

import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sahil Sinhmar",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Nav />
        <main className="mt-12  w-[100vw]  sm:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
