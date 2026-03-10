import Cabecalho from "../components/Cabecalho";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Skills from "../components/skill";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Inicio() {
  return (
    <section>
      <Cabecalho />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
