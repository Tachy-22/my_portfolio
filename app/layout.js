import "./globals.css";
import Nav from "next/components/Nav";

export const metadata = {
  title: "Jeffery Entekume",
  description: "Contains amazing works cooked by sir Jeffery E. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundImage: "url(assets/images/bgImg.webp)" }}
        className={`w-full lg:bg-contain bg-cover lg:bg-repeat bg-no-repeat   `}
      >
        <Nav />
        <main className="flex min-h-screen flex-col items-center justify-between w-full   backdrop-brightness-[30%]">
          {children}
        </main>
      </body>
    </html>
  );
}
