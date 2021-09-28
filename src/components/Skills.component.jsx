import React from "react";
import INFO from "../data/info";
import Skill from "./Skill.component";

const Skills = () => {
    const skills = INFO["skills"];
    return (
        <div className="unslate_co--section section-counter" id="skills-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Mes Compétences</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>


          <div className="row pt-5">

            {
                skills.map(skill => (<div key={skill.name} className="col-6 col-sm-6 mb-5 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                                        <Skill name={skill.name} points={skill.points}/>
                                    </div>))
            }
            
          </div>
        </div>
      </div>
    );
}

export default Skills;