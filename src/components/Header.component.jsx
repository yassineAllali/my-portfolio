import React from "react";


const Header = () => {
    
    return (
        <nav className="unslate_co--site-nav site-nav-target">

            <div className="container">
            
                <div className="row align-items-center justify-content-between text-left">
                    <div className="col-md-5 text-right">
                    <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                        <li className="has-children">
                        <a href="#home-section" className="nav-link">Accueil</a>
                        </li>
                        <li><a href="#about-section" className="nav-link">A Propos</a></li>
                        <li><a href="#experiences-section" className="nav-link">Experiences</a></li>
                        
                        <li><a href="#formations-section" className="nav-link">Formations</a></li>
                        <li><a href="#projets-section" className="nav-link">Projets</a></li>
                    </ul>
                    </div>
                    <div className="site-logo pos-absolute">
                    <a className="unslate_co--site-logo">Portfolio<span>.</span></a>
                    </div>
                    <div className="col-md-5 text-right text-lg-left">
                    <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                        <li><a href="#events-section" className="nav-link">Evénements</a></li>
                        <li><a href="#skills-section" className="nav-link">Compétences</a></li>
                        <li><a href="#soft-skills-section" className="nav-link">Soft Skills</a></li>
                        <li><a href="#langues-section" className="nav-link">Langues</a></li>
                        <li><a href="#contact-section" className="nav-link">Contact</a></li>
                    </ul>

                    <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                        <li><a href="#" className="js-menu-toggle">Menu</a></li>
                    </ul>

                    </div>
                </div>
            </div>

      </nav>    
    );
}

export default Header;