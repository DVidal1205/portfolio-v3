import { GemIcon, LinkIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dylan Vidal | Experience",
    description:
        "My experience as a software engineer and undergraduate student at the University of Central Florida.",
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
        title: "Dylan Vidal | Experience",
        description:
            "My experience as a software engineer and undergraduate student at the University of Central Florida.",
        url: "https://dvidal.dev/experience",
    },
};

export default function Experience() {
    const experiences = [
        {
            title: "Founding Engineer",
            company: "DormDevs LLC.",
            duration: "April 2024 - Present",
            description: {
                paragraph:
                    "As a co-founder of DormDevs, I strive to create high-quality website solutions for businesses packaged with analytics and SEO optimization. Furthermore, we serve as a platform for aspiring student developers to gain real-world experience in web development through shadowing and coop opportunities",
                bullets: [
                    "Empowered businesses with powerful insights and uplifted students with contracted work opportunities.",
                    "Developed a business facing dashboard with real time analytics, billing, and a ticketing system for routine maintenance.",
                    "Hosted and deployed open source analytics, authentication, and database on a Linux VPS.",
                    "Managed a team of contracted freelance developers sourced from local colleges and universities.",
                    "Partenered with businesses of various sizes throughout Florida to provide web development services.",
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
                    "Knight Hacks is UCF's software development and organization, and the place I conquered imposter syndrome as a developer. Now I take it upon myself as Secretary to empower our members with the same confidence and make sure that our organization continues to operate smoothly, spreading our mission of fostering a community of aspiring developers.",
                bullets: [
                    "Played a critical role in planning the Knight Hacks 2024 Hackathon with over 750 hackers.",
                    "Participated in monthly development sprints to perfect the Hackathon registration system.",
                    "Raised money through coordinated sponsorships with numerous Fortunte 500 companies and partial proceeds events.",
                    "Served as a Kickstart mentor to help guide aspiring developers, and led various workshops for the club",
                ],
            },
            logo: "/logos/knighthacks.ico",
            image: "",
            link: "https://2024.knighthacks.org",
        },
        {
            title: "Undergraduate Researcher",
            company: "UCF Computational Bioinformatics Laboratory",
            duration: "March 2024 - Present",
            description: {
                paragraph:
                    "Working under my Discrete Structures professor, my lab focuses on the development of algorithms for the analysis of complex biological data with a focus on RNA-sequencing, Alternative Splicing Detection, and gene quantification.",
                bullets: [
                    "Reduced the runtime of the AS-Quant and APA-Scan laboratory pipelines by 75% by leveraging concurrency and parallelism in Python",
                    "Assisted in data collection, sanitization, and transformation using numpy and pandas.",
                    "Researched Machine Learning solutions for cancer detection with processed RNA-Seq data.",
                ],
            },
            logo: "/logos/ucf.png",
            image: "",
            link: "https://github.com/compbiolabucf",
        },
        {
            title: "Honors Team Leader",
            company: "UCF Burnett Honors College",
            duration: "July 2024 - Present",
            description: {
                paragraph:
                    "Honors Symposium is a core component of the Honors Curriculum at UCF, where incoming students learn what it means to be apart of the Honors community. As a Team Leader, I am in charge of running a 15 student breakout room and facilitating discussions on the topics presented. I also serve as a mentor to the students, helping them navigate their first year at UCF, and create an environment where they can feel welcome and make friends.",
                bullets: [
                    "Led a 15 student breakout room during the Honors Symposium, facilitating discussions and answering questions.",
                    "Planned monthly social events for all Symposium students to help them make friends and feel welcome at UCF.",
                    "Performed administrative tasks for the breakout room like creating and grading assignments",
                ],
            },
            logo: "/logos/burnett.png",
            image: "",
            link: "https://honors.ucf.edu/university-honors/honors-symposium/team-leader-program/",
        },
        {
            title: "Honors Orientation Ambassador",
            company: "UCF Burnett Honors College",
            duration: "May 2024 - July 2024",
            description: {
                paragraph:
                    "As an Honors Orientation Ambassador, I was responsible for advising incoming Honors Computer Science students during registration. Meeting with my advisees over the course of a month, I gave professional assistance with registering for classes, and provided guidance on how to navigate computer science at UCF.",
                bullets: [
                    "Advised 20 Computer Science students through course registration at UCF.",
                    "Organized our in-person orientation sessions, where students were introduced to the Honors College.",
                    "Trained as an academic advisor by the UCF Honors College staff.",
                ],
            },
            logo: "/logos/burnett.png",
            image: "",
            link: "https://honors.ucf.edu/university-honors/orientation/",
        },
    ];

    return (
        <section className="w-full h-full mt-20 md:mt-24 md:px-8 text-violet-200">
            <div className="container px-4 md:px-6">
                <div className="space-y-6">
                    <div className="animate-fade delay-200">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Experience
                        </h2>
                        <p className="pt-2 md:text-lg max-w-5xl pb-4">
                            Since entering the industry, I&apos;ve had many
                            wonderful opportunities to explore Computer Science
                            and deepen my love for technology. Here is a brief
                            overview of my work so far.
                        </p>
                    </div>
                    <div className="grid gap-12 relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-violet-200 after:left-0 animate-fade-right delay-100">
                        {experiences.map((experience, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[auto_1fr] gap-4 relative animate-fade-up delay-300"
                                style={{
                                    animationDelay: `${index * 200 + 700}ms`,
                                }}
                            >
                                <div className="aspect-square w-3 rounded-full absolute left-0 translate-x-[-29.5px] scale-150 z-10 top-1 flex items-center justify-center">
                                    <GemIcon
                                        className="h-12 w-12 text-violet-400"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        {experience.logo && (
                                            <Image
                                                src={experience.logo}
                                                alt={
                                                    experience.company + "Logo"
                                                }
                                                width={40}
                                                height={40}
                                                className="rounded-lg"
                                            />
                                        )}
                                        <div>
                                            <h3 className="text-xl md:text-2xl flex items-center gap-2 font-bold">
                                                <div>{experience.title}</div>
                                                {experience.link && (
                                                    <Link
                                                        href={experience.link}
                                                        className="text-violet-300 hover:text-violet-400 transition-all duration-300"
                                                    >
                                                        <LinkIcon className="h-4 w-4 md:h-5 md:w-5" />
                                                    </Link>
                                                )}
                                            </h3>
                                            <p className="font-semibold pb-2">
                                                {experience.company} |{" "}
                                                {experience.duration}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-base">
                                        <p>
                                            {experience.description.paragraph}
                                        </p>
                                        <ul className=" space-y-2 pt-2">
                                            {experience.description.bullets.map(
                                                (item, index) => (
                                                    <li key={index}>
                                                        • {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    {experience.image && (
                                        <Image
                                            src={experience.image}
                                            alt={experience.company}
                                            width={800}
                                            height={400}
                                            className="rounded-lg"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
