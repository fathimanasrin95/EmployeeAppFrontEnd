import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>
    <AppBar position="static" style={{backgroundColor:"green"}}>
      <Toolbar>
        <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
      <Link to={'/'} > <Button color="inherit" style={{color:'white'}}>Home</Button></Link> 
      <Link to={'/form'} >  <Button  color="inherit" style={{color:'white'}} >Employee_Form</Button></Link> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar