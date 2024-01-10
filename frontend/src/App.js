import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'

import Login from './Auth/Login'
import { useAuthContext } from './Components/hooks/useAuthContext'



function App() {
  const {user} = useAuthContext()
  return (
    <>
{user && (
 <BrowserRouter>
 <Header/>
 </BrowserRouter>
)}
{!user && (
      <Login/>
      )}
   
   <BrowserRouter>
   <Routes>
<Route path='/login' element={<Login/>}/>
{/* <Route path='/register' element={<Register/>}/> */}
</Routes></BrowserRouter>
   </>
   
  )
}

export default App
