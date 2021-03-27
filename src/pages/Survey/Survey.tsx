import React, { useState, useEffect } from 'react';

import './Survey.scss';

import axios from 'axios';

import FormBuilder from '../../components/FormClient/FormBuilder';

const Survey = props => {
  const [surveyData, updateData] = useState(null);
  console.log('Survey is build');
  console.log(props.match.params.id);

  useEffect(() => {
    axios.get('http://192.168.0.100:8080/data/forms?id=1&stage=1').then(response => {
      updateData(response.data);
    });
  }, []);

  const test = () => {
    console.log(surveyData);
    //   const { formContent } = surveyData;
    //   // console.log(surveyData.formContent);
    //   console.log({ formContent });
  };

  if (surveyData) {
    console.log('IF statement');

    return (
      <div>
        <button onClick={test}>test</button>
        {/* @ts-ignore */}
        <FormBuilder formContent={surveyData?.formContent} />
      </div>
    );
  } else return <p>CO</p>;
};

export default Survey;
