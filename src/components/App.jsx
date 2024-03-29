import "./App.css";
import HomePage from "./HomePage";
import Products from "./Products";
import data from "../farmers.json";
import FarmerPage from "./FarmerPage";
import About from "./About";
import ContactUs from "./ContactUs";
import data2 from "../Products.json";
import AllProducts from "./AllProducts";
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import WhoAreYou from './WhoAreYou'
import MyProducts from './MyProducts'
import AddProducts from './AddProducts';
import Layout from './Layout'
import Signuppage from './Signuppage'
import Userpage from './Userpage'
import Loginpage from './Loginpage'
import BuyProducts from "./BuyProducts";
import { db,auth } from './firebase-config'
import { getDocs, collection, getDoc } from 'firebase/firestore'
import Crops from "./Crops.jsx";
import PaymentForm from "./Payment";
import StarRating from "./StarRaiting";
import Receipt from "./Receipt";
function App() {
  const [isloggedout, setloggedout] = useState(false)
  const [cropList, setcropList] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const cropsDB = collection(db, "crops");
  const farmersDB = collection(db, "farmers");
  const [mainData, SetmainData] = useState([]);
  const [currentProduct, setcurrentProduct] = useState();

  useEffect(() => {
    data && SetmainData(data.farmers);
  }, []);

  const [productData, SetProductData] = useState([]);
  useEffect(() => {
    data && SetProductData(data2.products);
  }, []);


  const getFarmerList = async () => {
    try {
      const crops = await getDocs(cropsDB)
      const filteredCrops = crops.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setcropList(filteredCrops);

      const farmers = await getDocs(farmersDB)
      const filteredFarmers = farmers.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFarmers(filteredFarmers);
    }
    catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getFarmerList();
  }, [])
  console.log(cropList.filter((crop) => auth?.currentUser?.uid === crop.farmerId));
  return (
    <>

      <Routes>
        <Route path='/' element={<WhoAreYou />}></Route>
        <Route path='/user' element={<Userpage />}>
          <Route path='' element={<Loginpage isloggedout={isloggedout} setloggedout={setloggedout}  cropList={cropList} farmer={farmers}/>}></Route>
          <Route path='Signup' element={<Signuppage isloggedout={isloggedout} setloggedout={setloggedout} cropList={cropList} farmer={farmers}/>}></Route>
        </Route>
        <Route path='/my-products' element={<MyProducts cropList={cropList} />}></Route>
        <Route path='/add-product' element={<AddProducts cropList={cropList} getFarmerList={getFarmerList} setcropList={setcropList} />}></Route>
        <Route path='/consumer-layout' element={<Layout />}>
          <Route index></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/user/Signup/FarmerPage" element={<FarmerPage />}></Route>
        
      </Routes>
      <Routes>
        <Route
          path="allproducts/:productName"
          element={
            <Products
              setcurrentProduct={setcurrentProduct}
              currentProduct={currentProduct}
              value={productData}
              setValue={SetProductData}
            />
          }
        ></Route>
        <Route path="/buy-products" element={<BuyProducts />}></Route>
        <Route path="/crops" element={<Crops/>}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/Allproducts" element={<AllProducts  cropList={cropList}/>}></Route>
        {/* <Route path='userpage' element={<UserPage />}>
              <Route path="" element={<Login />}></Route>
              <Route path='signup' element={<SignUp />}></Route>
            </Route> */}
        <Route path="/layout" element={<Layout />}>
          <Route path="/layout" element={<HomePage />}></Route>
          <Route path='/layout/About' element={<About />}></Route>
        <Route path="/layout/crops" element={<Crops/>}></Route>
        <Route path="/layout/payment" element={<PaymentForm/>}></Route>
        <Route path="/layout/receipt" element={<Receipt/>}></Route>
          <Route path="/layout/contactus" element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
