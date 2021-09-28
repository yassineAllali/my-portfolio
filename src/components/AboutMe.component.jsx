import React from "react";
import INFO from "../data/info";


const AboutMe = () => {
    const {profil} = INFO;
    return (
        <div className="unslate_co--section" id="about-section">
        <div className="container">
          
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">A Propos de Moi</span></h2>
            <span className="gsap-reveal">
            <img src="images/divider.png" alt="divider" width="76"/>
            </span>
          </div>
          

          <div className="row mt-5 justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <figure className="dotted-bg gsap-reveal-img ">
                <img src="images/yassine.jpg" alt="Image" className="img-fluid"/>
              </figure>
            </div>
            <div className="col" style={{backgroundColor:"rgba(0,0,0,0.85)"}}>
                {profil.map(paragraph => <p key={paragraph} className="lead gsap-reveal"> {paragraph} </p> )}
              <p className="gsap-reveal"><a className="btn btn-outline-pill btn-custom-light" href="ressources/cv_el_allali.pdf" download="cv_yassine_el_allali">Télécharger mon CV</a></p>
            </div>
          </div>
        </div>
      </div>
    );

}

export default AboutMe;