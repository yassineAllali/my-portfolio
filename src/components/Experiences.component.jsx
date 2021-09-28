import React from "react";
import INFO from "../data/info";
import ExperienceCard from "./ExperienceCard.component";

const Experiences = () => {
    const {experiences} = INFO;
    return (
        <div className="unslate_co--section" id="experiences-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Mes Expériences Professionnelles</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>

          
          <div className="row gutter-v4 align-items-stretch">

            {experiences.map(experience => 

                <div key={experience.titre} className="col-12 col-lg-6" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0">

                  <ExperienceCard titre={experience.titre} sousTitre={experience.sousTitre} image={experience.image} date={experience.date} skills={experience.skills} contenue={experience.contenue}/>

                </div>

            )}
            

          </div>

        </div>
      </div>
    );
}

export default Experiences;