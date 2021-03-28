import {useEffect, useState} from 'react';
import getComponent from '../../controllers/FormParser';
import './SurveyContent.scss';
import {ComponentDto} from '../../components/FormGenerator';
import React from 'react';
import {RadialChart} from 'react-vis'

const SurveyContent = (props: any) => {
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
            });
        });
        setLayout(_layout);
    }, []);

    const buildStats = (data) => {
        let sum = 0;
        props.responses[data]?.forEach((item: any) => {
            sum += item['angle']
        })
        return props.responses[data]?.map((item: any) => {
            let percent = Math.round(item.angle / sum * 100);
            return (<p><div style={{height: '10px', width: '10px', backgroundColor: item.color, display: 'inline-block', marginRight: '10px'}}></div>{percent}% - {item.label}</p>)
        })
    }

    return (
        <div className="container">
            <div className="form u-mtop">
                {layout.map((row: any) => {
                    return (
                        <div className={'form__row'}>
                            {row.map((component: ComponentDto) => {
                                console.log(component)
                                console.log(component.key)
                                if( props.responses[component.key] != null ) {
                                    return (
                                        <div className={'form__content'}>
                                            <div className="form__header">
                                                {/*@ts-ignore*/}
                                                <h2 className="form__heading">{component.settings.title?.replaceAll('_', ' ')}</h2>
                                                {/*@ts-ignore*/}
                                                <RadialChart
                                                    data={props.responses[component.key]}
                                                    width={300}
                                                    colorType={"literal"}
                                                    height={300}/>
                                                <div>
                                                    {buildStats(component.key)}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return ""
                                }
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SurveyContent;
