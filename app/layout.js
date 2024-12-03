import Navbar from "@/components/HomeComponents/Navbar";
import "./globals.css";
import Footer from "@/components/HomeComponents/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
