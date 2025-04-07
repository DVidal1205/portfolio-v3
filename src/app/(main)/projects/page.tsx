import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { GemIcon, LinkIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dylan Vidal | Projects",
    description:
        "My projects that I have worked on as a software engineer and undergraduate student at the University of Central Florida.",
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
        title: "Dylan Vidal | Projects",
        description:
            "My projects that I have worked on as a software engineer and undergraduate student at the University of Central Florida.",
        url: "https://dvidal.dev/projects",
    },
};

export default function Projects() {
    const projects = [
        {
            name: "CodeJoust",
            duration: "February 2025 - Present",
            description: {
                paragraph:
                    "CodeJoust is a platform made to help developers learn DSA by enabling them to practice with their friends in an engaging gamified way.",
                tags: [
                    "React",
                    "Tailwind",
                    "Typescript",
                    "MongoDB",
                    "Express",
                    "LeetCode",
                    "WebSockets",
                    "JWTs",
                    "Resend",
                ],
            },
            logo: "/logos/codejoust.png",
            image: "",
            link: "https://play.codejoust.xyz",
        },
        {
            name: "AirJam AI",
            duration: "HackUSF 2025 Hackathon",
            description: {
                paragraph:
                    "AirJam is an AI-powered music exploration tool that helps users make music, anytime, anywhere. Using Computer Vision, play up to 30 instruments with just your webcam.",
                tags: [
                    "React",
                    "Tailwind",
                    "Typescript",
                    "Python",
                    "FastAPI",
                    "OpenCV",
                    "YOLO",
                    "Mediapipe",
                    "WebAudioFonts",
                ],
            },
            logo: "/logos/airjam.png",
            image: "",
            link: "https://devpost.com/software/airjam",
        },
        {
            name: "VoiceBoard AI",
            duration: "Shell Hacks 2024 Hackathon",
            description: {
                paragraph:
                    "Winner of Google's Hack for Social Good Challenge at Shell Hacks 2024, Voiceboard AI makes whiteboarding accessible to all by using speech-to-diagram technology.",
                tags: [
                    "React",
                    "Next.js",
                    "Tailwind",
                    "Typescript",
                    "tRPC",
                    "Gemini",
                    "Speech Recognition",
                    "Mermaid",
                ],
            },
            logo: "/logos/voiceboard.png",
            image: "",
            link: "https://voiceboard.app/draw",
        },
        {
            name: "Forge",
            duration: "July 2024 - Present",
            description: {
                paragraph:
                    "Forge is the Knight Hacks monorepo, and contains all of our organizations core infrastructure. Built and maintained by myself and the Knight Hacks team.",
                tags: [
                    "Discord.js",
                    "TypeScript",
                    "Node.js",
                    "pm2",
                    "node-cron",
                    "SQLite",
                    "Webhooks",
                ],
            },
            logo: "/logos/knighthacks.png",
            image: "",
            link: "https://github.com/KnightHacks/forge",
        },
        {
            name: "Lootcode",
            duration: "February 2024 - May 2024",
            description: {
                paragraph:
                    "My team's first place winning project of the Knight Hacks Projects Program, Lootcode aims to make learning Data Structures and Algorithms fun and engaging.",
                tags: [
                    "TypeScript",
                    "React",
                    "Next.js",
                    "tRPC",
                    "Linux",
                    "Docker",
                    "Zx Shell",
                ],
            },
            logo: "/logos/lootcode-final.png",
            image: "",
            link: "https://www.lootcode.dev",
        },
        {
            name: "APA-Scan + AS-Quant",
            duration: "March 2024 - August 2024",
            description: {
                paragraph:
                    "The APA-Scan and AS-Quant pipelines are critical for RNA-Seq analysis in my lab, and use parallelized Python to assist in the analysis of large genetic datasets.",
                tags: [
                    "Python",
                    "Multiprocessing",
                    "Pandas",
                    "Numpy",
                    "Samtools",
                    "Cython",
                ],
            },
            logo: "/logos/ucfcs.jpeg",
            image: "",
            link: "https://github.com/compbiolabucf",
        },
        {
            name: "Wildspace Web",
            duration: "December 2023 - February 2024",
            description: {
                paragraph:
                    "Wildspace Web is an AI-powered worldbuilding SaaS tool for dungeon masters that creates immersive and engaging worlds.",
                tags: [
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind",
                    "tRPC",
                    "Prisma",
                    "mySQL",
                ],
            },
            logo: "/logos/wildspace.png",
            image: "",
            link: "https://www.projectwild.space",
        },
        {
            name: "Project Wildspace",
            duration: "Knight Hacks VI Hackathon",
            description: {
                paragraph:
                    "My project for Knight Hacks 2023, Project Wildspace was a proof of concept for using AI to generate immersive and engaging worlds for tabletop roleplaying games.",
                tags: ["Python", "PySide", "Qt", "LangChain", "Inno Installer"],
            },
            logo: "/logos/wildspace.png",
            image: "",
            link: "https://github.com/DVidal1205/wildspace-desktop",
        },
        {
            name: "UCF Activities Bot",
            duration: "November 2023 - December 2023",
            description: {
                paragraph:
                    "A Discord bot that scrapes the UCF Events Calendar and posts events every morning. Accessible to over 1000 UCF students across various servers.",
                tags: ["Python", "Selenium", "Nextcord", "Raspbian"],
            },
            logo: "/logos/discord.png",
            image: "",
            link: "https://2024.knighthacks.org",
        },
        {
            name: "Wordle Desktop",
            duration: "September 2023 - September 2023",
            description: {
                paragraph:
                    "A clone of the popular game Wordle, and my first desktop application built with Qt in C++. Built after being dissatisfied with being confined to the CLI.",
                tags: ["C++", "Qt", "Qt Creator"],
            },
            logo: "/logos/wordle.png",
            image: "",
        },
        {
            name: "DNDTTK",
            duration: "September 2023 - September 2023",
            description: {
                paragraph:
                    "One of my very first GUI-based projects, DNDTTK is a Dungeons and Dragons themed character generator built with Tkinter, built for ShellHacks 2023.",
                tags: ["Python", "Tkinter"],
            },
            logo: "/logos/dnd.webp",
            image: "",
            link: "https://devpost.com/software/dungeons-and-dragons-npc-generator",
        },
    ];

    return (
        <section className="w-full h-full mt-20 md:mt-24 md:px-8 text-violet-200">
            <div className="container px-4 md:px-6">
                <div className="space-y-6">
                    <div className="animate-fade delay-200">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Projects
                        </h2>
                        <p className="pt-2 md:text-lg max-w-5xl pb-4">
                            Since I started my journey as a software engineer, I
                            made an effort to deep dive into as many different
                            technologies through projects. All of my projects
                            are open source and can be found on my GitHub!
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="grid gap-4 relative animate-fade-up delay-300 bg-slate-900 text-violet-200"
                                style={{
                                    animationDelay: `${index * 200 + 700}ms`,
                                }}
                            >
                                <CardHeader className="flex flex-row items-center gap-4">
                                    {project.logo && (
                                        <Image
                                            src={project.logo}
                                            alt={project.name + "Logo"}
                                            width={40}
                                            height={40}
                                            className="rounded-lg"
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-lg md:text-xl lg:text-2xl flex items-center gap-2 font-bold">
                                            <div>{project.name}</div>
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    className="text-violet-300 hover:text-violet-400 transition-all duration-300"
                                                >
                                                    <LinkIcon className="h-4 w-4 md:h-5 md:w-5" />
                                                </Link>
                                            )}
                                        </h3>
                                        <p className="font-semibold text-sm md:text-base ">
                                            {project.duration}
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm md:text-base">
                                    {project.description.paragraph}
                                </CardContent>
                                <CardFooter>
                                    <div className="flex flex-wrap gap-2">
                                        {project.description.tags.map(
                                            (tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-xs font-medium text-violet-200 animate-fade-up"
                                                    style={{
                                                        animationDelay: `${
                                                            index * 150 + 1000
                                                        }ms`,
                                                    }}
                                                >
                                                    <GemIcon className="w-3 h-3 md:h-4 md:w-4" />
                                                    {tag}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </CardFooter>
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={800}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
