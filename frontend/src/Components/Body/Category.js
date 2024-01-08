import React from 'react'
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableHeader from '../Header/TableHeader';
import { Grid, Paper, Typography } from '@mui/material';
import arrow from '../../Images/arrow.jpg'
import TableBody from '@mui/material/TableBody';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import { styled } from '@mui/material/styles';
import image269 from '../../Images/image269.jpg'
import image270 from '../../Images/image270.jpg'  

function Category() {
  const tableHeadStyle = {
    width: '2230px',
    height: '57px',
    backgroundColor: '#FFF8B7',
    top: '277px',
    left: '464px',
  };

  const cellContentStyle = {   
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '30px',
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
      backgroundColor:   "#F2F2F2",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    paddingLeft: '10px'
  }));
  return (
    <div >
      <TableHeader />
      <TableContainer  component={Paper} >
        <Table style={{backgroundColor: '#FFF8B7'}} sx={{ minWidth: 750 }}  aria-label="customized table">
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
                  <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }}  />
                </Grid>                
              </Grid></StyledTableCell>

              <StyledTableCell >
                 <Grid container spacing={1} alignItems="center">
                 <Grid item style={cellContentStyle}>
                  <Typography>Description</Typography>
                 </Grid>
                <Grid item>
                  <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }}  />
                </Grid>                
              </Grid></StyledTableCell>
                
              <StyledTableCell >
                 <Grid container spacing={1} alignItems="center">
                 <Grid item style={cellContentStyle}>
                  <Typography>Status</Typography>
                 </Grid>
                <Grid item>
                  <img src={arrow} alt="ID Image" style={{ width: '12px', height: '11px' }}  />
                </Grid>                
              </Grid></StyledTableCell>
                
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <StyledTableRow 
              // key={row.name}
              
            >

              <StyledTableCell style={typo} component="th" scope="row">1</StyledTableCell>
              <StyledTableCell style={typo} component="th" scope="row">หฟะ</StyledTableCell>
              <StyledTableCell style={typo} component="th" scope="row">ิ่ิทืิืทิมทมทใม</StyledTableCell>
              <StyledTableCell style={typo} component="th" scope="row">ทืิทิทืิ</StyledTableCell>
             <div style={{paddingTop:'15px'}}>
             <img src={image269} alt="Your Image" style={{ width: '20px', height: '20px',  }} />
  <img src={image270} alt="Your Second Image" style={{ width: '20px', height: '20px',marginLeft:'10px' }} />
             </div>

            </StyledTableRow >
            {/* ))} */}
            
          </TableBody>
        </Table>

      </TableContainer>
    </div>
  )
}

export default Category
