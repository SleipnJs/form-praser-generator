import { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './form-content.css';
import GeneratorComponent from './GeneratorComponent';
import FormDataService from '../services/form.service';
import React from 'react';
import './FormGenerator.scss';

import blob from '../assets/images/blob.svg';
import leaf from '../assets/images/leaf.svg';

export interface ComponentDto {
  key: string;
  type: string;
  rowIndex: number;
  colIndex: number;
  settings: {};
  layout: {};
  logicGroups: {};
  values: {};
}

const FormGenerator = () => {
  let zeroComponent: ComponentDto = {
    key: 'undefined0-0',
    rowIndex: 0,
    colIndex: 0,
    type: 'none',
    settings: {},
    layout: {},
    logicGroups: {},
    values: {},
  };
  const [layout, setLayout] = useState([[zeroComponent]]);
  const [formTitle, setFormTitle] = useState('undefined');
  const [formDescription, setFormDescription] = useState('undefined');
  const [formImageLink, setFormImageLink] = useState('undefined');

  const createNewComponent = () => {
    let _rowIndex = layout.length;
    let initialComponent: ComponentDto = {
      key: 'undefined' + _rowIndex + '-0',
      rowIndex: _rowIndex,
      colIndex: 0,
      type: 'none',
      settings: {},
      layout: {},
      logicGroups: {},
      values: {},
    };
    return initialComponent;
  };

  const onComponentUpdated = (component: ComponentDto) => {
    let _layout = [...layout];
    _layout[component.rowIndex][component.colIndex] = component;
    setLayout(_layout);
  };

  const addColumn = (_rowIndex: number) => {
    let _layout = [...layout];
    _layout[_rowIndex].push(createNewComponent());
    setLayout(_layout);
  };

  const onFormTitleChanged = (e: any) => {
    let value = e.target.value;
    setFormTitle(value);
  };

  const onFormDescriptionChanged = (e: any) => {
    let value = e.target.value;
    setFormDescription(value);
  };

  const onFormHrefChanged = (e: any) => {
    let value = e.target.value;
    setFormImageLink(value);
  };

  const saveForm = () => {
    let _result = {};
    // @ts-ignore
    _result['components'] = {};
    // @ts-ignore
    _result['componentsSettings'] = {};
    // @ts-ignore
    _result['layout'] = [];

    layout.forEach((row, index) => {
      // @ts-ignore
      _result['layout'][index] = [];
      row.forEach((item, indexCol) => {
        // @ts-ignore
        _result['components'][item.key] = item.type;
        // @ts-ignore
        _result['componentsSettings'][item.key] = item.settings;
        // @ts-ignore
        _result['layout'][index][indexCol] = { [item.key]: item.layout };
      });
    });
    let _resultFull = {};
    // @ts-ignore
    _resultFull['stage_number'] = 1;
    // @ts-ignore
    _resultFull['form_title'] = formTitle;
    // @ts-ignore
    _resultFull['form_description'] = formDescription;
    // @ts-ignore
    _resultFull['form_content'] = _result;

    console.log(_resultFull);
    FormDataService.create({
      "responses": _resultFull,
      "imageHref": formImageLink
    }).then(r => window.location.replace('/sended'));
  };

  return (
    <div className={'container generator'}>
      <img src={blob} className="blob" />
      <img src={leaf} className="leaf" />
      <h2 className="generator__heading">
        Stwórz własną <span>ankietę</span> od zaraz
      </h2>
      <div className="generator__settings">
        <TextField label={'Tytuł formularza'} onChange={onFormTitleChanged} />
        <TextField label={'Link do grafiki'} onChange={onFormHrefChanged} />
        <TextField label={'Opis formularza'} onChange={onFormDescriptionChanged} multiline rows={4} />
      </div>
      {layout.map((row, _rowIndex) => {
        return (
          <div className={' row'}>
            {row.map((col, _colIndex) => {
              return (
                <div className={'col'} key={_colIndex}>
                  <GeneratorComponent
                    component={layout[_rowIndex][_colIndex]}
                    onComponentUpdated={(component: ComponentDto) => onComponentUpdated(component)}
                  />
                </div>
              );
            })}
            <button className="generator__add" onClick={() => addColumn(_rowIndex)}>
              +
            </button>
          </div>
        );
      })}
      <div className="generator__buttons">
        <button className="generator__btn generator__btn--red" onClick={() => setLayout(layout => [...layout, [createNewComponent()]])}>
          + Dodaj komponent
        </button>
        <button className="generator__btn generator__btn--black" onClick={() => saveForm()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormGenerator;
