import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";
import ProjectsGrid from "../components/ProjectGrid.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <ProjectsGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
