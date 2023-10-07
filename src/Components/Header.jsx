import React from "react";
import Design from "./design";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();

  const style = {
    minHeight: pathname === "/" ? "100vh" : "70vh",
    position: "relative",
    zIndex: 1,
  };
  return (
    <div>
      <div className="header_can" style={style}>
        <Nav />
        <Design />

        <header className="App-header">
          {pathname === "/" ? (
            <>
              <p style={{margin:"30px 0 0 0"}}
                className="head_p"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="2000"
              >
                IDEAL SOLUTION <span>FOR YOU BUSINESS</span>
              </p>
              <h1
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="2000"
              >
                <span>SMART</span> SOLUTION
              </h1>
              <h4
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="2000"
              >
                SpektralSoft is extremely clean in each code line, intensly
                awesome in every homepage, super easy to use, highly <br />{" "}
                flexible with full responsive feature
              </h4>
              <Link to="/contact">
                <button
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="2000"
                >
                  Contact Us
                </button>
              </Link>
            </>
          ) : pathname === "/about" ? (
            <>
              <p style={{margin:"60px 0 0 0"}}
                className="head_p"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="2000"
              >
                HIGH QUALITY <span>CORPORATE SERVICES</span>
              </p>
              <h1
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="2000"
              >
                <span>BE</span> DIFFERENT
              </h1>
              <Link to="/contact">
                <button
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="2000"
                >
                  Contact Us
                </button>
              </Link>
            </>
          ) : (
            <>
              <p style={{margin:"60px 0 0 0"}}
                className="head_p"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="2000"
              >
                HIGH QUALITY <span>CORPORATE SERVICES</span>
              </p>
              <h1
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="2000"
              >
                <span>CONTACT</span> US
              </h1>
            </>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
