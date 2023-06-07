import { useState,useEffect } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import WhoAreYou from './WhoAreYou'
import Farmers from './Farmers'
import MyProducts from './MyProducts'
import AddProducts from './AddProducts'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<WhoAreYou/>}></Route>
      <Route path='/farmers' element={<Farmers/>}>
      <Route path='/farmers/myproducts' element={<MyProducts/>}></Route>
      <Route path='/farmers/addproduct' element={<AddProducts/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
