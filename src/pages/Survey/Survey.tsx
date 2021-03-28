import React, { useState, useEffect } from 'react';
import './Survey.scss';

import FormBuilder from '../../components/FormClient/FormBuilder';
import FormResponseDataService from '../../services/formResponse.service';
import FormDataService from '../../services/form.service';

import leaf from '../../assets/images/leaf.svg';
import blob from '../../assets/images/blob.svg';

const Survey = props => {
  const [surveyData, updateData] = useState({
    formContent: undefined,
  });

  const formId = props.match.params.id;

  useEffect(() => {
    FormDataService.getForm(formId, 1).then(response => {
      let data = response.data;
      data.formContent = JSON.parse(data.formContent);
      updateData(data);
    });
  }, []);

  const onSave = (data: any) => {
    window.location.replace('/sended');
    FormResponseDataService.send(formId, data).then(r => alert());
  };

  if (surveyData.formContent !== undefined) {
    console.log(surveyData);
    return (
      <div>
        <img src={blob} className="blob" />
        <img src={leaf} className="leaf" />
        {/* @ts-ignore */}
        <h1 className="survey-header">{surveyData?.form?.title}</h1>
        {/* @ts-ignore */}
        <h1 className="survey-desc">{surveyData?.form?.description}</h1>
        {/* @ts-ignore */}
        <FormBuilder onSave={onSave} formContent={surveyData.formContent} />
      </div>
    );
  } else {
    return <p>CO</p>;
  }
};

export default Survey;
