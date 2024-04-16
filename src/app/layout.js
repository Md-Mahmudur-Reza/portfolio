import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";

export const metadata = {
  title: "Md Reza",
  description: "Just a little bit of myself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
