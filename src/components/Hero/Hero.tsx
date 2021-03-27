import React from 'react';

import surveyImg from '../../assets/images/survey.svg';

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
          <button className="hero__btn hero__btn--red">Utwórz ankiete</button>
          <button className="hero__btn hero__btn--black">Zobacz popularne</button>
        </div>
      </div>
      <img src={surveyImg}></img>
    </div>
  );
};

export default Hero;
