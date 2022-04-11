import React from "react";


const CertificatCard = ({titre, organism, date, image, col=6}) => {
    return (
        <div className={`col-sm-6 col-md-6 col-lg-${col} blog-post-entry`} data-aos="fade-up" data-aos-delay="0">

            <a className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                    <div className="portfolio-item-content">
                    <h3>{titre}</h3>
                    <p className="post-meta">{organism} <span className="small"> - </span> {date}</p>
                    </div>
                </div>
                <img src={`images/${image}`} className="lazyload" alt="Image" />
            </a>
        </div>
    );
}

export default CertificatCard;