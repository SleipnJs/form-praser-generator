import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import './radio-group-component.css';

import { useState } from 'react';

const RadioGroupComponent = props => {
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

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\s/g, '_');
    value = value.replace(':', '');
    value = value.replace(',', '');
    value = value.replace('=', '_');
    value = value.replace('/', '_');
    props.onDataChanged(props.component.key, value);
  }

  return (
    <div className={'radio-group'}>
      <div className={'radio-group--component'}>
        <span>
          <small>
            <b>{componentProps.label}</b>
          </small>
        </span>
        <RadioGroup>
          {componentProps.options != null
            ? componentProps.options.map((option, index) => (
                <div key={index}>
                  <FormControlLabel className="test" value={option.label} control={<Radio />} onChange={handleChange} label={option.label?.replaceAll('_', ' ')} />
                </div>
              ))
            : 'Wybierz pola'}
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioGroupComponent;
