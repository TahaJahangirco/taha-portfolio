import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taha Jahangir — Design · Development · AI",
  description:
    "Taha Jahangir is a multidisciplinary designer & engineer crafting premium digital products across Design, Development, and Artificial Intelligence.",
  keywords: [
    "Taha Jahangir",
    "Portfolio",
    "Design",
    "Development",
    "AI",
    "Product Designer",
    "Creative Developer",
    "UI UX",
  ],
  authors: [{ name: "Taha Jahangir" }],
  openGraph: {
    title: "Taha Jahangir — Design · Development · AI",
    description:
      "Multidisciplinary designer & engineer crafting premium digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-obsidian text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
