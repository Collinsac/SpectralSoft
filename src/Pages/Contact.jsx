import React from "react";

const Contact = () => {
  return (
    <>
      <div className="project" data-aos="zoom-in" data-aos-duration="1000">
        <h2>Keep in Touch</h2>
        <p>
          What still bothers you for not getting in touch with us No need to
          wait anymore, contact us now
        </p>
        <br />
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </div>
      </div>

      <div className="form">
        <div className="name">
          <input type="text" name="" id="" placeholder="Name *" />
          <input type="text" name="" id="" placeholder="Email *" />
        </div>
        <input type="text" name="" id="" placeholder="Subject *" />
        <textarea placeholder="Message *" name="" id="" cols="30" rows="10"></textarea>

        <button>Submit</button>
      </div>
    </>
  );
};

export default Contact;
