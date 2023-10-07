import React from "react";
const Skillindiv = (props) => {
  return (
    <div className="skill">
      <img src={props.image} alt="" />
      <div>
        <p>{props.text}</p>
        <div className="progress">
          <div
            className="len"
            style={{ width: props.level }}
            data-aos="zoom-in-right"
            data-aos-delay="5000"
            data-aos-duration="1500"
          >
            <div className="level">{props.level}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillindiv;
