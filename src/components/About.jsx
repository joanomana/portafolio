import { Section } from "./Section";
import SectionTitle from "./SectionTitle";

export default function About() {
    return (
        <Section id="about">
        <SectionTitle eyebrow="Sobre mí" title="¿Quién soy?" subtitle="Desarrollador orientado a producto, amante de la DX y los datos." />
        <div className="prose prose-invert max-w-none">
            <p>
            Tengo experiencia creando CLIs, backends en Node.js, scrapers robustos y UIs con React.
            Me enfoco en arquitectura modular, testing y despliegues en Vercel/Railway.
            </p>
        </div>
        </Section>
    );
}