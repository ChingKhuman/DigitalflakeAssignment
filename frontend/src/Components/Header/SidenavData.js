import { Button, List, ListItem, ListItemIcon } from '@mui/material'
import React from 'react'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Link } from 'react-router-dom';
import image222 from '../../Images/image222.jpg'
import image223 from '../../Images/image223.jpg'
import image213 from '../../Images/image213.jpg'


function SidenavData() {

 


    const listItemData = [
        {label: "Home",link: "/",  icon: <img src={image222} alt="Category" style={{ width: '20px', height: '20px' }} /> },
        {label: "Category",link: "/Category",  icon: <img src={image223} alt="Category" style={{ width: '20px', height: '20px' }} />},
        {label: "Product",link: "/Product",  icon: <img src={image213} alt="Category" style={{ width: '20px', height: '20px' }} />},
    ]

  return (
    
   <List>
    {listItemData.map((item, i)=> (
       <Button size='small' >
          <ListItem key={i} component={Link} to={item.link} sx={{ "&:hover": { backgroundColor: '#FFF8B7' } }}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemIcon sx={{width: '50px',paddingRight: ''}}>{item.label}</ListItemIcon>
        <ListItemIcon sx={{  paddingLeft:'90px' }}>
              <ArrowRightOutlinedIcon />
            </ListItemIcon>
     </ListItem>
        </Button>
    ))}
    </List>  
  )
}

export default SidenavData
