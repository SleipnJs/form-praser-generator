import {TextField} from "@material-ui/core";
import './text-field-component.css'

import {useEffect, useState} from "react";

const TextFieldComponent = (props) => {

  const [componentProps, setComponentProps] = useState(props.component.settings != null ? props.component.settings : {
    "title": null,
    "description": null,
    "label": null,
    "required": false,
  })

  const handleChange = (e) => {
    let value = e.target.value;
    props.onDataChanged(props.component.key, value);
  }

  let _defaultValue = props.component.values != null ? props.component.values.values : ""
  return (
    <div className={'text-field'}>
      <div className={'text-field--component'}>
        <TextField
          id={componentProps.json_name}
          onChange={handleChange}
          defaultValue={_defaultValue}
          className={'text-field--component--field'}
          label={componentProps.label}/>
      </div>
    </div>
  )
}

export default TextFieldComponent
