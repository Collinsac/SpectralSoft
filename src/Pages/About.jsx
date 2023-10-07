import React from "react";
import img from "../image/back3.png";
import Service from "../Components/service";

const About = () => {
  return (
    <>
      <div className="project" data-aos="zoom-in" data-aos-duration="1000">
        <h5>About</h5>
        <h2>Who We Are</h2>
        <p>
          SpektralSoft employs the world’s best designer to elevate your
          business website to the next level.s
        </p>
      </div>

      <div className="about">
        <div>
          <p className="aboutp">SOMETHING ABOUT US</p>
          <br /><br />
          <p data-aos="zoom-in" data-aos-duration="2000">
            SpektralSoft, a Cameroonian company in Douala, specializes in IT
            solutions design and implementation. As your trusted partners, we
            turn your ideas into reality with passion and excellence. Our team
            of skilled coders delivers innovative software solutions that bring
            your visions to life. From custom software to cutting-edge
            applications, we exceed expectations. Count on SpektralSoft for
            advanced technology solutions that deliver exceptional results.
          </p>
          <br />
          
          
          <p data-aos="zoom-in" data-aos-duration="2000">
            Driven by trust and reliability, our journey is dedicated to your
            project's success. We embrace each challenge with unwavering
            commitment, exceeding expectations with exceptional results. Our
            team of skilled developers and creative minds crafts goal-oriented
            solutions, propelling your success and aligning with your
            objectives.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img src={img} alt="" />
        </div>
      </div>
      <Service />
    </>
  );
};

export default About;
