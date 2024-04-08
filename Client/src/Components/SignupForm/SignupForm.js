import { useState,React,prevState} from 'react';
import signup from './SignupForm.module.css';
import { FaUser,FaLock,FaPhone,FaVoicemail } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



 
function SignupForm() {

    const navigate=useNavigate();
    const [signupForm,setSignupForm] = useState({
        username:"",
        email: "",
        phone :"",
        password :""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setSignupForm(prevState=({
            ...prevState,
            [name]:value,
        }))
    }
     const handleSubmit = (e) => {
      e.preventDefault();
        axios.post('http://localhost:3001/auth/register',{
        "username": signupForm.username,
        "email": signupForm.email,
        "phone": signupForm.phone,
        "password": signupForm.password
      })
        .then((data) => {
            toast.success("Register successful");
            setTimeout(() => {
                navigate('/loginForm');
              }, 2000); 
          console.log(data.data);
          

        })
        .catch((error) => {
          console.log(error);
          toast.error("Email Already Exist");
        });
     }
      return (
        
    <div className={signup.firstbody}>
    <div className={signup.wrapper}>
        <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <div className={signup.input_box}>
                <input value={signupForm.username} onChange={handleChange} name='username' type="username" placeholder="username" required/>
                <FaUser className={signup.icon}/>
            </div>
            <div className={signup.input_box}>
                <input value={signupForm.email} onChange={handleChange} name='email' type="email" placeholder="email" required/>
                <FaVoicemail className={signup.icon}/>
            </div>
            <div className={signup.input_box}>
                <input value={signupForm.phone} onChange={handleChange} name='phone' type="phone" placeholder="phone" required/>
                <FaPhone className={signup.icon}/>
            </div>
            <div className={signup.input_box}>
                <input value={signupForm.password} onChange={handleChange} name='password' type="password" placeholder="password" required/>
                <FaLock className={signup.icon}/>
            </div>


            {/* <div className={signup.remember_forgot}>
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div> */}
            <button type="submit">Create Account</button>
            <div className={signup.register_link}>
                {/* <p>Don't have an account? <a href="#">Register</a></p> */}
            </div>
        </form>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default SignupForm