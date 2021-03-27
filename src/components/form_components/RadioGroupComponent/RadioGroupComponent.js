import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import './radio-group-component.css'

import {useState} from "react";

const RadioGroupComponent = (props) => {
  const [componentProps, setComponentProps] = useState(props.component.settings != null ? props.component.settings :{
    "json_name": null,
    "title": null,
    "description": null,
    "label": null,
    "required": false,
    "hasOptionOther": false,
    "options": [],
  })

  return (
    <div className={'radio-group'}>
      <div className={'radio-group--component'}>
        <h2>{componentProps.title}</h2>
        <p>{componentProps.description}</p>
        <span><small><b>{componentProps.label}</b></small></span>
        <RadioGroup>
          {componentProps.options != null ? componentProps.options.map((option, index) =>
            <div key={index}>
              <FormControlLabel value={option} control={<Radio/>} label={option}/>
            </div>
          ): "Wybierz pola"}
        </RadioGroup>
      </div>
    </div>
  )
}

export default RadioGroupComponent
