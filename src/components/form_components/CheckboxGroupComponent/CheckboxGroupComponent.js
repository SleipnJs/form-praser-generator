import {FormControlLabel, Checkbox} from "@material-ui/core";
import './checkbox-group-component.css'

import {useState} from "react";

const CheckboxGroupComponent = (props) => {

  const componentProps = props.component.settings != null ? props.component.settings :{
    "json_name": null,
    "title": null,
    "description": null,
    "label": null,
    "required": false,
    "hasOptionOther": false,
    "options": [],
  }

  return (
    <div className={'checkbox-group'}>
      <div className={'checkbox-group--component'}>
        <h2>{componentProps.title}</h2>
        <p>{componentProps.description}</p>
        <span><small><b>{componentProps.label}</b></small></span>
          {componentProps.options.map((option, index) =>
            <div key={index}>
              <FormControlLabel value={option} control={<Checkbox name={componentProps.json_name}/>} label={option}/>
            </div>
          )}
      </div>
    </div>
  )
}

export default CheckboxGroupComponent
