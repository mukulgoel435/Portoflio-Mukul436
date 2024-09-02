import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpeg";
import "animate.css";
import AOS from "aos";

const Portfolio = () => {
  AOS.init();
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>JSR FORM</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/0xCipher-max/JSR-Forms"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://jsr-forms.vercel.app/auth"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Personal PortFolio Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/PortFolio-Website/tree/main/portfolio1"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://jatin-bisht-portfolio.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Snapstream</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/SnapStream"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Codeshare - Realtime Code Editor</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/CodeShare"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
           
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>University Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/MGuniversity"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://mguniversity.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>smemorygame</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mukulgoel435/Simon-memory"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://smemorygame.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
