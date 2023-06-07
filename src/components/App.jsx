import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import { Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route element={<WhoAreYou/>}></Route>
      <Route ></Route>
    </Route>
     </Routes>
    </>
  )
}

export default App
