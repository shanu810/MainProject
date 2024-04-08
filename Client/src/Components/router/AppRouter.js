import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import Navbar from '../Home/Navbar'
import Home from '../Home/Home'
import ForgotPass from '../ForgotPassword/ForgotPass'
import Verification from '../Home/Verification'
import Admin from '../Admin/Admin'
import Products from '../Products/Product'
import ChickenBiriyani from '../ProductList/ChickenBiriyani';
import Shawarma from '../ProductList/Shawarma'
import Parotta from '../ProductList/Parotta'
import FriedRice from '../ProductList/FriedRice'
import Pasta from '../ProductList/Pasta'
import KuzhiMandhi from '../ProductList/KuzhiMandhi'
import Meals from '../ProductList/Meals'
import Alfahm from '../ProductList/Alfahm'
import Center from '../Home/Center'
import AdminLogin from '../Home/AdminLogin'
import Users from '../Admin/Users'
import UserProfile from '../User/UserProfile'
import UserProfileDisplay from '../User/UserProfileDisplay'
import Prd from '../Home/Prd'
import ChickPay from '../Payment/ChickPay'
import Sadhanam from '../Admin/Sadhanam'
// import AddProduct from '../Products/AddProduct'





function AppRouter() {
  return ( 
    
    <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/signupform" element={<SignupForm/>}/>
        <Route path="/ForgotPass" element={<ForgotPass/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Verification" element={<Verification/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/Chicken" element={<ChickenBiriyani/>}/>
        <Route path="/Shawarma" element={<Shawarma/>}/>
        <Route path="/Parotta" element={<Parotta/>}/>
        <Route path="/friedrice" element={<FriedRice/>}/>
        <Route path="/pasta" element={<Pasta/>}/>
        <Route path="/mandhi" element={<KuzhiMandhi/>}/>
        <Route path="/meals" element={<Meals/>}/>
        <Route path="/alfahm" element={<Alfahm/>}/>
        <Route path="/center" element={<Center/>}/>
        <Route path="/Adminlog" element={<AdminLogin/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/userprofiledisplay" element={<UserProfileDisplay/>}/>
        <Route path="/prd" element={<Prd/>}/>
        <Route path="/chickpay" element={<ChickPay/>}/>
        <Route path="/sadhanam" element={<Sadhanam/>}/>
        {/* <Route path="/addproduct" element={<AddProduct/>}/> */}
        
        
    </Routes>
  )
}

export default AppRouter