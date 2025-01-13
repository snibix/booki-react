// import React from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Card({
  image,
  title,
  subtitle,
  aClassName,
  artClassName,
  imgClassName,
}) {
  return (
    <a className={aClassName} href="#">
      <article className={artClassName}>
        <img
          src={image}
          alt="Image de la chambre d'hôtel"
          className={imgClassName}
        />
        <div className="card-content">
          <div className="card-txt">
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">
              {subtitle}
              <span className="euro">€</span>
            </p>
          </div>
          <div className="card-rating">
            <FontAwesomeIcon icon={faStar} className="fa-solid" />
            <FontAwesomeIcon icon={faStar} className="fa-solid" />
            <FontAwesomeIcon icon={faStar} className="fa-solid" />
            <FontAwesomeIcon icon={faStar} className="fa-solid" />
            <i
              className="fa-xs fa-solid fa-star neutral-star"
              aria-hidden="true"
            ></i>
            <span className="sr-only">Note de 4 sur 5</span>
          </div>
        </div>
      </article>
    </a>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  aClassName: PropTypes.string,
  artClassName: PropTypes.string,
  imgClassName: PropTypes.string,
};

export default Card;
