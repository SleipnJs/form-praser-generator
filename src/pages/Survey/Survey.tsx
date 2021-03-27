import React, { useState, useEffect } from 'react';

import './Survey.scss';

import axios from 'axios';

import FormBuilder from '../../components/FormClient/FormBuilder';
import FormResponseDataService from '../../services/formResponse.service'
import FormDataService from '../../services/form.service'

const Survey = props => {
  const [surveyData, updateData] = useState({
    formContent: undefined,
  });

  const formId = props.match.params.id;

  useEffect(() => {
    FormDataService.getForm(1,1).then(response => {
      let data = response.data;
      data.formContent = JSON.parse(data.formContent);
      updateData(data);
    });
  }, []);

  const onSave = (data:any) => {
    console.log(data)
    FormResponseDataService.send(formId, data).then(r => alert())
  }

  if (surveyData.formContent !== undefined) {
    return (
      <div>
        {/* @ts-ignore */}
        <FormBuilder
            onSave={onSave}
            formContent={surveyData.formContent}
        />
      </div>
    );
  } else {
    return <p>CO</p>;
  }
};

export default Survey;
