"use client";
import { useState } from "react";

export default function ProjectFilters({ stacks = [], onChange }) {
    const [active, setActive] = useState("All");
    const all = ["All", ...stacks];
    return (
        <div className="flex flex-wrap gap-2 mb-6">
        {all.map(s => (
            <button key={s} onClick={() => { setActive(s); onChange?.(s); }}
            className={`px-3 py-1 rounded-full border text-sm ${active===s?"bg-sky-500 text-white border-sky-500":"bg-white/5 text-gray-200 border-white/10 hover:border-white/20"}`}>
            {s}
            </button>
        ))}
        </div>
    );
}