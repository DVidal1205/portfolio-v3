import Navbar from "@/components/navbar";
import { Metadata } from "next";

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
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen p-4 xl:p-24 bg-purple-950 w-full">
                {children}
            </main>
        </>
    );
}
