import {FormControlLabel, Checkbox} from "@material-ui/core";
import './checkbox-group-component.css'

import {useState} from "react";

const CheckboxGroupComponent = (props) => {

  const componentProps = props.component.settings != null
    ? props.component.settings
    : {
      json_name: null,
      title: null,
      description: null,
      label: null,
      required: false,
      hasOptionOther: false,
      options: [],
    };

  const handleChange = (e) => {
    let value = e.target.value;
    props.onDataChanged(props.component.key, value.replace(/\s/g, '_'));
  }

  return (
    <div className={'checkbox-group'}>
      <div className={'checkbox-group--component'}>
        <span><small><b>{componentProps.label}</b></small></span>
          {componentProps.options != null
            ?  componentProps.options.map((option, index) =>
            <div key={index}>
              <FormControlLabel value={option.label} control={<Checkbox name={componentProps.json_name}/>} label={option.label}/>
            </div>
          ):  'Wybierz pola'}
      </div>
    </div>
  )
}

export default CheckboxGroupComponent
