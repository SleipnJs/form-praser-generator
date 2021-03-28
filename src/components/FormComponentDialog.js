import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

import './FormComponentDialog.scss';

const FormComponentDialog = props => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose('none');
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select component</DialogTitle>
      <List>
        <ListItem autoFocus button onClick={() => handleListItemClick('text_field')}>
          <ListItemAvatar>
            <Avatar>+</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Pytanie otwarte" />
        </ListItem>

        <ListItem autoFocus button onClick={() => handleListItemClick('radio_group')}>
          <ListItemAvatar>
            <Avatar>+</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Pojedyńczy wybór" />
        </ListItem>

        <ListItem autoFocus button onClick={() => handleListItemClick('checkbox_group')}>
          <ListItemAvatar>
            <Avatar>+</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Wielokrotny wybór" />
        </ListItem>

        <ListItem autoFocus button onClick={() => handleListItemClick('single_select')}>
          <ListItemAvatar>
            <Avatar>+</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Zwijana lista" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default FormComponentDialog;
