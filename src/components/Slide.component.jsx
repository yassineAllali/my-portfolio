import React from "react";
import INFO from "../data/info";
import ProfileCard from "./ProfileCard.component";
import SocialeMediaIcons from "./SocialeMediaIcons.component";


const Slide = () => {
    const name = INFO["name"];
    const position = INFO["position"];

    return (
        <div className="cover-v1 jarallax" /*style={{backgroundImage: "url('images/cover_bg_2.jpg')"}} */ id="home-section">
        <div className="container">
          <div className="row align-items-center">
              
            <div className="col mx-auto text-center">
              <h1 className="heading gsap-reveal-hero">{name}</h1>
              <h2 className="subheading gsap-reveal-hero">{position}</h2>
              <div className="mt-3">
                <SocialeMediaIcons/>
              </div>
              
            </div>

            {/*<div className="col-md-4">
              <ProfileCard/>
            </div>*/}

          </div>
        </div>


        <a href="#about-section" className="mouse-wrap smoothscroll">
          <span className="mouse">
            <span className="scroll"></span>
          </span>
          <span className="mouse-label">Scroll</span>
        </a>

      </div>
    );
}

export default Slide;