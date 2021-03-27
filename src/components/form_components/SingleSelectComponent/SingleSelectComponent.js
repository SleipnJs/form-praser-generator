import {
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import './single-select-component.css'

import {useState} from "react";

const SingleSelectComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState();

  const componentProps =
    props.component.settings != null
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

  const handleChange = (event) => {
    let value = event.target.value;
    selectedOption(value);
    props.onDataChanged(props.component.key, value.replace(/\s/g, '_'));
  };

  return (
    <div className={'single-select'}>
      <div className={'single-select--component'}>
        <InputLabel id="demo-simple-select-label">{componentProps.label}</InputLabel>
        <Select
          style={{width: "100%"}}
          labelId="demo-simple-select-label"
          onChange={handleChange}
          id="single-select"
        >
          {componentProps.options != null
            ? componentProps.options.map((option, index) =>
            <div key={index}>
              <MenuItem style={{width: "100%"}} value={index}>{option.label}</MenuItem>
            </div>
          ): <div key={999}>
              <MenuItem style={{width: "100%"}}>Wybierz opcje</MenuItem>
            </div>}
        </Select>
      </div>
    </div>
  )
}

export default SingleSelectComponent
