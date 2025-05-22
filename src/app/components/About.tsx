import Link from "next/link";
import about from "../assets/images/aboutme.jpg";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <Image src={about} className="hero-photo" alt="about img" />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            <p>
              Hello, I am Bliss Armah and I am a web developer. I live and work
              in somewhere warm. I spend most of my day, experimenting with
              HTML, CSS and JavaScript (and its endless list of frameworks). I
              enjoy coding and the challenge of learning something new everyday.
            </p>
            <Link href="/about">
              <ButtonComponent name="about me" />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
