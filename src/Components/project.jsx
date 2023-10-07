import React from "react";
import data from "../data";

const Project = () => {
  const project = data.project.map((obj) => {
    return (
      <div key={obj.id}>
        <img
          src={obj.image}
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  });
  return (
    <>
      <div className="project"data-aos="zoom-in" data-aos-duration="1000">
        <h5 >PROJECTS</h5>
        <h2 >Work with Passion</h2>
        <p >
          We work with passion and that’s the reason to release incredible arts.
          We love to work hard, create things and always aim to please every
          customers, even the hardest ones
        </p>
      </div>
      <div className="proGrid" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">{project}</div>
      <div className="moreProj">
        <h4>MORE PROJECTS</h4>
      </div>
    </>
  );
};

export default Project;
