import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, Typography } from '@mui/material';
import arrow from '../../Images/arrow.jpg'
import TableBody from '@mui/material/TableBody';

import { styled } from '@mui/material/styles';
import image291 from '../../Images/image291.jpg'
import image269 from '../../Images/image269.jpg'
import image270 from '../../Images/image270.jpg'
import TableHeaderProduct from '../Header/TableHeaderProduct';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Product() {

  const [product, setProduct] = React.useState(null)
  const [openDialog, setOpenDialog] = React.useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate()

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const fetchProducts = async () => {
      await fetch("/product", requestOptions)
        .then(response => response.json())
        .then(result => {
          const res = result.data
          setProduct(res)
        })
        .catch(error => console.log('error', error));
    }
    fetchProducts()
  }, [])
  const tableHeadStyle = {
    width: '2230px',
    height: '57px',
    backgroundColor: '#FFF8B7',
    top: '277px',
    left: '464px',
  };

  const cellContentStyle = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: '0em',
    textAlign: 'left',

  };
  const typo = {
    fontfamily: 'Poppins',
    fontsize: '16px',
    fontweight: 400,
    lineheight: '24px',
    letterspacing: '0em',
    textalign: 'left'

  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FFF8B7',
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#F2F2F2",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    paddingLeft: '10px'
  }));

  const { id } = useParams();
  const handleDeleteProduct = () => {
    axios.delete(`/product/${id}`)
      .then(() => {
        navigate('/products')
      }).catch((error) => {
        alert('An error , please check console')
        console.log(error)
      })
  }
  const handleImageClick = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleNavigateEdit = () => {
    navigate('/Products/edit')
  }
  const handlDetailROutes = () => {
    navigate('/Product/details')
  }

  return (
    <div >
      <TableHeaderProduct />
      <TableContainer component={Paper} >
        <Table style={{ backgroundColor: '#FFF8B7' }} sx={{ minWidth: 750 }} aria-label="customized table">
          <TableHead style={tableHeadStyle}>

            <TableRow >
              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>ID</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>Name</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>Pack Size</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>Category</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>MRP</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>Image</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

              <StyledTableCell >
                <Grid container spacing={1} alignItems="center">
                  <Grid item style={cellContentStyle}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item>
                    <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }} />
                  </Grid>
                </Grid></StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {product?.map((item, index) => (
              <StyledTableRow
                key={index}
              >

                <StyledTableCell style={typo} component="th" scope="row">{index +1}</StyledTableCell>
                <StyledTableCell style={typo} component="th" scope="row">{item.name}</StyledTableCell>
                <StyledTableCell style={typo} component="th" scope="row">{item.pack}</StyledTableCell>
                <StyledTableCell style={typo} component="th" scope="row">{item.categoryID}</StyledTableCell>
                <StyledTableCell style={typo} component="th" scope="row">{item.mrp}</StyledTableCell>
                <StyledTableCell style={typo} component="th" scope="row">
                  <img src={image291} alt="Your Image" style={{ width: '20px', height: '20px', }} />

                </StyledTableCell>
                <StyledTableCell style={typo} component="th" scope="row">
                  <h4 style={{ color: 'green' }}>Active</h4></StyledTableCell>
                <div style={{ paddingTop: '30px' }}>
                <Link to='/Products/edit'>
                  <img src={image270} alt="Your Image" style={{ width: '20px', height: '20px', }} />
                  </Link>
                  <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleImageClick}
        src={image269}
        alt="Your Second Image"
        style={{
          width: '20px',
          height: '20px',
          marginLeft: '10px',
          cursor: 'pointer',
          color: isHovered ? '1px solid red' : '1px solid transparent',
          backgroundColor: isHovered ? 'red' : 'transparent',
          
        }}
      />
                </div>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                  <DialogTitle>Confirm</DialogTitle>
                  <DialogContent>
                    {/* You can add any content you want to display in the popup */}
                    Are You Sure want to Delete

                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog} autoFocus>
                      No
                    </Button>
                    <Button onClick={handleDeleteProduct}>Yes</Button>
                  </DialogActions>
                </Dialog>

              </StyledTableRow >
            ))}

          </TableBody>
        </Table>

      </TableContainer>
    </div>
  )
}

export default Product
