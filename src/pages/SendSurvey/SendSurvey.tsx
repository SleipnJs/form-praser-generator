import React from 'react';

import './SendSurvey.scss';

import { Link } from 'react-router-dom';

const SendSurvey = () => {
  return (
    <div className="sended-form">
      <h2 className="subheading">Dziękujemy za uzupełnienie ankiety</h2>
      <Link to={`/`} className="sended-form__btn">
        Wróć
      </Link>
    </div>
  );
};

export default SendSurvey;
