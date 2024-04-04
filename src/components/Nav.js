// import react from 'react';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

function Nav() {

  return (<>
    <Drawer
        sx={{
          width: {xs: '50px', sm: '200px'},
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: {xs: '50px', sm: '200px'},
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Green Flash', 'Super Moon', 'Green Flash during a Super Moon', 'Folklore and Cultural Significance'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  </>)
}

export default Nav;
