import React from 'react';

import './Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="subheading">I ty możesz stworzyć swoją ankietę</h2>
      <p className="desc">Stwórz konto i dołącz do naszego grona użytkowników</p>
      <button className="aside__btn aside__btn--red">Utwórz konto</button>
    </aside>
  );
};

export default Aside;
