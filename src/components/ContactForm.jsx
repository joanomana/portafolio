"use client";
import { useState } from "react";
import { Section } from "./Section";
import SectionTitle from "./SectionTitle";

export default function ContactForm() {
    const [status, setStatus] = useState("idle");
    async function onSubmit(e) {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const res = await fetch("https://formspree.io/f/REEMPLAZA_ID", { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } });
        setStatus(res.ok ? "success" : "error");
        if (res.ok) form.reset();
    }

    return (
        <Section id="contact">
        <SectionTitle eyebrow="Contacto" title="Hablemos" subtitle="Cuéntame sobre tu proyecto." />
        <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
            <input name="name" placeholder="Nombre" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
            <input type="email" name="email" placeholder="Email" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
            <textarea name="message" placeholder="Mensaje" required rows={5} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
            <button disabled={status==="loading"} className="bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white px-5 py-2 rounded-lg">Enviar</button>
            {status === "success" && <p className="text-green-400">¡Gracias! Te responderé pronto.</p>}
            {status === "error" && <p className="text-red-400">Hubo un error. Inténtalo de nuevo.</p>}
        </form>
        </Section>
    );
}