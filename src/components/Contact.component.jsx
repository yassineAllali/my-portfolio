import React from "react"
import INFO from "../data/info";

const Contact = () => {
    const {email, phone,adresse, city, country, linkedin, github, gitlab} = INFO;
    return (<div className="unslate_co--section" id="contact-section">
    <div className="container">
      <div className="section-heading-wrap text-center mb-5">
        <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Contact</span></h2>
        <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
      </div>


      <div className="row justify-content-between">
        
        <div className="col row p-0">
            <div className="col-12 col-md-6 col-lg-4 pl-4 gsap-reveal d-block">
              <span className="d-block contact-info-label">Email</span>
              <span className="contact-info-val">{email}</span>
            </div>
            <div className="col-12 col-md-6 col-lg-4 pl-4 gsap-reveal d-block">
              <span className="d-block contact-info-label">Phone</span>
              <span className="contact-info-val">{phone}</span>
            </div>
            <div className="col-12 col-md-6 col-lg-4 pl-4 gsap-reveal d-block">
              <span className="d-block contact-info-label">Address</span>
              <address className="contact-info-val">{adresse}. <br/> {city}, {country}</address>
            </div>

            <div className="col-12 col-md-6 col-lg-4 pl-4 gsap-reveal d-block">
              <span className="d-block contact-info-label">Linkedin</span>
              <a href={linkedin} target="_blank" className="contact-info-val">{linkedin}</a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 pl-4 gsap-reveal d-block">
              <span className="d-block contact-info-label">Github</span>
              <a href={github} target="_blank" className="contact-info-val">{github}</a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 pl-4 gsap-reveal d-block">
              <span className="d-block contact-info-label">Gitlab</span>
              <a href={gitlab} target="_blank" className="contact-info-val">{gitlab}</a>
            </div>
        </div>

      </div>
    </div>
  </div>
  );
}

export default Contact;

