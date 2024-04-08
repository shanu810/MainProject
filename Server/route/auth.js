import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};


const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider };



// const express = require('express');
// const User=require('../models/user');
// const router= express.Router()

// //user registration 
// router.post('/register',async (req,res)=>{
//     try {
//         //console.log(req.body);
//         const{username,email,password,phone}=req.body
//         const hashedPassword=await bcrypt.hash(password,10)
//         const user=new User({username:username,email:email,phone:phone,password:hashedPassword})
//         await user.save()
//         res.status(200).json({message:"User Registered"})
        
//     } catch (error) {
//         console.log(error)
//        res.status(400).json({error:"registration failed"})
        
//     }
// })


// module.exports=router


