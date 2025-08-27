import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "COLLAB - Jam Band | Real-time Collaborative Jamming",
  description: "Demo: Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. Perfect for remote jam sessions and virtual music brainstorming.",
  keywords: "music collaboration, virtual instruments, real-time music, jam session, online music, web audio, virtual jamming",
  openGraph: {
    title: "COLLAB - Jam Band",
    description: "Real-time collaborative jamming web application",
    type: "website",
    url: "https://jam-band-fe.vercel.app/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
