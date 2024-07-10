import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dylan Vidal",
    description:
        "Dylan Vidal is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
    keywords: [
        "Dylan Vidal",
        "Software Engineer",
        "UCF",
        "University of Central Florida",
        "Knight Hacks",
        "Web Development",
        "Full Stack",
    ],
    openGraph: {
        type: "website",
        title: "Dylan Vidal",
        description:
            "Dylan Vidal is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
        url: "https://dvidal.dev",
        images: [{ url: "https://dvidal.dev/headshot.jpg" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-purple-950">
            <body className={cn("bg-purple-950", inter.className)}>
                {children}
            </body>
        </html>
    );
}
