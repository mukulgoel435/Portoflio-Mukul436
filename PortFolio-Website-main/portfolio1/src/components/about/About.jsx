import React from "react";
import "./About.css";
import aboutImage from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbStack3 } from "react-icons/tb";
import "animate.css";
// import AOS from 'aos';
import AOS from "aos";
const About = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="fade-left">
          <div className="about__me-image" data-aos="fade-right" data-aos-delay="200">
            <img src={aboutImage} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <TbStack3 className="about__icon" />
              <h5>Tech Stack</h5>
              <small>7+ Technologies</small>
            </article>
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p data-aos="fade-down">
          👋 Hello! I'm Mukul Goel, a passionate B.Tech CSE student with a flair for Mern-Stack development. 💻 <br />
🎓 Completed my Bachelor's in Computer Science & Engineering, I thrive on combining theoretical knowledge with hands-on coding to build innovative solutions. <br />
💼 As a full-stack developer, I excel in both front-end and back-end technologies, leveraging my skills in HTML/CSS, JavaScript, React, Node.js, and SQl/Mongodb to create dynamic and responsive web applications. <br />
🚀 My goal is to continuously grow as a tech professional, exploring new technologies and frameworks to deliver robust and user-friendly software solutions. <br />
🌟 Let's connect and explore opportunities to collaborate on exciting projects or discuss tech trends and ideas! <br />
          </p>

          <a href="#contact" className="btn btn-primary" data-aos="fade-down">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
