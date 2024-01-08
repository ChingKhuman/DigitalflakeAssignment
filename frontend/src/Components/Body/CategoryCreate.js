import {  Button, Typography } from '@mui/material'
import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {useNavigate} from 'react-router-dom'


const options = ['Active', 'Inactive'];
function CategoryCreate() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
   
        navigate('/Category');
      };

    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    
    return (
        <div >
            <div style={{ display: 'flex', flexDirection: 'row' ,marginBottom: '20px'}}>
                <ArrowBackOutlinedIcon 
                onClick={handleButtonClick}
                style={{ padding: '5px', width: '15px', height: '15px', paddingRight: '20px' }} />
                <Typography
                    variant="h4"
                    fontWeight={600}
                    fontSize="24px"
                    letterSpacing="0.5px"
                    sx={{ fontFamily: 'Inter' }}
                    fontStyle={'Inter'}
                    style={{ fontFamily: 'Inter' }}
                >
                    Add Category
                </Typography>
            </div>
            
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around',
        flexWrap: 'wrap', justifyContent: 'space-between',}}>
      
        <TextField  style={{width: '280px'}} label="Category Name" />
        <TextField style={{width: '280px'}} label="Description" />
        <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField {...params} label="Status" />}
      />

      </div>

      <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'flex-end', 
     padding: '20px 20px 40px' , 

      '@media (min-width: 600px)': {  // Web responsiveness
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    }}>
    
     <Button variant="contained" color="success" style={{ marginRight: '10px',marginTop: '300px',
     '@media (min-width: 600px)': {  // Web responsiveness
            marginRight: '10px',
          },
        }}>
        Success
      </Button>
      <Button variant="outlined" style={{ marginRight: '10px', marginTop: '300px' ,
      '@media (min-width: 600px)': {  // Web responsiveness
            marginRight: '10px',
          },
        }}>
        Cancel
      </Button>
     </div>
        </div>
    )
}

export default CategoryCreate
