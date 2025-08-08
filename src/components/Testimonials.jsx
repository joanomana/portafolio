import { Section } from "./Section";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
    return (
        <Section>
        <SectionTitle eyebrow="Feedback" title="Testimonios" />
        <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
            <figure key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
                <blockquote className="text-gray-200">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-gray-400">{t.name} · {t.role}</figcaption>
            </figure>
            ))}
        </div>
        </Section>
    );
}