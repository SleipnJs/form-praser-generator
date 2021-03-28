import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './SurveyDetails.scss';

import FormResponseDataService from '../../services/formResponse.service';
import SurveyContent from './SurveyContent';
import FormDataService from '../../services/form.service';

import leaf from '../../assets/images/leaf.svg';
import blob from '../../assets/images/blob.svg';

const SurveyDetails = props => {
  const formId = props.match.params.id;
  const [data, setData] = useState(null);
  const [layout, setLayout] = useState([]);
  const [formContent, setFormContent] = useState(null);

  useEffect(() => {
    FormDataService.getForm(formId, 1).then(response => {
      let data = response.data;
      data.formContent = JSON.parse(data.formContent);
      setFormContent(data);
    });
  }, []);

  useEffect(() => {
    let colors = ['#9E2B2B', '#EB5757', '#FF7878', '#1B9E40', '#57EB81', '#D4EB81'];
    FormResponseDataService.get(formId).then(response => {
      let result = {};
      let keys = Object.keys(response.data);
      keys.forEach(item => {
        let insideKeys = Object.keys(response.data[item]);
        let insideResult = [];
        insideKeys.forEach((insideItem, index) => {
          insideResult.push({
            // @ts-ignore
            angle: response.data[item][insideItem],
            // @ts-ignore
            label: insideItem,
            // @ts-ignore
            color: colors[index],
          });
        });
        // @ts-ignore
        result[item] = insideResult;
      });
      console.log(result);
      // @ts-ignore
      setData(result);
    });
  }, []);

  if (formContent !== null && data !== null) {
    return (
      <div>
        <img src={blob} className="blob" />
        <img src={leaf} className="leaf" />
        {/* @ts-ignore */}
        <h1 className="survey-header">{formContent?.form?.title}</h1>
        {/* @ts-ignore */}
        <h1 className="survey-desc">{formContent?.form?.description}</h1>
        <SurveyContent
          responses={data}
          formContent={
            // @ts-ignore
            formContent.formContent
          }
        />
        <Link to={'/'} className="return-btn" onClick={() => window.scrollTo(0, 0)}>
          Wróć
        </Link>
      </div>
    );
  } else {
    return <p>Loading page</p>;
  }
};

export default SurveyDetails;
