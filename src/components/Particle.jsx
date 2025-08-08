"use client";
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
    const init = useCallback(async (engine) => { await loadSlim(engine); }, []);

    const options = useMemo(() => ({
        background: { color: { value: "transparent" } },
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
        number: { value: 70, density: { enable: true, area: 800 } },
        color: { value: ["#38bdf8", "#9333ea", "#f43f5e"] },
        shape: { type: ["circle", "triangle", "star"] },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 3 } },
        links: { enable: true, color: "#93c5fd", distance: 140, opacity: 0.35, width: 1 },
        move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "out" } }
        },
        interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 120 }, push: { quantity: 2 } }
        }
    }), []);

    return <Particles id="tsparticles" init={init} options={options} />;
}
