import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
       setData(res.data);
    })
    },[])
  return (
    
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
           < TableRow>
           <TableCell  align='center'style={{color:"green", fontSize:'20px'}}>ID</TableCell>
           <TableCell align='center'style={{color:"green", fontSize:'20px'}} >Name</TableCell>
           <TableCell align='center' style={{color:"green",fontSize:'20px'}}>Email</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
            {data.map((item)=>(
            <TableRow  key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>{item.id}</TableCell>
           <TableCell align='center'>{item.name}</TableCell>
           <TableCell align='center'>{item.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    
  )
}

export default Home