import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tripma",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
