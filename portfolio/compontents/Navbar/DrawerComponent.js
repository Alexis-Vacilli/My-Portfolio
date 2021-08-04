import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  menuIcon: {
    marginLeft: 'auto',
    marginTop: '-100px',
    fontSize: '30px'
  },
  drawer: {
    backgroundColor: '#161B40',
    color: 'white',
  },
  text: {
    color: 'white',
    padding: '10px'
  }
});

export default function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='top'
      >
        <List className={classes.drawer}>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText className={classes.text}>Intro</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem  button>
            <ListItemIcon>
              <ListItemText className={classes.text}>Blogs</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.menuIcon}>
        <MenuIcon color='secondary' fontSize="large"/>
      </IconButton>
    </>
  );
}
