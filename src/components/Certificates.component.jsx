import React from "react";
import INFO from "../data/info";
import CertificatCard from "./CertificateCard.component";

const Certificates = () => {
    const certificates = INFO['certificates'];
    return (
        <div className="unslate_co--section" id="certificates-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Certificats</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>

          
          <div className="row gutter-v4 align-items-stretch">

            {
                certificates.map(certificat => <CertificatCard key={certificat.titre} titre={certificat.titre}
                  organism={certificat.organism} date={certificat.date}
                  image={certificat.image}
                />)
            }

          </div>

        </div>
      </div>
    );
}

export default Certificates;