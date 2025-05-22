import { socialIcons } from "../utils/data";
import profile from "../assets/images/IMG_2368.jpg";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import Image from "next/image";
import { fetchHeroData } from "../_actions/fetchHeroData";

const Hero =async () => {
  const data = await fetchHeroData();
  const heroData=data[0]
  console.log(heroData)
  return (
    <div>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>{heroData?.title}</h1>
            <h4>{heroData?.description}</h4>
            <Link href="contact">
              <ButtonComponent name="hire me" styleAdd="hero-btn" />
            </Link>
            <ul className="social-icons hero-icons">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.href} target="_blank" className="social-icon">
                    {icon.icon}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article className="hero-img">
            <Image src={profile} width={400} height={400} className="hero-photo" alt="my-logo" />
          </article>
        </div>
      </header>
    </div>
  );
};

export default Hero;
