import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";

export const metadata = {
  title: "Md Mahmudur Reza",
  description: "Portfolio of Md Mahmudur Reza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
