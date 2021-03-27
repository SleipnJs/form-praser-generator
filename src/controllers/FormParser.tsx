import TextFieldComponent from "../components/form_components/TextFieldComponent/TextFieldComponent";
import LogicGroupComponent from "../components/form_components/LogicGroupComponent/LogicGroupComponent";
import SingleSelectComponent from "../components/form_components/SingleSelectComponent/SingleSelectComponent";
import RadioGroupComponent from "../components/form_components/RadioGroupComponent/RadioGroupComponent";
import MultiSelectComponent from "../components/form_components/MultiSelectComponent/MultiSelectComponent";
import CheckboxGroupComponent from "../components/form_components/CheckboxGroupComponent/CheckboxGroupComponent";
import {ComponentDto} from "../components/FormGenerator";

const getComponent = (onDataChanged: any, component: ComponentDto) => {
    switch (component.type) {
        case "text_field":
            return <TextFieldComponent
                component={component}
                onDataChanged={onDataChanged}
            />
        case "single_select":
            return <SingleSelectComponent
                component={component}
                onDataChanged={onDataChanged}
            />
        case "multi_select":
            return <MultiSelectComponent
                component={component}
                onDataChanged={onDataChanged}
            />
        case "radio_group":
            return <RadioGroupComponent
                component={component}
                onDataChanged={onDataChanged}
            />
        case "checkbox_group":
            return <CheckboxGroupComponent
                component={component}
                onDataChanged={onDataChanged}
            />
        case "logic_group":
            return <LogicGroupComponent
                component={component}
                formContent={component.logicGroups}
                onDataChanged={onDataChanged}
            />
        default:
            return <p>{component.type}</p>
    }
}

export default getComponent
