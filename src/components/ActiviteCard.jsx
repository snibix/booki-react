// import React from 'react'
import PropTypes from "prop-types";

function ActiviteCard({ img, title }) {
  return (
    <a href="#" className="a-activites">
      <article className="activites-card">
        <img className="img-activites" src={img} alt={title} />
        <div className="card-content">
          <h3 className="card-title-article">{title}</h3>
        </div>
      </article>
    </a>
  );
}

ActiviteCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default ActiviteCard;
