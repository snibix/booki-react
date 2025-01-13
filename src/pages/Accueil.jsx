// import React from 'react'
// import PropTypes from 'prop-types'

import Activites from "../components/Activites";
import Hebergements from "../components/Hebergements";
import Populaires from "../components/Populaires";
import TrouverHeberg from "../components/TrouverHeberg";

function Accueil() {
  return (
    <main className="l-main">
      <TrouverHeberg />
      <div className="hebergements-and-populaires">
        <Hebergements />
        <Populaires />
      </div>
      <Activites />
    </main>
  );
}

Accueil.propTypes = {};

export default Accueil;
