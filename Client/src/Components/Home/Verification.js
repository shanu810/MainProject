import React, {useRef} from 'react'
import verifi from './Verification.module.css'
import logo from '../Assets/d837cca5ebd76fbe268015bd9fe51b07_fu78lk.png'
import { FaUser,FaLock } from "react-icons/fa";
import { useNavigate  } from 'react-router';
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify'


const Verification = () => {
const navigate =  useNavigate();
const otp=useRef(null);
const pass=useRef(null);
const cPass=useRef(null);

  const handleVerify=(e)=>{
    e.preventDefault();
    if (pass.current.value===cPass.current.value){
      const emailToken=localStorage.getItem("emailToken");
    //axios call .i.e post data to backend and do the verification
    axios.post("http://localhost:3001/auth/verification",
    {
      otp:Number(otp.current.value),
      password:pass.current.value,
      emailToken
    })
  .then((res)=>{
    
    //if succesfull ,show toast message,navigate to login page
    toast.success(res.data.message,{position:"top-center",autoClose:2000,style: {
      backgroundColor: "black",
      color:"white",
    },onClose:()=>{localStorage.removeItem('emailToken');navigate('/loginForm')}});
  }).catch((e)=>{
    //here we write condition when the otp entered is wrong 
    console.log(e);
  })}
    else{
      toast("password doesn't match")
    }
  }
  return (
    <form>
    <div className={verifi.head}>
        <div className={verifi.main}>
          <img className={verifi.img1} src={logo}></img>
          <h1 className={verifi.font}>Reset Password</h1>
          <p>Enter OTP given below</p>
          <div className={verifi.input_box}>
                <input name="Otp" type="text" placeholder="Enter Otp" ref={otp} required/>
                <FaUser className={verifi.icon}/>
            </div>
            {/* <button type="submit" className={verifi.but}>Request Otp</button><br></br><br></br> */}
            <p>Set your new password to securely access your account</p>
            <div className={verifi.input_box}>
                <input name="Otp" type="text" placeholder="New Password" ref={pass} required/>
                <FaUser className={verifi.icon}/>
            </div>
            <div className={verifi.input_box}>
                <input  name="password" type="password" placeholder="Password" ref={cPass} required/>
                <FaLock className={verifi.icon}/>
            </div>
            <button type="submit" className={verifi.but}
            onClick={handleVerify} 
            >Verify</button>
        </div>
        <ToastContainer/>
    </div>
    
    </form>

    
  )
}

export default Verification