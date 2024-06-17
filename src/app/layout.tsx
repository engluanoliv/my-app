import "./globals.css";
import Template from "./template";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-screen overflow-hidden bg-custom-image backdrop-blur-md bg-cover bg-center">
        <Template>
          {children}
          <Analytics />
        </Template>
      </body>
    </html>
  );
}
