import { Cairo } from "@next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { SessionProvider } from "next-auth/react";


const cairo = Cairo({
  subsets: ['arabic'],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <SessionProvider>
          <div className="">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SessionProvider>

      </body>
    </html>
  );
}
