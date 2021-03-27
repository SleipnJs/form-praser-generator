import {
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import './single-select-component.css'

import {useState} from "react";

const SingleSelectComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState();

  const [componentProps, setComponentProps] = useState(props.component.settings != null ? props.component.settings :{
    "json_name": null,
    "title": null,
    "description": null,
    "label": null,
    "required": false,
    "hasOptionOther": false,
    "options": [],
  })

  const handleChange = (event) => {
    let value = event.target.value;
    selectedOption(value);
    props.onDataChanged(props.component.key, value);
  };

  return (
    <div className={'single-select'}>
      <div className={'single-select--component'}>
        <h2>{componentProps.title}</h2>
        <p>{componentProps.description}</p>
        <InputLabel id="demo-simple-select-label">{componentProps.label}</InputLabel>
        <Select
          style={{width: "100%"}}
          labelId="demo-simple-select-label"
          onChange={handleChange}
          id="single-select"
        >
          {componentProps.options.map((option, index) =>
            <div key={index}>
              <MenuItem style={{width: "100%"}} value={index}>{option}</MenuItem>
            </div>
          )}
        </Select>
      </div>
    </div>
  )
}

export default SingleSelectComponent
