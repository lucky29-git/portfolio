import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Chandrashekhar Portfolio",
  description: "Chandrashekhar portfolio website",
  openGraph:{
    title: "Chandrashekhar's portfolio website",
    description: "A showcase of my professional work and skills",
    images: [{
      url: "/images/preview.png",
      width: 1200,
      height: 630
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className}`}
      >
        {/* <BackgroundLines> */}
        {children}
        <Analytics/>
        <SpeedInsights/>
        {/* </BackgroundLines> */}
      </body>
    </html>
  );
}
