// import React from 'react'
// import PropTypes from 'prop-types'

import {
  faInfo,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filtres from "./Filtres";

function TrouverHeberg() {
  return (
    <section className="trouver-heberg">
      <div>
        <h1 className="h2-heberg">
          Trouver votre hébergement pour des vacances de rêve
        </h1>
        <p className="p-heberg">En plein centre-ville ou en pleine nature</p>
      </div>
      <div className="recherche">
        <FontAwesomeIcon icon={faLocationDot} className="maps" />
        <input type="search" className="search" value="Marseille, France" />
        <button className="btn-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="loupe" />
          <span>Rechercher</span>
        </button>
      </div>
      <Filtres />
      <div className="info-logement">
        <div className="circle-infos">
          <FontAwesomeIcon icon={faInfo} className="fa-solid" />
        </div>
        <p className="p-infos-logement">
          Plus de 500 logements sont disponibles dans cette ville
        </p>
      </div>
    </section>
  );
}

TrouverHeberg.propTypes = {};

export default TrouverHeberg;
