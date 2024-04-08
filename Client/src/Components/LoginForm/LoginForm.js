import {useState,prevState,React} from 'react';
import loging from './LoginForm.module.css';
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useDispatch} from  "react-redux";
import { login } from '../../Redux/Slice/authSlice';



function LoginForm() {

   const dispatch=useDispatch();

    const navigate=useNavigate();
    const [LoginForm,setLoginForm] = useState({
        username:"",
        password :""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setLoginForm(prevState=({
            ...prevState,
            [name]:value,
        }))
    }
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await axios.post('http://localhost:3001/auth/login',{
          "email": LoginForm.email,
          "password": LoginForm.password
        })
            dispatch(login(response.data.token))
            localStorage.setItem('token',response.data.token)
            toast.success("Login successful");
            setTimeout(() => {
              navigate('/home');
            }, 2000); 
            
          }
          catch(error) {
            console.log(error);
            toast.error("Email or Password error");
          };
       }
  return (
    <div className={loging.bodystart}>
    <div className={loging.wrapper}>
        <form onSubmit={handleSubmit} action=''>
            <h1>Login</h1>
            <div className={loging.input_box}>
                <input value={LoginForm.email} onChange={handleChange} name="email" type="text" placeholder="Email" required/>
                <FaUser className={loging.icon}/>
            </div>
            <div className={loging.input_box}>
                <input value={LoginForm.password} onChange={handleChange} name="password" type="password" placeholder="Password" required/>
                <FaLock className={loging.icon}/>
            </div>

            <div className={loging.remember_forgot}>
                <label className={loging.edit}><input type="checkbox"/>Remember me</label>
                <a href="#"><Link to='/ForgotPass'>Forgot Password?</Link></a>
            </div>
            <button type="submit">Login</button>
            <div className={loging.register_link}>
                <p>Don't have an account?      <Link to='/SignupForm'>Register</Link></p>
            </div>
        </form>
    </div>
    <ToastContainer/>
    </div>
  )
}


export default LoginForm