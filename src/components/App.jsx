import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WhoAreYou from "./WhoAreYou";
import Farmers from "./Farmers";
import MyProducts from "./MyProducts";
import AddProducts from "./AddProducts";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Products from "./Products";
import data from "../farmers.json";
import FarmerPage from "./FarmerPage";
import About from './About'
import ContactUs from "./ContactUs";
import data2 from "../Products.json";
import AllProducts from "./AllProducts";
import { useState,useEffect } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import WhoAreYou from './WhoAreYou'
import Farmers from './Farmers'
import MyProducts from './MyProducts'
import AddProducts from './AddProducts';
import Layout from './Layout'
import Signuppage from './SignupPage'
import Userpage from './UserPage'
import Loginpage from './Loginpage'
import {db} from './firebase-config'
import {getDocs,collection,getDoc} from 'firebase/firestore'
function App() {
  const [isloggedout, setloggedout] = useState(false)
  const [farmersList,setFarmersList]=useState([]);
  const farmerList=collection(db,"crops");
    const [mainData, SetmainData] = useState([]);
  useEffect(() => {
    data && SetmainData(data.farmers);
  }, []);

  const [productData, SetProductData] = useState([]);
  useEffect(() => {
    data && SetProductData(data2.products);
  }, []);

  const [currentProduct, setcurrentProduct] = useState();

  const getFarmerList=async()=>{
    try{
  const data = await getDocs(farmerList)  
  console.log(data)
  const filteredData = data.docs.map((doc)=>({
    ...doc.data(),
    id: doc.id,}));
    console.log(filteredData)
    setFarmersList(filteredData);
    console.log(farmersList)
    }
    catch(err){
      console.error(err);
    }
  }
  useEffect(()=>{  
   getFarmerList();
  },[])
  console.log(farmersList);
 return (
    <>

     <Routes>
      <Route path='/' element={<WhoAreYou/>}></Route>
      <Route path='/farmers' element={<Farmers/>}>
      </Route>
      <Route path='/farmers/user' element={<Userpage />}>
                <Route path='' element={<Loginpage isloggedout={isloggedout} setloggedout={setloggedout} />}></Route>
                <Route path='Signup' element={<Signuppage isloggedout={isloggedout} setloggedout={setloggedout} />}></Route>
              </Route>  
      <Route path='/farmers/myproducts' element={<MyProducts farmersList={farmersList}/>}></Route>
      <Route path='/farmers/addproduct' element={<AddProducts farmersList={farmersList} getFarmerList={getFarmerList} setFarmersList={setFarmersList}/>}></Route>
    <Route path='/consumer-layout' element={<Layout />}>
      <Route index></Route>
    </Route>
     </Routes>
      <Routes>
        <Route path="/" element={<WhoAreYou /> }></Route>
        <Route path="/farmerpage" element={<FarmerPage />}>
          <Route path="/farmerpage/myproducts" element={<MyProducts />}></Route>
          <Route path="/farmerpage/addproduct" element={<AddProducts />}></Route>
        </Route>
        <Route
          path="allproducts/:productName"
          element={<Products setcurrentProduct={setcurrentProduct} currentProduct={currentProduct} value={productData} setValue={SetProductData} />}
        ></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        {/* <Route path='userpage' element={<UserPage />}>
              <Route path="" element={<Login />}></Route>
              <Route path='signup' element={<SignUp />}></Route>
            </Route> */}
        <Route path="/layout" element={<Layout />}>
          <Route path="/layout" element={<HomePage />}></Route>
          <Route path="/layout/farmers" element={<Farmers />}></Route>
          <Route path='/layout/About' element={<About />}></Route>
        <Route path="/layout/contactus" element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
