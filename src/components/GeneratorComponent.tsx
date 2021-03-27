import './form-content.css'
import {useEffect, useState} from "react";
import getComponent from "../controllers/FormParser";
import FormComponentDialog from "./FormComponentDialog";
import {ComponentDto} from "./FormGenerator";
import {Button, IconButton} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import EditComponentDialog from "./EditComponentDialog";


const GeneratorComponent = (props:any) => {
  const [open, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(props.component)

  useEffect(() => {
    console.log(currentComponent)
  }, [currentComponent])

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = (value:string) => {
    setOpen(false);
    setCurrentComponent({
      ...currentComponent,
      type: value
    });
  };
  
  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = (_component:ComponentDto) => {
    setCurrentComponent({
      ...currentComponent,
      settings: _component.settings
    });
    setOpenEditDialog(false)
    props.onComponentUpdated(_component);
  };

  const buildSelectComponentBox = () => {
    return (
      <div>
        <div className={'select-item-box'} onClick={handleOpenDialog}>+<br/>Kliknij aby wybrać komponent</div>
        <FormComponentDialog open={open} onClose={handleCloseDialog}/>
      </div>
    )
  }

  const buildComponentBox = () => {
    let hasTitle = currentComponent.title != null && currentComponent.title != "";
    let hasDescription = currentComponent.description != null && currentComponent.description != "";

    return (
        <div className={'component-holder'}>
          <div className={'component-holder--settings'}>
            {currentComponent.key}
            <IconButton onClick={handleOpenEditDialog}>
              <SettingsIcon fontSize={'small'}/>
            </IconButton>
          </div>
          <div>
            <h2>{currentComponent.settings.title}</h2>
            <p>{currentComponent.settings.description}</p>
          </div>
          {getComponent(null, currentComponent)}
          <EditComponentDialog open={openEditDialog} onClose={handleCloseEditDialog}
                               currentComponent={currentComponent}/>
        </div>
    )
  }

  if (currentComponent == null || currentComponent.type === "none") {
    return buildSelectComponentBox()
  } else {
    return buildComponentBox()
  }
}

export default GeneratorComponent;
