import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Container from "./components/Container";

const poppins = Poppins({ subsets : ['latin-ext'] , weight : ['100' , '400' , '700' , '900']});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Container >
        {children}
        </Container>
        </body>
    </html>
  );
}
