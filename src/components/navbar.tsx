"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Experience",
        href: "/experience",
    },
    {
        name: "Skills",
        href: "/skills",
    },
    {
        name: "Education",
        href: "/education",
    },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (previous && latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const path = usePathname();

    return (
        <motion.nav
            animate={{ y: hidden ? "-100%" : 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className={cn(
                "fixed z-10 w-full p-4 shadow-md flex text-violet-200 bg-slate-900"
            )}
        >
            <Sheet>
                <SheetTrigger asChild className="md:hidden">
                    <Button className="outline outline-1" size={"sm"}>
                        <MenuIcon size={16} />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side={"left"}
                    className="bg-slate-900 text-violet-200 border-none"
                >
                    <SheetHeader className="mb-4">
                        <Link
                            href="/"
                            className="md:flex-1 px-2 flex text-center items-center font-bold text-lg md:text-xl "
                        >
                            <div>Dylan Vidal</div>
                        </Link>
                    </SheetHeader>
                    <div className="flex flex-col">
                        {links.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <div
                                    className={`px-4 py-2 hover:opacity-80 transition-all duration-300 ${
                                        path === link.href &&
                                        "font-semibold underline"
                                    }`}
                                >
                                    {link.name}
                                </div>
                            </Link>
                        ))}
                        <div className="flex px-4 space-x-4 mt-4">
                            <Link
                                href={"https://github.com/DVidal1205"}
                                className="py-2"
                            >
                                <Image
                                    src={"/github.svg"}
                                    alt={"Github"}
                                    width={25}
                                    height={25}
                                    className="hover:opacity-80 transition-all duration-300"
                                />
                            </Link>
                            <Link
                                href={
                                    "https://www.linkedin.com/in/dylanvidal1204/"
                                }
                                className="py-2"
                            >
                                <Image
                                    src={"/linkedin.svg"}
                                    alt={"Github"}
                                    width={25}
                                    height={25}
                                    className="hover:opacity-80 transition-all duration-300"
                                />
                            </Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <Link
                href="/"
                className="md:flex-1 px-2 flex text-center items-center font-bold text-lg md:text-xl"
            >
                <div className="hidden md:flex">Dylan Vidal</div>
            </Link>
            <div className="md:flex justify-center items-center hidden">
                {links.map((link) => (
                    <Link key={link.name} href={link.href}>
                        <div
                            className={`px-4 py-2 hover:opacity-80 transition-all duration-300 ${
                                path === link.href && "font-semibold underline"
                            }`}
                        >
                            {link.name}
                        </div>
                    </Link>
                ))}
                <Link
                    href={"https://github.com/DVidal1205"}
                    className="px-4 py-2"
                >
                    <Image
                        src={"/github.svg"}
                        alt={"Github"}
                        width={25}
                        height={25}
                        className="hover:opacity-80 transition-all duration-300"
                    />
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/dylanvidal1204/"}
                    className="px-4 py-2"
                >
                    <Image
                        src={"/linkedin.svg"}
                        alt={"Github"}
                        width={25}
                        height={25}
                        className="hover:opacity-80 transition-all duration-300"
                    />
                </Link>
            </div>
        </motion.nav>
    );
}
