import React from "react";
import INFO from "../data/info";
import ExperienceCard from "./ExperienceCard.component";

const Projets = () => {
    const {projets} = INFO;
    return (
        <div className="unslate_co--section" id="projets-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Mes Projets Académiques et Personnels</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>

          
          <div className="row gutter-v4 align-items-stretch">

           {
             projets.map(projet => 
              <div key={projet.titre} className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="0">

                <ExperienceCard titre={projet.titre}
                        sousTitre={projet.sousTitre} image={projet.image} 
                        date={projet.date} 
                        skills={projet.skills}
                        contenue={projet.contenue}
                        />

              </div>
             )
           }

          </div>

        </div>
      </div>
    );
}

export default Projets;