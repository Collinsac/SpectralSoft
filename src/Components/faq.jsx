import React, { useState } from "react";

const Faq = (props) => {
  const [close, setclose] = useState(true);
  const HandleFaqs = () => {
    setclose((pre) => !pre);
  };
  const keyframes = `@keyframes fade{
        from{
            opacity: 0;
            transform: translateY(-10px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
      }`;
  const styles = {
    faq: {
      maxHeight: close ? 0 : "300px",
      animation: close ? "" : "fade 1s ease-in-out",
    },
    svg: {
      transform: close ? "rotate(0deg)" : "rotate(180deg)",
    },
  };
  return (
    <div className="faq" onClick={HandleFaqs} data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
      <style>{keyframes}</style>
      <div className="questions">
        <h3>{props.question}</h3>

        <svg width="15" height="10" viewBox="0 0 42 25" style={styles.svg}>
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="answer" style={styles.faq}>
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Faq;
