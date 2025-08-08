import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import ParticlesBackground from "../components/Particle.jsx";

export const metadata = {
  title: "Portafolio de Joan",
  description: "Desarrollador Full-Stack – Proyectos y contacto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="relative min-h-screen bg-black text-gray-200">
        <ParticlesBackground />
        <Navbar />
        <div className="relative z-10 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
