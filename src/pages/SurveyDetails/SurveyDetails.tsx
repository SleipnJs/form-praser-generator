import React, { useState, useEffect } from 'react';

import './SurveyDetails.scss';

import FormResponseDataService from '../../services/formResponse.service'
import SurveyContent from "./SurveyContent";
import FormDataService from "../../services/form.service";

const SurveyDetails = props => {

  const formId = props.match.params.id;
  const [data, setData] = useState(null)
  const [layout, setLayout] = useState([])
  const [formContent, setFormContent] = useState(null);

  useEffect(() => {
      FormDataService.getForm(formId, 1).then(response => {
          let data = response.data;
          data.formContent = JSON.parse(data.formContent);
          setFormContent(data);
      });

  }, []);

  useEffect(() => {
      let colors = ['#9E2B2B', '#EB5757', '#FF7878','#1B9E40', '#57EB81', '#D4EB81'];
    FormResponseDataService.get(formId).then((response) => {
        let result = {};
        let keys = Object.keys(response.data);
        keys.forEach((item) => {
            let insideKeys = Object.keys(response.data[item])
            let insideResult = [];
            insideKeys.forEach((insideItem, index) => {
                insideResult.push({
                    // @ts-ignore
                    "angle": response.data[item][insideItem],
                    // @ts-ignore
                    "label": insideItem,
                    // @ts-ignore
                    "color": colors[index],
                });
            })
            // @ts-ignore
            result[item] = insideResult
        })
        console.log(result)
        // @ts-ignore
        setData(result)
    })
  },[])

    if(formContent !== null && data !== null) {
        return (
            <div>
                <SurveyContent
                    responses={data}
                    formContent={
                        // @ts-ignore
                        formContent.formContent}
                />
            </div>
        )
    } else {
        return <p>Loading page</p>
    }
}

export default SurveyDetails;
