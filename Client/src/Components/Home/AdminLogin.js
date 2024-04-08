import React from 'react'
import './AdminLogin.css'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {useState,prevState} from 'react';
import axios from "axios";

function AdminLogin() {

    const navigate=useNavigate();
    const [AdminLogin,setAdminLogin] = useState({
        email:"",
        password :""
    })
    const handleChange = (e) => {
        const{name,value}=e.target;
        setAdminLogin(prevState=({
            ...prevState,
            [name]:value,
        }))
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(AdminLogin);
        try{
            const response= await axios.post("http://localhost:3001/auth/Adminlogin",{
                email:AdminLogin.email, 
                password :AdminLogin.password
            });
            localStorage.setItem("token",response.data.token);
            toast.success("Login successful");
            setTimeout(() => {
             navigate('/admin');
            }, 2000);
            console.log(response.data)
            
        }
        catch(error){
            console.log(error);
            toast.error("Email or Password error");
        }
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //        axios.post('http://localhost:3001/auth/Adminlogin',{
    //       "email": AdminLogin.email,
    //       "password": AdminLogin.password
    //     })
    //     .then((data) => {
    //         toast.success("Register successful");
    //         setTimeout(() => {
    //             navigate('/admin');
    //           }, 2000); 
    //       console.log(data.data);
          
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       toast.error("Email Already Exist");
    //     });
    //  }

  return (
    <>
    <div className="container">
    <div className="login-container">
      <h1> Login</h1>
      <form onSubmit={handleSubmit} action="#" className="form-login">
        <div className="textfield">
          <label htmlFor="email"> E-mail</label>
          <input type="email" onChange={handleChange} name="email" placeholder="E-mail" style={{height:50}} />
        </div>
        <div className="textfield">
          <label htmlFor="password"> Password</label>
          <input type="password" onChange={handleChange} name="password" placeholder="Password" style={{height:50}}/>
        </div>
        {/* <a className="forgot-password" href="#">
          Esqueceu sua senha?
        </a> */}
        <button type="submit" className="btn-login">Login </button>
      </form>
      <div></div>
    </div>
    <ToastContainer/>
  </div>
</>
  )
}

export default AdminLogin