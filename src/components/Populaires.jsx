// import React from 'react'
// import PropTypes from 'prop-types'

import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

function Populaires() {
  return (
    <section className="populaires">
      <div className="populaires-title">
        <h2 className="section-title">Les plus populaires</h2>
        <FontAwesomeIcon icon={faChartLine} className="i-infos" />
      </div>
      <div className="populaires-cards">
        <Card
          image="./img/hebergements/emile-guillemot.jpg"
          title="Hôtel Du port"
          subtitle=" Nuit à partir de 52"
          aClassName="a-populaires"
          artClassName="card"
          imgClassName="img-populaires"
        />
        <Card
          image="./img/hebergements/aw-creative.jpg"
          aClassName="a-populaires"
          artClassName="card"
          imgClassName="img-populaires"
          title="Hôtel Chez Amina"
          subtitle="Nuit à partir de 96"
        />
        <Card
          image="./img/hebergements/febrian-zakaria2.jpg"
          aClassName="a-populaires"
          artClassName="card"
          imgClassName="img-populaires"
          title="Hôtel Les Mouettes"
          subtitle=" Nuit à partir de 76"
        />
      </div>
    </section>
  );
}

Populaires.propTypes = {};

export default Populaires;
