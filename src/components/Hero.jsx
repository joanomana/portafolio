"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";


const PHRASES = [
    "Full-Stack Developer",
    "Node.js • React • MongoDB",
    "Trabajo en equipo",
    "Comunicación clara",
    "Orientado a producto",
    "Resolución de problemas",
];

const TYPING_SPEED = 45;
const ERASING_SPEED = 28;
const PAUSE_END = 1100;
const PAUSE_EMPTY = 350;

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const mounted = useRef(false);

    const phrase = useMemo(() => PHRASES[index], [index]);

    useEffect(() => {
        mounted.current = true;
        return () => { mounted.current = false; };
    }, []);

    useEffect(() => {
        let timer;

        const type = () => {
        if (!mounted.current) return;
        if (isTyping) {
            if (text.length < phrase.length) {
            timer = setTimeout(() => setText(phrase.slice(0, text.length + 1)), TYPING_SPEED);
            } else {
            timer = setTimeout(() => setIsTyping(false), PAUSE_END);
            }
        } else {
            if (text.length > 0) {
            timer = setTimeout(() => setText(phrase.slice(0, text.length - 1)), ERASING_SPEED);
            } else {
            timer = setTimeout(() => {
                setIndex((i) => (i + 1) % PHRASES.length);
                setIsTyping(true);
            }, PAUSE_EMPTY);
            }
        }
        };

        type();
        return () => clearTimeout(timer);
    }, [text, isTyping, phrase]);

    return (
        <div className="min-h-[70vh] flex items-center" id="home">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
                    >
                    Joan Omaña — Full-Stack Developer
                    <div className="mt-2 relative" role="status" aria-live="polite">
                        <span className="invisible font-bold tracking-tight">
                        Experto en APIs escalables
                        </span>
                        <span className="absolute left-0 top-0 flex items-baseline">
                            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent font-bold tracking-tight">
                                {text}
                            </span>
                            <span
                                className="ml-1 h-[1.1em] w-[2px] self-end translate-y-[2px] bg-sky-300 animate-caret"
                                aria-hidden
                            />
                        </span>
                    </div>
                </motion.h1>


                <div className="mt-8 flex gap-3">
                    <a
                        href="#projects"
                        className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg"
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#contact"
                        className="border border-white/20 hover:border-white/40 text-white px-5 py-2 rounded-lg"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </div>
    );
}
