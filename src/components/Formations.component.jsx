import React from "react";
import INFO from "../data/info";
import ExperienceCard from "./ExperienceCard.component";

const Formations = () => {
    const {formations} = INFO;
    return (
        <div className="unslate_co--section" id="formations-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Mes Formations</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>

          
          <div className="row gutter-v4 align-items-stretch">

            {
              formations.map(formation => 
                <div key={formation.titre} className="col-12 col-lg-6" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="0">

                    <ExperienceCard titre={formation.titre} 
                    sousTitre={formation.sousTitre}
                    image={formation.image} date={formation.date} formation />

                </div>
              )
            }
            
          </div>

        </div>
      </div>
    );
}

export default Formations;