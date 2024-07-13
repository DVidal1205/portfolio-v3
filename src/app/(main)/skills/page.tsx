import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export const metadata: Metadata = {
    title: "Dylan Vidal | Skills",
    description:
        "My marketable skills as a software engineer and undergraduate student at the University of Central Florida.",
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
        title: "Dylan Vidal | Skills",
        description:
            "My marketable skills as a software engineer and undergraduate student at the University of Central Florida.",
        url: "https://dvidal.dev/skills",
    },
};

export default function Projects() {
    const web = [
        {
            name: "React",
            icon: "/logos/react.svg",
        },
        {
            name: "Next.js",
            icon: "/logos/next.svg",
        },
        {
            name: "Tailwind CSS",
            icon: "/logos/tailwind.svg",
        },
        {
            name: "tRPC",
            icon: "/logos/trpc.svg",
        },
        {
            name: "Node.js",
            icon: "/logos/node.svg",
        },
        {
            name: "Drizzle",
            icon: "/logos/drizzle.jpg",
        },
        {
            name: "Prisma",
            icon: "/logos/prisma.svg",
        },
        {
            name: "Vercel",
            icon: "/logos/vercel.svg",
        },
        {
            name: "Flask",
            icon: "/logos/flask.svg",
        },
    ];
    const languages = [
        {
            name: "C",
            icon: "/logos/c.svg",
        },
        {
            name: "C++",
            icon: "/logos/cpp.svg",
        },
        {
            name: "Python",
            icon: "/logos/python.svg",
        },
        {
            name: "Java",
            icon: "/logos/java.svg",
        },
        {
            name: "TypeScript",
            icon: "/logos/typescript.svg",
        },
        {
            name: "JavaScript",
            icon: "/logos/javascript.svg",
        },
        {
            name: "CSS",
            icon: "/logos/css.svg",
        },
        {
            name: "HTML",
            icon: "/logos/html.svg",
        },
    ];
    const packages = [
        {
            name: "LangChain",
            icon: "/logos/langchain.png",
        },
        {
            name: "Discord",
            icon: "/logos/discord.png",
        },
        {
            name: "OpenAI API",
            icon: "/logos/openai.svg",
        },
        {
            name: "Qt",
            icon: "/logos/qt.svg",
        },
        {
            name: "Selenium",
            icon: "/logos/selenium.svg",
        },
        {
            name: "Numpy",
            icon: "/logos/numpy.svg",
        },
        {
            name: "Pandas",
            icon: "/logos/pandas.svg",
        },
        {
            name: "Pygame",
            icon: "/logos/pygame.svg",
        },
    ];
    const tools = [
        {
            name: "Linux",
            icon: "/logos/linux.png",
        },
        {
            name: "Git",
            icon: "/logos/git.svg",
        },
        {
            name: "GitHub",
            icon: "/logos/github.svg",
        },
        {
            name: "Docker",
            icon: "/logos/docker.svg",
        },
        {
            name: "VSCode",
            icon: "/logos/vscode.svg",
        },
        {
            name: "Figma",
            icon: "/logos/figma.svg",
        },
        {
            name: "mySQL",
            icon: "/logos/mysql.svg",
        },
        {
            name: "PostgreSQL",
            icon: "/logos/postgres.svg",
        },
    ];

    return (
        <TooltipProvider>
            <section className="w-full h-full mt-20 md:mt-24 md:px-8 text-violet-200">
                <div className="container px-4 md:px-6">
                    <div className="space-y-6">
                        <div className="animate-fade delay-200">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Skills
                            </h2>
                            <p className="pt-2 md:text-lg max-w-5xl pb-4">
                                After working on various projects and learning
                                as much as I can, I have acquired quite the
                                repetoire of skills! Here are some of the
                                technologies, packages, tools, and frameworks I
                                am familiar with.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="flex-col w-full items-center justify-center text-violet-200">
                                <h2 className="text-3xl font-bold tracking-tighter  md:text-4xl text-center pb-4 animate-fade-right delay-500 duration-700">
                                    Languages
                                </h2>
                                <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
                                    {languages.map((language, index) => {
                                        return (
                                            <Tooltip key={index}>
                                                <TooltipTrigger asChild>
                                                    <Card
                                                        key={language.name}
                                                        className="bg-slate-900 aspect-square p-4 h-[100px] w-auto animate-fade-right"
                                                        style={{
                                                            animationDelay: `${
                                                                index * 100 +
                                                                500
                                                            }ms`,
                                                        }}
                                                    >
                                                        <div className="relative h-full w-full">
                                                            <Image
                                                                src={
                                                                    language.icon
                                                                }
                                                                alt={
                                                                    language.name
                                                                }
                                                                layout="fill"
                                                                objectFit="cover"
                                                            />
                                                        </div>
                                                    </Card>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-slate-900 text-violet-200">
                                                    {language.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex-col w-full items-center justify-center text-violet-200">
                                <h2 className="text-3xl font-bold tracking-tighter  md:text-4xl text-center pb-4 animate-fade-right delay-500 duration-700">
                                    Web
                                </h2>
                                <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
                                    {web.map((language, index) => {
                                        return (
                                            <Tooltip key={index}>
                                                <TooltipTrigger asChild>
                                                    <Card
                                                        key={language.name}
                                                        className="bg-slate-900 aspect-square p-4 h-[100px] w-auto animate-fade-right"
                                                        style={{
                                                            animationDelay: `${
                                                                index * 100 +
                                                                500
                                                            }ms`,
                                                        }}
                                                    >
                                                        <div className="relative h-full w-full">
                                                            <Image
                                                                src={
                                                                    language.icon
                                                                }
                                                                alt={
                                                                    language.name
                                                                }
                                                                layout="fill"
                                                                objectFit="contain"
                                                            />
                                                        </div>
                                                    </Card>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {language.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex-col w-full items-center justify-center text-violet-200">
                                <h2 className="text-3xl font-bold tracking-tighter  md:text-4xl text-center pb-4 animate-fade-right delay-500 duration-700">
                                    Packages
                                </h2>
                                <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
                                    {packages.map((language, index) => {
                                        return (
                                            <Tooltip key={index}>
                                                <TooltipTrigger asChild>
                                                    <Card
                                                        key={language.name}
                                                        className="bg-slate-900 aspect-square p-4 h-[100px] w-auto animate-fade-right"
                                                        style={{
                                                            animationDelay: `${
                                                                index * 100 +
                                                                500
                                                            }ms`,
                                                        }}
                                                    >
                                                        <div className="relative h-full w-full">
                                                            <Image
                                                                src={
                                                                    language.icon
                                                                }
                                                                alt={
                                                                    language.name
                                                                }
                                                                layout="fill"
                                                                objectFit="contain"
                                                            />
                                                        </div>
                                                    </Card>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {language.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex-col w-full items-center justify-center text-violet-200">
                                <h2 className="text-3xl font-bold tracking-tighter  md:text-4xl text-center pb-4 animate-fade-right delay-500 duration-700">
                                    Tools
                                </h2>
                                <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
                                    {tools.map((language, index) => {
                                        return (
                                            <Tooltip key={index}>
                                                <TooltipTrigger asChild>
                                                    <Card
                                                        key={language.name}
                                                        className="bg-slate-900 aspect-square p-4 h-[100px] w-auto animate-fade-right"
                                                        style={{
                                                            animationDelay: `${
                                                                index * 100 +
                                                                500
                                                            }ms`,
                                                        }}
                                                    >
                                                        <div className="relative h-full w-full">
                                                            <Image
                                                                src={
                                                                    language.icon
                                                                }
                                                                alt={
                                                                    language.name
                                                                }
                                                                layout="fill"
                                                                objectFit="contain"
                                                            />
                                                        </div>
                                                    </Card>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {language.name}
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TooltipProvider>
    );
}
