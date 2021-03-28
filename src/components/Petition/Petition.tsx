import React, { useState, useEffect } from 'react';

import './Petition.scss';

const Petition = () => {
  const [areToggled, updateState] = useState([]);

  useEffect(() => {
    // @ts-ignore
    const items = [false, false, false];
    // @ts-ignore
    updateState(items);
  }, []);

  const btnHandler = item => {
    // @ts-ignore
    const cpy = [...areToggled];
    // @ts-ignore
    cpy[item] = !cpy[item];
    updateState(cpy);
  };

  return (
    <section className="petition">
      <h2 className="subheading">Petycje obywatelskie</h2>
      <div className="petition__container">
        <div className="petition__item" onMouseEnter={btnHandler.bind(this, 0)} onMouseLeave={btnHandler.bind(this, 0)}>
          <p className="petition__number">01</p>
          <div>
            <h3 className="petition__heading">Protest przeciwko zbieraniu i składowaniu odpadów w Mieszewku</h3>
            <p className="petition__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien, eget ornare elementum ut nullam quis iaculis cursus.
              Iaculis orci vel eget risus tortor. Fermentum suscipit egestas vestibulum, sem elit pellentesque ipsum bibendum porttitor.{' '}
            </p>
          </div>
          {areToggled[0] ? <button className="petition__button petition__button--red">Podpisz</button> : null}
        </div>
        <div className="petition__item" onMouseEnter={btnHandler.bind(this, 1)} onMouseLeave={btnHandler.bind(this, 1)}>
          <p className="petition__number">02</p>
          <div>
            <h3 className="petition__heading">Protest przeciwko zbieraniu i składowaniu odpadów w Mieszewku</h3>
            <p className="petition__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien, eget ornare elementum ut nullam quis iaculis cursus.
              Iaculis orci vel eget risus tortor. Fermentum suscipit egestas vestibulum, sem elit pellentesque ipsum bibendum porttitor.{' '}
            </p>
          </div>
          {areToggled[1] ? <button className="petition__button petition__button--red">Podpisz</button> : null}
        </div>
        <div className="petition__item" onMouseEnter={btnHandler.bind(this, 2)} onMouseLeave={btnHandler.bind(this, 2)}>
          <p className="petition__number">03</p>
          <div>
            <h3 className="petition__heading">Protest przeciwko zbieraniu i składowaniu odpadów w Mieszewku</h3>
            <p className="petition__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien, eget ornare elementum ut nullam quis iaculis cursus.
              Iaculis orci vel eget risus tortor. Fermentum suscipit egestas vestibulum, sem elit pellentesque ipsum bibendum porttitor.{' '}
            </p>
          </div>
          {areToggled[2] ? <button className="petition__button petition__button--red">Podpisz</button> : null}
        </div>
      </div>
    </section>
  );
};

export default Petition;
