import React from 'react';

import './Header.scss';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo}></img>
        <p>Ankieta obywatelska</p>
      </div>
      <nav>
        <ul className="header__list">
          <li>
            <a className="header__link header__link--active">strona główna</a>
          </li>
          <li>
            <a href="#why-us" className="header__link">
              dlaczego my
            </a>
          </li>
          <li>
            <a className="header__link">stwórz ankiete</a>
          </li>
          <li>
            <a className="header__link">zaloguj się</a>
          </li>
          <li>
            <a className="header__link header__link--red">utwórz konto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
