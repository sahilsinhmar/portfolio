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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
