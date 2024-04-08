import React from 'react';
import login from './ForgotPass.module.css';
import { FaUser } from "react-icons/fa";
import  { useState} from 'react' 
import {ToastContainer,toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';


function ForgotPass() {

    const [email, setEmail] =useState('');
    const navigate = useNavigate();

    const handleSendOtp = (e) => {
        e.preventDefault();
        try {
          // Make a POST request to the backend with the email entered by the user
           axios.post('http://localhost:3001/auth/forgotpassword', { email })
          .then((res) => {
            // window.alert(res.data);
            console.log("OTP Sent"); 
            localStorage.setItem( "emailToken" ,res.data.emailToken);
            toast.success(res.data.message,{position:"top-center",autoClose:2000,style: {
              backgroundColor: "black",
              color:"white",
            },onClose:()=>{navigate('/Verification')}});
            
          }).catch((e)=>{console.log(e);toast.success(e.message,{position:"top-center",autoClose:2000,style: {
            backgroundColor: "black",
            color:"white"
          }});})
        } catch (error) {
          console.error('Failed to send OTP', error);
        }
      };
    
      const handleChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value);
      };
  return (
    <div className={login.bodystart}>
    <div className={login.wrapper}> 
        <form>
            <h1>Reset</h1>
            <div className={login.input_box}>
                <input value={email} onChange={handleChange} type="email" placeholder="Email" name='email' required/>
                <FaUser className={login.icon}/>
            </div>
            {/* <div className={login.input_box}>
                <input type="password" placeholder="New Password" required/>
                <FaLock className={login.icon}/>
            </div>
            <div className={login.input_box}>
                <input type="password" placeholder="Re - Enter Password" required/>
                <FaLock className={login.icon}/>
            </div> */}

            {/* <div className={login.remember_forgot}>
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div> */}
            <button onClick={handleSendOtp} type="submit">Send Otp</button>
            {/* <div className={login.register_link}>
                <p>Don't have an account?      <Link to='/SignupForm'>Register</Link></p>
            </div> */}
        </form>
    </div>
    <ToastContainer/>
    </div>
  )
}


export default ForgotPass