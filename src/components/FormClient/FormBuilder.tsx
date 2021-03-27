import FormContent from './FormContent';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import FormDataService from '../../services/form.service';

function FormBuilder(props: any) {
  const [formContent, setFormContent] = useState(null);
  const [formData, setFormData] = useState({});

  console.log(props.formContent);

  useEffect(() => {
    if (props.formContent != null) {
      setFormContent(props.formContent);
      if (props.formContent.hasOwnProperty('values')) {
        let keys = Object.keys(props.formContent.values);
        let _formData = { ...formData };
        keys.forEach((key: any) => {
          // @ts-ignore
          _formData[key] = props.formContent.values[key].values;
        });
        setFormData(_formData);
      }
    } else {
      setFormContent(require('../../data/text_field.json'));
    }
  }, []);

  const onDataChanged = (key: string, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const sendData = () => {
    if (props.onSave != null) {
      props.onSave(formData);
    }
  };

  if (formContent == null) {
    return <p>Loading form...</p>;
  } else {
    return (
      <form>
        <FormContent onDataChanged={onDataChanged} formContent={formContent} />
        <Button onClick={() => sendData()}>SEND DATA</Button>
      </form>
    );
  }
}

export default FormBuilder;
