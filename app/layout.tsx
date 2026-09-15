import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gautam Rao | Machine Learning & Computational Engineering",
  description:
    "Portfolio of Gautam Rao — Machine Learning, Data Science, Optimization, Scientific Computing, and Computational Engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
