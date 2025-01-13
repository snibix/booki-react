// import React from 'react'
// import PropTypes from 'prop-types'
import ActiviteCard from "./ActiviteCard";

function Activites() {
  return (
    <section className="activites" id="ancre_activites">
      <h2>Activités à Marseille</h2>

      <div className="activites-cards">
        <ActiviteCard
          img="./img/activites/reno-laithienne.jpg"
          title="Vieux-port"
        />
        <ActiviteCard
          img="./img/activites/paul-hermann.jpg"
          title="Fort de Pomègues"
        />
        <ActiviteCard
          img="./img/activites/kilyan-sockalingum.jpg"
          title=" Parc national des Calanques"
        />
        <ActiviteCard
          img="./img/activites/florian-wehde.jpg"
          title="Notre-Dame-de-la-Garde"
        />
      </div>
    </section>
  );
}

// Activites.propTypes = {}

export default Activites;
