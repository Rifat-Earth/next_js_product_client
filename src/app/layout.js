import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Provider";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Navbar></Navbar>
        <main className="flex-grow">{children}</main>
        <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
