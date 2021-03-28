import React, { useState, useEffect } from 'react';

import './Popular.scss';

import SurveyItem from '../SurveyItem/SurveyItem';
import FormDataService from '../../services/form.service';

import arrow from '../../assets/images/arrow.svg';
import magnifier from '../../assets/images/magnifier-black.svg';

const Popular = props => {
  const [popularSurveys, updatepopularSurveys] = useState({ surveys: [], numberOfSurveys: 3 });

  useEffect(() => {
    FormDataService.getMostLiked(popularSurveys.numberOfSurveys).then(response => {
      console.log(response.data);
      updatepopularSurveys({ surveys: response.data, numberOfSurveys: popularSurveys.numberOfSurveys });
    });
  }, []);

  let popular = null;
  if (popularSurveys.surveys) {
    // @ts-ignore
    popular = popularSurveys.surveys.map(survey => {
      return (
        <SurveyItem
          key={survey['id']}
          id={survey['id']}
          img={survey['imageLink']}
          category={survey['category']}
          comments={survey['responseCounter']}
          title={survey['title']}
          description={survey['description']}
          author={survey['author']}
          date={survey['createdAt']}
        />
      );
    });
  }
  return (
    <section className="popular" id="popular">
      <h2 className="subheading">Najpopularniejsze tematy</h2>
      <div className="popular__container">{popular}</div>
      <div className="popular__search">
        <input placeholder="Wyszukaj..." />
        <img src={magnifier} alt="magnifier" />
      </div>
      <p className="popular__more" onClick={moreSurveys}>
        Więcej <img src={arrow} alt="arrow" />
      </p>
    </section>
  );
};

export default Popular;
