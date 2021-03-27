import {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import './form-content.css'
import GeneratorComponent from "./GeneratorComponent";

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
    let rowIndex = 0;
    let colIndex = 0;


    const createNewComponent = () => {
        let initialComponent: ComponentDto = {
            key: 'undefined' + rowIndex + "-" + colIndex,
            rowIndex: rowIndex,
            colIndex: colIndex,
            type: "none",
            settings: {},
            layout: {},
            logicGroups: {},
            values: {},
        }
        return initialComponent;
    }

    const [layout, setLayout] = useState([[createNewComponent()]]);

    useEffect(() => {

    }, [layout])

    const onComponentUpdated = (component: ComponentDto) => {
        let _layout = [...layout];
        _layout[component.rowIndex][component.colIndex] = component;
        setLayout(_layout);
    }

    const addColumn = (_rowIndex:number) => {
        let _layout = [...layout];
        _layout[_rowIndex].push(createNewComponent())
        setLayout(_layout)
    }

    return (
        <div className={'container'}>
            {layout.map((row, _rowIndex) => {
                rowIndex = _rowIndex
                return (
                    <div className={'row'}>
                        {row.map((col, _colIndex) => {
                            colIndex = _colIndex
                            return (
                                <div className={'col'}>
                                    <GeneratorComponent
                                        component={layout[rowIndex][colIndex]}
                                        onComponentUpdated={onComponentUpdated}
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
                </div>
                )
            }

            export default FormGenerator
