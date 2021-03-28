import React from 'react';

import './Petition.scss';

import arrow from '../../assets/images/arrow.svg';

const Petition = () => {
  return (
    <section className="petition">
      <h2 className="subheading">Petycje obywatelskie</h2>
      <div className="petition__container">
        <div className="petition__item">
          <p className="petition__number">01</p>
          <div>
            <h3 className="petition__heading">Protest przeciwko zbieraniu i składowaniu odpadów w Mieszewku</h3>
            <p className="petition__desc">
              Podpisz petycję przeciwko zbieraniu i składowaniu odpadów w Mieszewku.{' '}
            </p>
            <a className="petition__more" href="#">
              Podpisz <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="petition__item">
          <p className="petition__number">02</p>
          <div>
            <h3 className="petition__heading">Protest przeciwko zbieraniu i składowaniu odpadów w Mieszewku</h3>
            <p className="petition__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien, eget ornare elementum ut nullam quis iaculis cursus.
              Iaculis orci vel eget risus tortor. Fermentum suscipit egestas vestibulum, sem elit pellentesque ipsum bibendum porttitor.{' '}
            </p>
            <a className="petition__more" href="#">
              Podpisz <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="petition__item">
          <p className="petition__number">03</p>
          <div>
            <h3 className="petition__heading">Protest przeciwko zbieraniu i składowaniu odpadów w Mieszewku</h3>
            <p className="petition__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien, eget ornare elementum ut nullam quis iaculis cursus.
              Iaculis orci vel eget risus tortor. Fermentum suscipit egestas vestibulum, sem elit pellentesque ipsum bibendum porttitor.{' '}
            </p>
            <a className="petition__more" href="#">
              Podpisz <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Petition;
