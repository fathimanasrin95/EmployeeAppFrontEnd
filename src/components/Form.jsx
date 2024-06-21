import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div style={{margin:"5%"}}>
    <Grid container spacing={1}>
 <Grid item xs={6} md={12} sm={12}>
 <TextField style={{width:"50%"}}  id="outlined-basic" label="Name" variant="outlined" />
 </Grid>
 <Grid item xs={6} md={12} sm={12}>
 <TextField style={{width:"50%"}} fullWidth id="outlined-basic"  label="Designation" variant="outlined" />
 </Grid>
 <Grid item xs={6} md={12} sm={12}>
 <TextField style={{width:"50%"}} fullWidth id="outlined-basic" label="Location" variant="outlined" />
 </Grid>   
 <Grid item xs={6} md={12} sm={12}>
 <TextField style={{width:"50%"}} fullWidth id="outlined-basic" label="Salary" variant="outlined" />
 </Grid>   
 <Grid item xs={6} md={12} sm={12}>
 <Button color="success" variant="contained">UPLOAD</Button>
 </Grid>   
 </Grid>
   </div>
  )
}

export default Form