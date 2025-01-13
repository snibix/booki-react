// import React from 'react'
// import PropTypes from 'prop-types'

import Card from "./Card";

function Hebergements() {
  return (
    <section className="hebergements" id="ancre_heberg">
      <h2 className="title-hebergements">Hébergements à Marseille</h2>
      <div className="hebergements-card">
        <Card
          aClassName="a-hebergement"
          artClassName="article-hebergements"
          imgClassName="img-hebergement"
          image="./img/hebergements/fred-kleber.jpg"
          title="Hôtel Du port"
          subtitle=" Nuit à partir de 52"
        />
        <Card
          aClassName="a-hebergement"
          artClassName="article-hebergements"
          imgClassName="img-hebergement"
          image="./img/hebergements/febrian-zakaria.jpg"
          title="Hôtel Chez Amina"
          subtitle="Nuit à partir de 96"
        />
        <Card
          aClassName="a-hebergement"
          artClassName="article-hebergements"
          imgClassName="img-hebergement"
          image="./img/hebergements/reisetopia.jpg"
          title="Hôtel Les Mouettes"
          subtitle=" Nuit à partir de 76"
        />
        <Card
          aClassName="a-hebergement"
          artClassName="article-hebergements"
          imgClassName="img-hebergement"
          image="./img/hebergements/annie-spratt.jpg"
          title="Hôtel de la mer"
          subtitle=" Nuit à partir de 46"
        />
        <Card
          aClassName="a-hebergement"
          artClassName="article-hebergements"
          imgClassName="img-hebergement"
          image="./img/hebergements/marcus-loke.jpg"
          title="Auberge La Canebière"
          subtitle=" Nuit à partir de 25"
        />
        <Card
          aClassName="a-hebergement"
          artClassName="article-hebergements"
          imgClassName="img-hebergement"
          image="./img/hebergements/nicate-lee.jpg"
          title="Auberge Le Panier"
          subtitle=" Nuit à partir de 23"
        />
      </div>
      <p className="affichez-plus">Affichez plus</p>
    </section>
  );
}

Hebergements.propTypes = {};

export default Hebergements;
