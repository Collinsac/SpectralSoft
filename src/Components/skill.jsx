import React from "react";
import Side from "../image/back3.png";
import Skillindiv from "./skillindiv";
import Data from "../data";
const Skill = () => {
  const OurSkill = Data.SkillData.map((obj) => {
    return <Skillindiv key={obj.id} {...obj} />;
  });
  return (
    <div className="skillSec">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          src={Side}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <div className="skillCan">
          <h2>
            <span>What We Can Do</span>
          </h2>
          <p>
            Work is our favorite four letter word. It’s also what defines us as
            a user-centered <br /> design company.
          </p>

          {OurSkill}
        </div>
      </div>
    </div>
  );
};

export default Skill;
