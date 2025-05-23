import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
            title: "President",
            company: "Knight Hacks",
            duration: "February 2024 - Present",
            description: {
                paragraph:
                    "Knight Hacks is UCF's software development and organization, and the place I conquered impostor syndrome as a developer. Now I take it upon myself as President to empower our members with the same confidence and make sure that our organization continues to operate smoothly, spreading our mission of fostering a community of aspiring developers.",
                bullets: [
                    "Managed a non-profit organization with 500+ members and $40,000 dollars in yearly assets focused on creating confident, capable, and passionate developers.",
                    "Played a critical role in planning Knight Hacks 2024 Hackathon with over 700 attendees.",
                    "Led a team of 45 students to achieve deliverables such as 60 technical workshops per school year and mentorship.",
                    "Revamped the mentorship program, expanding the number of members by 58% compared to previous school year.",
                    "Fund-raised nearly $15,000 for the Hackathon by networking with numerous Fortune 500 companies.",
                ],
            },
            logo: "/logos/knighthacks.png",
            image: "",
            link: "https://blade.knighthacks.org",
        },
        {
            title: "Software Engineering Ignite Intern",
            company: "NVIDIA",
            duration: "May 2025 - August 2025",
            description: {
                paragraph:
                    "As an Incoming Software Engineering Ignite Intern, I will be working alongside many other aspiring software engineers like myself to develop and maintain software solutions for NVIDIA's cutting-edge technology. I am excited to learn from the best in the industry and contribute to the development of the next generation of technology.",
                bullets: [
                    "Joining the Systems Software Team, primarily working on the GPU clustering and scaffolding infrastructure. ",
                ],
            },
            logo: "/logos/nvidia.png",
            image: "",
            link: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
        },
        {
            title: "Campus Expert",
            company: "GitHub",
            duration: "May 2025 - Present",
            description: {
                paragraph:
                    "As a GitHub for the University of Central Florida, I will be interfacing with the GitHub education team to help bring software development resources to my local community, Knight Hacks. I am super excited to help others pave their paths and find their voices in tech.",
                bullets: [
                    "Served as an advocate for technologists and developers at the University of Central Florida.",
                    "Planned events on-campus to help make software development accessible to the early-technologist community.",
                    "Interfaced with GitHub Education as a Campus Expert to help bring resources and information to my local campus community.",
                ],
            },
            logo: "/logos/github.svg",
            image: "",
            link: "https://githubcampus.expert/experts",
        },
        {
            title: "Software Engineering Intern",
            company: "Pheratech Systems",
            duration: "May 2025 - August 2025",
            description: {
                paragraph:
                    "At Pheratech Systems, I joined the first Intern Cohort for the Spring 2025 semester, and thrived in the startup environment. I worked on all sorts of projects and technologies, from the familiarity of web-development to exciting embedded systems and machine learning / computer vision processes. Pheratech Systems was a great place to learn and make impact, being an innovative company with a focus on humanitarianism and human safety.",
                bullets: [
                    "Worked in a flourishing startup environment alongside a cohort of 4 other interns as the first batch of new hires.",
                    "Developed an internal inventory management system reducing unnecessary restock purchases by 40%.",
                    "Optimized YOLOv8 object detection computer vision models by 50% through label modifications.",
                    "Aided in securing pre-seed funding for the company through development of various projects.",
                ],
            },
            logo: "/logos/pheratech.jpeg",
            image: "",
            link: "https://www.pheratech.com",
        },
        {
            title: "Founding Engineer",
            company: "DormDevs LLC.",
            duration: "April 2024 - January 2025",
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
            title: "Undergraduate Researcher",
            company: "UCF Computational Bioinformatics Laboratory",
            duration: "March 2024 - August 2024",
            description: {
                paragraph:
                    "Working in the Computational Bioinformatics Laboratory at UCF, my research focuses on the development of algorithms for the analysis of complex biological data with a focus on RNA-sequencing, Alternative Splicing Detection, and gene quantification.",
                bullets: [
                    "Reduced the runtime of the AS-Quant and APA-Scan laboratory pipelines by 75% by leveraging concurrency and parallelism in Python",
                    "Assisted in data collection, sanitization, and transformation using numpy and pandas.",
                    "Researched Machine Learning solutions for cancer detection with processed RNA-Seq data.",
                ],
            },
            logo: "/logos/ucfcs.jpeg",
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
                    "As an Honors Orientation Ambassador, I was responsible for advising incoming Honors Computer Science students during registration. Meeting with my students over the course of a month, I gave professional assistance with registering for classes, and provided guidance on how to navigate computer science at UCF.",
                bullets: [
                    "Served as an academic advisor of 20 Computer Science students for course registration at UCF.",
                    "Worked our in-person orientation sessions, where students were introduced to the Honors College.",
                    "Provided a friendly face and positive attitude to help incoming students feel welcome at the Burnett Honors College.",
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
                            <Card
                                key={index}
                                className="grid grid-cols-[auto_1fr] gap-4 relative animate-fade-up delay-300 bg-slate-900 text-violet-200"
                                style={{
                                    animationDelay: `${index * 200 + 700}ms`,
                                }}
                            >
                                <div className="aspect-square w-3 rounded-full absolute left-0 translate-x-[-29.5px] scale-150 z-10 top-1 flex items-center justify-center">
                                    <GemIcon
                                        className="h-16 w-16 text-violet-400"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <CardHeader className="flex flex-row items-center gap-4">
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
                                            <h3 className="text-lg md:text-xl lg:text-2xl flex items-center gap-2 font-bold">
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
                                    </CardHeader>
                                    <CardContent className="text-sm md:text-base">
                                        <p className="pb-2">
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
                                    </CardContent>
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
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
