import Cabecalho from "../components/Cabecalho";
import Welcome from "../components/Welcome";
import About from "../components/About";
import AboutMe from "../components/Aboutme";
import Skills from "../components/skill";
import Portfolio from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Welcome />
      <About />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
