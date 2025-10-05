import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Provider";
import { ToastContainer } from "react-toastify";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Navbar></Navbar>
        <main className="flex-grow">{children}</main>
         <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
