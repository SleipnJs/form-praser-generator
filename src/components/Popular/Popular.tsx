import React from 'react';
import { Link } from 'react-router-dom';

import './Popular.scss';

import banner from '../../assets/images/heading_1.png';
import commentsImg from '../../assets/images/comments.svg';

const Popular = props => {
  return (
    <section className="popular" id="popular">
      <h2 className="subheading">Najpopularniejsze tematy</h2>
      <div className="popular__container">
        <div className="popular__item">
          <img src={banner} alt="banner" className="popular__banner" />
          <div className="popular__comments">
            <img src={commentsImg} alt="comment icon" className="" />
            <p>1 231</p>
          </div>
          <p className="popular__category">{props?.posts?.form?.category}</p>
          <h4 className="popular__heading">{props?.posts?.form?.title}</h4>
          <p className="popular__desc">{props?.posts?.form?.description}</p>
          <div className="popular__buttons">
            <Link to={`/survey/${props?.posts?.id}`} className="popular__btn popular__btn--red">
              Wypełnij ankiete
            </Link>
            <button className="popular__btn popular__btn--black">Zobacz ankiete</button>
          </div>
        </div>

        <div className="popular__item">
          <img src={banner} alt="banner" />
          <p className="popular__category">Covid</p>
          <h4 className="popular__heading">Rekordowe zakażenia w polsce</h4>
          <p className="popular__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, nisi faucibus lectus ipsum. Amet augue amet turpis vel libero nulla.
            Cras nunc, arcu mi scelerisque dolor.
          </p>
          <div className="popular__buttons">
            <button className="popular__btn popular__btn--red">Wypełnij ankiete</button>
            <button className="popular__btn popular__btn--black">Zobacz ankiete</button>
          </div>
        </div>
        <div className="popular__item">
          <img src={banner} alt="banner" />
          <p className="popular__category">Covid</p>
          <h4 className="popular__heading">Rekordowe zakażenia w polsce</h4>
          <p className="popular__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, nisi faucibus lectus ipsum. Amet augue amet turpis vel libero nulla.
            Cras nunc, arcu mi scelerisque dolor.
          </p>
          <div className="popular__buttons">
            <button className="popular__btn popular__btn--red">Wypełnij ankiete</button>
            <button className="popular__btn popular__btn--black">Zobacz ankiete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
