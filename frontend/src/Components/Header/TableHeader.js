import React from 'react'

import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import categoryImage from '../../Images/image223.jpg'
import {useNavigate} from 'react-router-dom'

function TableHeader() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
        height: '40px',
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        border: '1px solid #ccc', // Add border style
  borderRadius: theme.shape.borderRadius, 
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '563px',
            '&:focus': {
              width: '563px',
            },
          },
        },
        height: '100%',
      }));

      const navigate = useNavigate();
      
  const handleButtonClick = () => {
   
    navigate('/CatCreate');
  };
      
        const customStyle = {
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '21px',
          lineHeight: '36px',
          letterSpacing: '0.5px',
        
        };
        
      
  return (
    <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBottom:'25px'}}>
      
        <div style={{display:'flex',flexDirection:'row', alignItems:'center' , paddingLeft:10}}>
        <img src={categoryImage} alt="Category" style={{ width: '20px', height: '20px', paddingRight:'15px' }} /> 
     <Typography variant="h4" style={customStyle}>
     Category

     </Typography>
        </div>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button variant="contained" size="small" style={{ backgroundColor: '#662671', color: '#fff' }} 
          onClick={handleButtonClick}>
  Add New
</Button>
    </div>
  )
}

export default TableHeader
