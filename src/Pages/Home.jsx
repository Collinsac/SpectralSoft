import React from "react";


import Faqs from "../Components/faqs";
import Project from "../Components/project";
import Service from "../Components/service";
import Skill from "../Components/skill";

const Home = () => {
  return (
    <div>
      
      <Service />
      <Skill />
      <Project />
      <Faqs />
      
    </div>
  );
};

export default Home;
