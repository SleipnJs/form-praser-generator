import React, { useState, useEffect } from 'react';

import './Survey.scss';

import axios from 'axios';

import FormBuilder from '../../components/FormClient/FormBuilder';

const Survey = props => {
  const [surveyData, updateData] = useState({
    formContent: undefined,
  });

  console.log(props.match.params.id);

  useEffect(() => {
    axios.get('http://192.168.0.100:8080/data/forms?id=1&stage=1').then(response => {
      let data = response.data;
      data.formContent = JSON.parse(data.formContent);
      updateData(data);
    });
  }, []);

  if (surveyData.formContent !== undefined) {
    return (
      <div>
        <FormBuilder formContent={surveyData?.formContent} />
      </div>
    );
  } else return <p>CO</p>;
};

export default Survey;
