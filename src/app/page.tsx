import Hero from "@components/Hero";
import About from "@components/About";
import Services from "@components/Services";
import Works from "@components/Works";
import Connect from "@components/Connect";
import Skills from "@components/Skills";
import Timeline from "@components/Timeline";

export default async function Home() {
  return (
    <div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <Services />
      <div id="product">
        <Works />
      </div>
      <div id="contact">
        <Connect />
      </div>
      <Skills />
      <Timeline /> 
    </div>
  );
}
