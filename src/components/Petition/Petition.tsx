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
            <h3 className="petition__heading">Petycja o wydłużenie długiej przerwy w Szkole Podstawowej nr 9 w Tarnowie</h3>
            <p className="petition__desc">
              Uczniowie klasy 3a proszą o wydłużenie 15 minutowej przerwy. Pomóż im podpisując petycję{' '}
            </p>
            <a className="petition__more" href="#">
              Podpisz <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="petition__item">
          <p className="petition__number">03</p>
          <div>
            <h3 className="petition__heading">Petycja o sfinansowanie Centrum Aktywnego Seniora w Ciemieszkowie</h3>
            <p className="petition__desc">
              Mieszkańcy Ciemieszkowa proszą o pomoc w zbieraniu podpisów na sfinansowanie Centrum Aktywnego Seniora z budżetu gminynpm run bui.{' '}
            </p>
            <a className="petition__more" href="#">
              Podpisz <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Petition
