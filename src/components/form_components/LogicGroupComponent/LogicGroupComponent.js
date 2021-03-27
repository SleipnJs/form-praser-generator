import {Button, TextField} from "@material-ui/core";
import './logic-group-component.css'

import {useState} from "react";
import FormContent from "../../FormClient/FormContent";

const LogicGroupComponent = (props) => {
  const [groupValue, setGroupValue] = useState([{}]);

  const onDataChanged = (index, key, value) => {
    let _insideValue = [...groupValue];
    _insideValue[index][key] = value;
    setGroupValue(_insideValue)
    props.onDataChanged( props.component.key, _insideValue)
  }

  return (
    <div>
      {groupValue.map((value, index) => <FormContent
        onDataChanged={(key, value) => onDataChanged(index, key, value)}
        formContent={props.formContent}
      />)}
      <Button onClick={() => setGroupValue(groupValue => [...groupValue, {}])}>
        Nowe pole
      </Button>
    </div>
  )
}

export default LogicGroupComponent
