import { Section } from "./Section";
import SectionTitle from "./SectionTitle";

const tech = ["Node.js", "React", "Next.js", "MongoDB", "Mongoose", "Puppeteer", "Tailwind", "Vercel", "Railway"];

export default function TechStack() {
    return (
        <Section>
        <SectionTitle eyebrow="Stack" title="Tecnologías que uso" />
        <ul className="flex flex-wrap gap-2">
            {tech.map(t => (
            <li key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm">{t}</li>
            ))}
        </ul>
        </Section>
    );
}