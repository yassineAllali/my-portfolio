import React from "react";
import INFO from "../data/info";
import EventCard from "./EventCard.component";

const Events = () => {
    const events = INFO['events'];
    return (
        <div className="unslate_co--section" id="events-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Evénements et Compétitions</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>

          
          <div className="row gutter-v4 align-items-stretch">

            {
                events.map(event => <EventCard key={event.titre} titre={event.titre}
                  place={event.place} date={event.date}
                  image={event.image}
                />)
            }

          </div>

        </div>
      </div>
    );
}

export default Events;