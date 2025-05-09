import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
        url: "https://dvidal.dev/",
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
            <Script
                async
                src="https://dormdevs-analytics.vercel.app/script.js"
                data-website-id="756f2751-f91e-4a23-b333-dffddd19857f"
            />
            <body className={cn("bg-purple-950", inter.className)}>
                {children}
            </body>
        </html>
    );
}
