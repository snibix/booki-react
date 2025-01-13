// import React from 'react'

import {
  faFire,
  faHeart,
  faMoneyBill1Wave,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import PropTypes from 'prop-types'
function Filtres() {
  return (
    <div className="filtres">
      <h2 className="h2-filtres">Filtres</h2>
      <div className="btn-filtres">
        <button className="filtre-btn">
          <FontAwesomeIcon
            icon={faMoneyBill1Wave}
            className="i-filtres fa-solid"
          />
          économique
        </button>
        <button className="filtre-btn">
          <FontAwesomeIcon icon={faPerson} className="i-filtres fa-solid" />
          familial
        </button>
        <button className="filtre-btn">
          <FontAwesomeIcon icon={faHeart} className="i-filtres fa-solid" />
          romantique
        </button>
        <button className="filtre-btn">
          <FontAwesomeIcon icon={faFire} className="i-filtres fa-solid" />
          nos pépites
        </button>
      </div>
    </div>
  );
}

// Filtres.propTypes = {}

export default Filtres;
