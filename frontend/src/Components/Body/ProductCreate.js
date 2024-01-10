import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const options = ['Active', 'Inactive'];
function ProductCreate() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const [name, setName] = React.useState('')
    const [pack, setPack] = React.useState('')
    const [categoryID, setCategoryID] = React.useState('')
    const [mrp, setMrp] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [status, setStatus] = React.useState(true)
    const navigate = useNavigate();


    const createProduct = async () => {
        const data = {
            name, pack, categoryID, mrp, description, status
        }
        axios.post('/product/create', data)
            .then(() => {
                navigate('/product')
            }).catch((error) => {
                alert('An Error occured, please check')
            })
    };

    const handleButtonClick = () => {
        navigate('/product')
    }


    return (
        <div >
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
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
                    Add Product
                </Typography>
            </div>

            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                flexWrap: 'wrap', justifyContent: 'space-between',
            }}>
                {/* <Autocomplete
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
                    renderInput={(params) => <TextField value={categoryID}
                    onChange={(e) => setCategoryID(e.target.value)} {...params} label="Category" />}
                /> */}
                <TextField value={categoryID}
                 onChange={(e) => setCategoryID(e.target.value)} style={{ width: '280px' }} label="Category Name" />

                <TextField value={name}
                 onChange={(e) => setName(e.target.value)} style={{ width: '280px' }} label="Product Name" />
                <TextField value={pack} 
                 onChange={(e) => setPack(e.target.value)} style={{ width: '280px' }} label="Pack Size" />

            </div>



            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '15px'
            }}>

                <TextField value={mrp}
                 onChange={(e) => setMrp(e.target.value)} style={{ width: '280px' }} label="MRP" />
                <TextField style={{ width: '280px' }}
                label="Product Image" />
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
                    renderInput={(params) => <TextField 
                        onChange={(e) => setStatus(e.target.value)}  {...params} label="Status" />}
                />

            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: '20px 20px 40px',

                '@media (minwidth: 600px)': {  // Web responsiveness
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                },
            }}>

                <Button variant="outlined" style={{
                    marginRight: '10px', marginTop: '200px',
                    '@media (min-width: 600px)': {  // Web responsiveness
                        marginRight: '10px',
                    },
                }}>
                    Cancel
                </Button>
                <Button onClick={createProduct} variant="contained" color="success" style={{
                    marginRight: '10px', marginTop: '200px',
                    '@media (min-width: 600px)': {  // Web responsiveness
                        marginRight: '10px',
                    },
                }}>
                    Save
                </Button>
            </div>
        </div>
    )
}

export default ProductCreate
