import React from "react";
import './style/experience-style.css';

const ExperienceCard = ({titre, sousTitre, image, date, skills = [], contenue="", formation=false}) => {
    return (
        <div className={`blog-card ${formation ? "formation" : ""}`}>
        <div className="meta">
          <div className="photo" style={{backgroundImage: `url(/images/${image})`}}></div>
          <ul className="details">
            <li className="date">{date}</li>
            <li className="tags">
              <ul>
                {skills.map(skill => (<li key={skill}>{skill}</li>))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
            <h2>{titre}</h2>
            <h3>{sousTitre}</h3>
            <p>{contenue}</p>
        </div>
      </div>
      
    );
}

export default ExperienceCard;