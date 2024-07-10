import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <section className="flex items-center justify-center h-full mt-4 md:mt-24 px-2 md:px-8 text-violet-200">
            <div className="flex flex-col xl:flex-row w-full h-full justify-between">
                <div className="flex flex-col items-start w-full mt-[90px] xl:pr-36">
                    <h1 className="text-2xl flex items-center justify-center md:justify-start w-full text-center md:text-left xl:text-3xl font-bold animate-fade-down md:animate-fade-right">
                        <div>Hey there, I&apos;m Dylan</div>
                        <div className="animate-wiggle animate-infinite ml-2">
                            👋
                        </div>
                    </h1>
                    <div className="md:hidden flex justify-center items-center w-full space-x-4 pt-4 animate-fade-down">
                        <Link href="/projects">
                            <Button className="text-2xl hover:text-violet-300 transition-all duration-300 hover:-translate-y-1">
                                Projects
                            </Button>
                        </Link>
                        <Link href="/resume.pdf">
                            <Button className="text-2xl hover:text-violet-300 transition-all duration-300 hover:-translate-y-1">
                                Resume
                            </Button>
                        </Link>
                    </div>
                    <div className="md:hidden justify-center w-full flex pt-8">
                        <div className="relative h-[300px] w-[300px]">
                            <Image
                                src="/headshot.jpg"
                                alt="Headshot"
                                fill
                                className="rounded-custom-shape shadow-2xl animate-fade-down "
                            />
                        </div>
                    </div>
                    <div className="animate-fade-up md:animate-fade-right delay-700 pt-8 space-y-4 md:pb-0 pb-12">
                        <p className="lg:text-lg">
                            I am a software engineer and undergraduate student
                            at the{" "}
                            <Link
                                href={"https://www.ucf.edu/"}
                                className="underline hover:text-violet-300 transition-all duration-300"
                            >
                                University of Central Florida.
                            </Link>{" "}
                            I am currently the Secretary of{" "}
                            <Link
                                href={
                                    "https://www.linkedin.com/company/knight-hacks/mycompany/"
                                }
                                className="underline hover:text-violet-300 transition-all duration-300"
                            >
                                Knight Hacks
                            </Link>
                            , UCF&apos;s Software Development organization,
                            where I work to empower our members with confidence
                            in themselves as developers.
                        </p>
                        <p className="lg:text-lg">
                            I have a deep passion for learning, and make it a
                            goal to help others ignite their love for learning
                            as well. I am always looking for a chance to help
                            other developers grow and become confident
                            engineers, and have taken leadership roles to
                            inspire others.
                        </p>
                        <p className="lg:text-lg">
                            Over the last year, I&apos;ve had the opportunity to
                            explore the world of full-stack web development,
                            learning cutting-edge technologies within the
                            industry. I plan to expand further this year by
                            diving deeper into other niches of software
                            development with a focus on machine learning and
                            artificial intelligence.
                        </p>
                        <div className="hidden md:flex space-x-4 pt-4">
                            <Link href="/projects">
                                <Button className="text-2xl hover:text-violet-300 transition-all duration-300 hover:-translate-y-1">
                                    Projects
                                </Button>
                            </Link>
                            <Link href="/resume.pdf">
                                <Button className="text-2xl hover:text-violet-300 transition-all duration-300 hover:-translate-y-1">
                                    Resume
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-center hidden  mt-16 xl:mt-0">
                    <div className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] ">
                        <Image
                            src="/headshot.jpg"
                            alt="Headshot"
                            fill
                            className="rounded-custom-shape shadow-2xl animate-fade-left "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
