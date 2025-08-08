export function Section({ id, children, className = "" }) {
    return (
        <section id={id} className={`max-w-6xl mx-auto px-4 py-20 ${className}`}>
        {children}
        </section>
    );
}