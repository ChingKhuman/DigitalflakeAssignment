import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {Routes, Route} from 'react-router-dom'
import Category from '../Body/Category'
import Product from '../Body/Product'
import Home from '../Body/Home'
import { Box , useTheme} from '@mui/material'
import CategoryCreate from '../Body/CategoryCreate'
import ProductCreate from '../Body/ProductCreate'
import { useAuthContext } from '../hooks/useAuthContext'

import ProductId from '../Body/ProductId'
import ProductDelete from '../Body/ProductDelete'
import ShowProductDetails from '../Body/ShowProductDetails'


function Header() {

  const theme = useTheme();
  const {user} = useAuthContext()

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerOpen =()=> {
    setMobileOpen(!mobileOpen)
  }
  const handleDrawerClose =()=> {
    setMobileOpen(mobileOpen)
  }
  return (
    <div> 

     
      <Navbar/>
      <Sidebar mobileOpern={mobileOpen}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}/>
    <Box sx={{
        padding: theme.spacing(2, 2, 0, 32),
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(2, 2),
        },
      }}>
    <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/Category' element={<Category/>}/>
    <Route path='/Product' element={<Product/>}/>
    <Route path='/Product/delete/:id' element={<ProductDelete/>}/>
    <Route path='/Product/details/:id' element={<ShowProductDetails/>}/>
    <Route path='/Product/edit/:id' element={<ProductId/>}/>
    <Route path='/CatCreate' element={<CategoryCreate/>}/>
    <Route path='/Product/create' element={<ProductCreate/>}/>
    
  
    
    </Routes>
    </Box>
    
    </div>
  )
}

export default Header
