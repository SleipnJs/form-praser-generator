import React from 'react';

import surveyImg from '../../assets/images/survey.svg';
import { Link } from 'react-router-dom';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__heading">Już dziś sprawdź otaczającą Cię teraźniejszość </h1>
        <h3 className="hero__subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia pulvinar porttitor vitae sed. Magna rutrum enim ipsum massa.
        </h3>
        <div className="hero__buttons">
          <Link to="/createForm" className="hero__btn hero__btn--red">
            Utwórz ankiete
          </Link>
          <a href="#popular" className="hero__btn hero__btn--black">
            Zobacz popularne
          </a>
        </div>
      </div>
      <img src={surveyImg}></img>
    </div>
  );
};

export default Hero;
