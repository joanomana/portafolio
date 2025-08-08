"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="#home" className="font-bold text-white tracking-tight">
            Joan.dev
            </Link>
            <div className="hidden sm:flex items-center gap-6">
            <Link href="#about" className="text-gray-300 hover:text-sky-400">Sobre mí</Link>
            <Link href="#projects" className="text-gray-300 hover:text-sky-400">Proyectos</Link>
            <Link href="#contact" className="text-gray-300 hover:text-sky-400">Contacto</Link>
            <a
                href="/cv/joan_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-md text-sm"
            >
                CV
            </a>
            </div>
        </div>
        </nav>
    );
}
