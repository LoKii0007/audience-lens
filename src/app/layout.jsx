import "./globals.css";
import { Toaster } from "react-hot-toast";
import "@/css/responsive.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "YT Comment Xpert",
  description: "Developed by Ganesh Mangla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`overflow-x-hidden`}>
      <body className="antialiased home-font ">
        <Navbar />
        <div className="h-full w-full min-h-screen">
          {children}
        </div>
        <Footer />
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
