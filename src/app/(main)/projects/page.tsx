import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { GemIcon, LinkIcon, Tag, TagIcon } from "lucide-react";
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
            title: "Founding Engineer",
            company: "DormDevs LLC.",
            duration: "April 2024 - Present",
            description: {
                paragraph:
                    "As a co-founder of DormDevs, I strive to create high-quality website solutions for businesses packaged with analytics and SEO optimization. Furthermore, we serve as a platform for aspiring student developers to gain real-world experience in web development through shadowing and coop opportunities",
                tags: [
                    "Typescript",
                    "React",
                    "Node.js",
                    "Linux",
                    "Testing",
                    "Typescript",
                    "React",
                    "Node.js",
                    "Linux",
                    "Testing",
                ],
            },
            logo: "/logos/dormdevs.png",
            image: "",
            link: "https://www.dormdevs.com",
        },
        {
            title: "Secretary",
            company: "Knight Hacks",
            duration: "February 2024 - Present",
            description: {
                paragraph:
                    "Knight Hacks is UCF's software development and organization, and the place I conquered impostor syndrome as a developer. Now I take it upon myself as Secretary to empower our members with the same confidence and make sure that our organization continues to operate smoothly, spreading our mission of fostering a community of aspiring developers.",
                tags: ["Typescript", "React", "Node.js", "Linux", "Testing"],
            },
            logo: "/logos/knighthacks.ico",
            image: "",
            link: "https://2024.knighthacks.org",
        },
        {
            title: "Secretary",
            company: "Knight Hacks",
            duration: "February 2024 - Present",
            description: {
                paragraph:
                    "Knight Hacks is UCF's software development and organization, and the place I conquered impostor syndrome as a developer. Now I take it upon myself as Secretary to empower our members with the same confidence and make sure that our organization continues to operate smoothly, spreading our mission of fostering a community of aspiring developers.",
                tags: ["Typescript", "React", "Node.js", "Linux", "Testing"],
            },
            logo: "/logos/knighthacks.ico",
            image: "",
            link: "https://2024.knighthacks.org",
        },
        {
            title: "Secretary",
            company: "Knight Hacks",
            duration: "February 2024 - Present",
            description: {
                paragraph:
                    "Knight Hacks is UCF's software development and organization, and the place I conquered impostor syndrome as a developer. Now I take it upon myself as Secretary to empower our members with the same confidence and make sure that our organization continues to operate smoothly, spreading our mission of fostering a community of aspiring developers.",
                tags: ["Typescript", "React", "Node.js", "Linux", "Testing"],
            },
            logo: "/logos/knighthacks.ico",
            image: "",
            link: "https://2024.knighthacks.org",
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
                            Since entering the industry, I&apos;ve had many
                            wonderful opportunities to explore Computer Science
                            and deepen my love for technology. Here is a brief
                            overview of my work so far.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                                            alt={project.company + "Logo"}
                                            width={40}
                                            height={40}
                                            className="rounded-lg"
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-lg md:text-xl lg:text-2xl flex items-center gap-2 font-bold">
                                            <div>{project.title}</div>
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    className="text-violet-300 hover:text-violet-400 transition-all duration-300"
                                                >
                                                    <LinkIcon className="h-4 w-4 md:h-5 md:w-5" />
                                                </Link>
                                            )}
                                        </h3>
                                        <p className="font-semibold pb-2 text-sm md:text-base ">
                                            {project.duration}
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-sm md:text-base">
                                    <p className="pb-2">
                                        {project.description.paragraph}
                                    </p>
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
                                                            index * 100 + 1000
                                                        }ms`,
                                                    }}
                                                >
                                                    <TagIcon className="w-4 h-4" />
                                                    {tag}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </CardFooter>
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.company}
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
