import {
    Dialog,
    DialogTitle,
} from "@material-ui/core";

import FormBuilder from "./FormClient/FormBuilder";

const EditComponentDialog = (props: any) => {
    let component = props.currentComponent;

    const {open} = props;

    const handleClose = (result: any) => {
        console.log(result)
        if (result != null && result.length !== 0) {
            let keys = Object.keys(result)
            keys.forEach((item) => {
                if(item != null) {
                    component.values[item] = {"values": result[item]}
                }
            })
            component.key = result.json_key;
            delete result.json_key;
            component.settings = result;
        }
        props.onClose(component);
    }

    const getFormContent = () => {
        let formContent = require('../data/' + component.type + '.json');
        formContent.values = {};
        let keys = Object.keys(component.values)
        keys.forEach((item) => {
            formContent.values[item] = component.values[item]
        })
        return formContent
    }

    return (
        <Dialog onClose={() => handleClose(null)} aria-labelledby="simple-dialog-title" open={open} className={'text-field-dialog'}>
            <DialogTitle id="simple-dialog-title">Select component</DialogTitle>
            <FormBuilder
                formContent={getFormContent()}
                onSave={handleClose}
            />
        </Dialog>
    );
}

export default EditComponentDialog
