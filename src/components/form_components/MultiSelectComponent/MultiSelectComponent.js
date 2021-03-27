import {
  Checkbox,
  InputLabel, ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import './multi-select-component.css'

import {useState} from "react";

const MultiSelectComponent = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
    setSelectedOptions(value);
    props.onDataChanged(props.component.key, value);
  };

  return (
    <div className={'multi-select'}>
      <div className={'multi-select--component'}>
        <h2>{componentProps.title}</h2>
        <p>{componentProps.description}</p>
        <InputLabel id="demo-simple-select-label">{componentProps.label}</InputLabel>
        <Select
          style={{width: "100%"}}
          labelId="demo-simple-select-label"
          value={selectedOptions}
          onChange={handleChange}
          multiple
          id="multi-select"
        >
          {componentProps.options.map((option, index) =>
            <div key={index}>
              <MenuItem style={{width: "100%"}} value={option}>
                <Checkbox />
                <ListItemText primary={option} />
              </MenuItem>
            </div>
          )}
        </Select>
      </div>
    </div>
  )
}

export default MultiSelectComponent
