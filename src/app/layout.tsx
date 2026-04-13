import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ehico.com"),
  title: {
    default: "EHI | AV Installation & Products | Norfolk, VA",
    template: "%s | EHI",
  },
  description:
    "Professional AV installation, LED fixtures, and security cameras serving Hampton Roads since 1977. GSA contract holder.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EHI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
