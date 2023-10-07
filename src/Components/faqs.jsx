import React from "react";
import data from "../data";
import Faq from "./faq";
const Faqs = () => {

  const faqs = data.Faqs.map((obj) => {
    return <Faq key={obj.id} {...obj} />;
  });

  return (
    <>
      <div className="project">
        <h5 data-aos="zoom-in" data-aos-duration="2000">FAQS</h5>
        <h2 data-aos="fade-right" data-aos-duration="2000">Frequently Asked Questions</h2>
        <p data-aos="zoom-in" data-aos-duration="2000">
          At SpectralSoft, our dedicated team strives to exceed client
          expectations by providing comprehensive support and actively
          addressing client inquiries. We prioritize client satisfaction and
          ensure that all questions are promptly answered, fostering a
          professional and customer-centric experience.
        </p>
      </div>

      <div className="faqsCan">{faqs}</div>
    </>
  );
};

export default Faqs;
