import Navbar from "@/components/navbar";

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
