import React, { useState, useEffect } from 'react';

import './Popular.scss';

import SurveyItem from '../SurveyItem/SurveyItem';
import FormDataService from '../../services/form.service';

const Popular = props => {
  const [popularSurveys, updatepopularSurveys] = useState([]);

  useEffect(() => {
    FormDataService.getMostLiked(3).then(response => {
      console.log(response.data);
      updatepopularSurveys(response.data);
    });
  }, []);

  let popular = null;
  if (popularSurveys) {
    popular = popularSurveys.map(survey => {
      return (
        <SurveyItem
          key={survey.id}
          img={survey.imageLink}
          category={survey.category}
          comments={survey.responseCounter}
          title={survey.title}
          description={survey.description}
        />
      );
    });
  }
  return (
    <section className="popular" id="popular">
      <h2 className="subheading">Najpopularniejsze tematy</h2>
      <div className="popular__container">{popular}</div>
    </section>
  );
};

export default Popular;
