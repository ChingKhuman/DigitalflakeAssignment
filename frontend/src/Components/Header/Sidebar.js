
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import SidenavData from './SidenavData';
import { Hidden } from '@mui/material';

function Sidebar({mobileOpen,handleDrawerOpen, handleDrawerClose}) {

  const drawerWidth = 250; 
 

 
  return (
   <nav  aria-label='mailbox folders'>

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation='css'>
        <Drawer            
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerOpen}          
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth
          ,marginTop: '65px' },
          }}
        >  
         <SidenavData handleDrawerClose={handleDrawerClose}/>       
        </Drawer>
     </Hidden>
     <Hidden smDown implementation='css'>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,marginTop: '65px'
            },
            
          }}
          open>
           <SidenavData handleDrawerClose={handleDrawerClose}/> 
        </Drawer>
        </Hidden>
     
      
   
   </nav>
  )

        }
export default Sidebar;


