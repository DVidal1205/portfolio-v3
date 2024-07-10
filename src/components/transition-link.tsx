"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
    href,
    children,
    className,
    ...props
}: TransitionLinkProps) {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        const main = document.querySelector("main");
        main?.classList.add("page-transition");
        await sleep(500);
        router.push(href);
        main?.classList.remove("page-transition");
    };

    return (
        <Link
            href={href}
            {...props}
            onClick={(e) => {
                handleTransition(e);
            }}
            className={className}
        >
            {children}
        </Link>
    );
}
