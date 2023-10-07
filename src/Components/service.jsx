import React from "react";
import phone from "../icons/phone.png";
import computer from "../icons/computer.png";
import rocket from "../icons/rocket.png";
import seo from "../icons/seo.png";

const Service = () => {
  return (
    <div className="Service">
      <h2 data-aos="zoom-in" data-aos-duration="2000">
        <span>Our Powerful Services</span>
      </h2>
      <p className="p1" data-aos="zoom-in" data-aos-duration="2000">
        With a range of premium features, SpektralSoft brings you the chance to
        have a powerful website that beats all the competitors & get more
        clients online. As usual, premium support is included, take your right
        today!
      </p>

      <div className="gridCan" data-aos="zoom-in" data-aos-duration="2000">
        {/*  */}
        <div>
          <div className="cardHead">
            <img src={computer} alt="" />
            <p>FULLY RESPONSIVE WEBSITE</p>
          </div>
          <p className="p2">
            SpektralSoft crafts design that adapts to any device visitors use in
            optimal viewing and interaction experience, easy navigation in
            minimum of resizing.
          </p>
        </div>

        {/*  */}

        <div>
          <div className="cardHead">
            <img src={seo} alt="" />
            <p>SEO OPTIMIZED</p>
          </div>
          <p className="p2">
            Our code is built with the best SEO Practice in every detail so
            Google truly loves SpektralSoft and give you a top seat, become our
            happy customers team now
          </p>
        </div>
        {/*  */}

        <div>
          <div className="cardHead">
            <img src={phone} alt="" />
            <p>RETINA READY</p>
          </div>
          <p className="p2">
            SpektralSoft stunning design looks most awesome in details anytime
            your visitors browsing with sharper image, better aesthetics for
            responsive design .
          </p>
        </div>
        {/*  */}
        <div>
          <div className="cardHead">
            <img src={rocket} alt="" />
            <p>OPTIMIZED FOR SPEED</p>
          </div>
          <p className="p2">
            SpektralSoft is fully optimized for speed. We focus on details,
            carefully write code and keep eyes on each element to creat a
            fastest website ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
