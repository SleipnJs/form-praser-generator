import { useEffect, useState } from 'react';
import getComponent from '../../controllers/FormParser';
import './FormContent.scss';
import { ComponentDto } from '../FormGenerator';

const FormContent = (props: any) => {
  const [layout, setLayout] = useState([]);

  const [currentComponent, setCurrentComponent] = useState(null);
  useEffect(() => {
    let _layout = [...layout];

    props.formContent.layout.forEach((row: any, rowIndex: number) => {
      // @ts-ignore
      _layout[rowIndex] = [];
      row.forEach((col: any, colIndex: number) => {
        let _key = Object.keys(col)[0];
        let component: ComponentDto = {
          key: _key,
          type: props.formContent.components[_key],
          rowIndex: rowIndex,
          colIndex: colIndex,
          settings: props.formContent.componentsSettings[_key],
          layout: col[_key],
          logicGroups: props.formContent.hasOwnProperty('logicGroups') ? props.formContent.logicGroups[_key] : {},
          values: props.formContent.hasOwnProperty('values') ? props.formContent.values[_key] : {},
        };
        // @ts-ignore
        _layout[rowIndex].push(component);
        console.log(_layout);
      });
    });
    setLayout(_layout);
  }, []);

  return (
    <div className="container">
      <div className="form u-mtop">
        {layout.map((row: any) => {
          return (
            <div className={'form__row'}>
              {row.map((component: ComponentDto) => {
                return (
                  <div className={'form__content'}>
                    <div className="form__header">
                      {/*@ts-ignore*/}
                      <h2 className="form__heading">{component.settings.title}</h2>
                      {/*@ts-ignore*/}
                      <p>{component.settings.description}</p>
                    </div>
                    {getComponent(props.onDataChanged, component)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormContent;
