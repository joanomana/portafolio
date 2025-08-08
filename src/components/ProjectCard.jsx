"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
    return (
        <motion.article initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
        <div className="relative h-44">
            <Image src={p.image} alt={p.title} fill className="object-cover" />
        </div>
        <div className="p-4">
            <h3 className="text-white font-semibold">{p.title}</h3>
            <p className="text-gray-300 text-sm mt-1">{p.summary}</p>
            <div className="flex flex-wrap gap-1 mt-3">
            {p.stack.map(s => (
                <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-200">{s}</span>
            ))}
            </div>
            <div className="mt-4 flex gap-3">
            {p.repo && <a className="text-sky-400 hover:underline" href={p.repo} target="_blank">Código</a>}
            {p.demo && <a className="text-sky-400 hover:underline" href={p.demo} target="_blank">Demo</a>}
            </div>
        </div>
        </motion.article>
    );
}