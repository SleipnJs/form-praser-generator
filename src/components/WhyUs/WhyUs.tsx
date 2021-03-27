import React from 'react';

import speedImg from '../../assets/images/speed.svg';
import magnifierImg from '../../assets/images/magnifier.svg';
import barsImg from '../../assets/images/bars.svg';
import phoneImg from '../../assets/images/phone.svg';

import './WhyUs.scss';

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      <h2 className="subheading">Dlaczego my</h2>
      <div className="why-us__container">
        <div className="why-us__item">
          <img src={speedImg} alt="speed" />
          <h3 className="why-us__heading">Szybko</h3>
          <p className="why-us__desc">Prosty i łatwy w obsłudze system akiet</p>
        </div>
        <div className="why-us__item">
          <img src={magnifierImg} alt="maginifer" />
          <h3 className="why-us__heading">Dokładnie</h3>
          <p className="why-us__desc">Dokładny system ankietowania</p>
        </div>
        <div className="why-us__item">
          <img src={barsImg} alt="bars" />
          <h3 className="why-us__heading">Analityka</h3>
          <p className="why-us__desc">Dokładne wykresy przeprowadzonych badań</p>
        </div>
        <div className="why-us__item">
          <img src={phoneImg} alt="phone" />
          <h3 className="why-us__heading">Łatwy dostęp</h3>
          <p className="why-us__desc">Twoje ankiety są dostępne z każdego miejsca</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
