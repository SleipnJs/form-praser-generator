import {Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";

const FormComponentDialog = (props) => {

  const {onClose, selectedValue, open} = props;

  const handleClose = () => {
    onClose('none');
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select component</DialogTitle>
      <List>
        <ListItem autoFocus button onClick={() => handleListItemClick('text_field')}>
          <ListItemAvatar>
            <Avatar>
              +
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="text_field"/>
        </ListItem>

        <ListItem autoFocus button onClick={() => handleListItemClick('radio_group')}>
          <ListItemAvatar>
            <Avatar>
              +
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="radio_group"/>
        </ListItem>

        <ListItem autoFocus button onClick={() => handleListItemClick('checkbox_group')}>
          <ListItemAvatar>
            <Avatar>
              +
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="checkbox_group"/>
        </ListItem>

        <ListItem autoFocus button onClick={() => handleListItemClick('single_select')}>
          <ListItemAvatar>
            <Avatar>
              +
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="single_select"/>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default FormComponentDialog
