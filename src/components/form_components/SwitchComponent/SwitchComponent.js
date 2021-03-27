import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select, Switch
} from "@material-ui/core";
import './switch-component.css'

import {useState} from "react";

const SwitchComponent = (props) => {
  const [isChecked, setChecked] = useState(true);
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

  const handleChange = (value) => {
    setChecked(!isChecked)
    props.onDataChanged(props.component.key, isChecked);
  };

  return (
    <div className={'switch'}>
      <div className={'switch--component'}>
        <FormControlLabel
          control={<Switch checked={isChecked} onChange={handleChange} />}
          label="Normal"
        />
      </div>
    </div>
  )
}

export default SwitchComponent
