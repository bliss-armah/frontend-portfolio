import Link from "next/link";
import project1 from "../assets/images/project-1.jpeg";

const Connect = () => {
  return (
    <div>
      <section className="connect">
        <video
          muted
          autoPlay
          loop
          controls
          className="video-container"
          poster={project1.src}
        >
          <source src="/videos/connect.mp4" type="video/mp4" />
          Sorry, your browser does not support embedded videos.
        </video>

        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <p className="video-text">
            Here, we can connect and explore exciting opportunities for
            collaboration. Whether you have inquiries, job requests, or simply
            want to say hello, I'm thrilled to hear from you. You can reach out
            to me through the contact form provided or utilize the available
            contact information. Let's discuss your project requirements, share
            ideas, and together, we can bring your vision to life. I'm eagerly
            waiting to get in touch and embark on a fruitful journey of creating
            something exceptional together.
          </p>
          <Link href="/contact" className="btn">
            contact me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Connect;
