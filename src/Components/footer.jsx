import React from "react";
import Logo from "../image/logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col">
            <img src={Logo} alt="logo" className="logo" />

            <p>
              Extremely clean in each code line, intensely awesome in every
              homepage, super easy to use, highly flexible with a lot of
              responsive features. Spektralsoft has it all to do all!
            </p>
          </div>

          <div className="col">
            <h3>
              Contact us
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>
              <i className="fa-solid fa-phone"> </i> 237 673263533
            </p>
            <p>
              <i className="fa-solid fa-envelope"> </i>contact@Spektralsoft.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"> </i>Douala ange raphaelle
            </p>
          </div>

          <div className="col">
            <h3>
              Projects{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>
              We invite you to browse our extensive collection of projects by
              accessing the link provided.
            </p>
          </div>

          <div className="col">
            <h3>
              Contact US{" "}
              <div className="underline">
                <span></span>
              </div>{" "}
            </h3>
            <form action="">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="contact@Spektralsoft.com"
              />
              <button>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>

            <div className="social-icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyrigth">
          Spektralsoft Theme by Theme Move. All Right Reserved 2024.
        </p>
      </footer>
    </>
  );
};

export default Footer;
