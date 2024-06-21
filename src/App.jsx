import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Form from "./components/Form"
import Main from './components/Main'

function App() {

  return (
    <>
      <Routes>
    <Route path='/' element={<Main child={<Home/>}/>}></Route>
    <Route path='/form' element={<Main child={<Form/>}/>}></Route>
   </Routes>
    </>
  )
}

export default App
