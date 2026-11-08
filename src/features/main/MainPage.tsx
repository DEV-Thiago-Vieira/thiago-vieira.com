import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonJsonLd from "@/components/PersonJsonLd";
import Home from "@/features/home/Home";
import About from "@/features/about/About";
import Projects from "@/features/projects/Projects";
import Skills from "@/features/skills/Skills";
import Experience from "@/features/experience/Experience";
import Contact from "@/features/contact/Contact";

export default function MainPage() {
  return (
    <>
      <PersonJsonLd />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
