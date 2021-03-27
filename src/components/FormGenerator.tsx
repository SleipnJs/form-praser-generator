import {useEffect, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import './form-content.css'
import GeneratorComponent from "./GeneratorComponent";
import FormDataService from "../services/form.service";

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
        type: "none",
        settings: {},
        layout: {},
        logicGroups: {},
        values: {},
    }
    const [layout, setLayout] = useState([[zeroComponent]]);
    const [formTitle, setFormTitle] = useState("undefined");
    const [formDescription, setFormDescription] = useState("undefined");

    useEffect(() => {

    }, [layout])

    const createNewComponent = () => {
        let _rowIndex = layout.length;
        let initialComponent: ComponentDto = {
            key: 'undefined' + _rowIndex + "-0",
            rowIndex: _rowIndex,
            colIndex: 0,
            type: "none",
            settings: {},
            layout: {},
            logicGroups: {},
            values: {},
        }
        return initialComponent;
    }

    const onComponentUpdated = (component: ComponentDto) => {
        let _layout = [...layout];
        _layout[component.rowIndex][component.colIndex] = component;
        setLayout(_layout);
        console.log(_layout)
    }

    const addColumn = (_rowIndex: number) => {
        let _layout = [...layout];
        _layout[_rowIndex].push(createNewComponent())
        setLayout(_layout)
    }

    const onFormTitleChanged = (e:any) => {
        let value = e.target.value;
        setFormTitle(value)
    }

    const onFormDescriptionChanged = (e:any) => {
        let value = e.target.value;
        setFormDescription(value)
    }

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
                _result['layout'][index][indexCol] = {[item.key] : item.layout};
            })
        })
        let _resultFull = {}
        // @ts-ignore
        _resultFull['stage_number'] = 1;
        // @ts-ignore
        _resultFull['form_title'] = formTitle;
        // @ts-ignore
        _resultFull['form_description'] = formDescription;
        // @ts-ignore
        _resultFull['form_content'] = _result;

        console.log(_resultFull);
        FormDataService.create(_resultFull).then(r => alert())
    }

    return (
        <div className={'container'}>
            <div>
                <TextField label={"Tytuł formularza"} onChange={onFormTitleChanged}/><br/>
                <TextField label={"Opis formularza"} onChange={onFormDescriptionChanged}/>
            </div>
            {layout.map((row, _rowIndex) => {
                return (
                    <div className={'row'}>
                        {row.map((col, _colIndex) => {
                            return (
                                <div className={'col'} key={_colIndex}>
                                    <GeneratorComponent
                                        component={layout[_rowIndex][_colIndex]}
                                        onComponentUpdated={(component: ComponentDto) => onComponentUpdated(component)}
                                    />
                                </div>
                            )
                        })}
                        <Button variant={'contained'} onClick={() => addColumn(_rowIndex)}>
                            +

                        </Button>
                    </div>
                )
            })
            }
            <Button variant={'contained'} onClick={() => setLayout(layout => [...layout, [createNewComponent()]])}>
                +
            </Button>
            <Button variant={'contained'} onClick={() => saveForm()}>
                Save
            </Button>
        </div>
    )
}

export default FormGenerator
