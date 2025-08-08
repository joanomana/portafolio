export default function SectionTitle({ eyebrow, title, subtitle }) {
    return (
        <header className="mb-10">
        {eyebrow && <p className="text-xs uppercase tracking-widest text-sky-400/80">{eyebrow}</p>}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">{title}</h2>
        {subtitle && <p className="text-gray-300 mt-2 max-w-2xl">{subtitle}</p>}
        </header>
    );
}