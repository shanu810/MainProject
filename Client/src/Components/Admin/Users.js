// import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserBlockModal from './UserBlockModal';
import UserDeleteModal from './UserDeleteModal'
import './Users.css'

const Users= () =>{
    const [users, setUsers] = useState([]);

    useEffect( ()=>{
    
      axios.get('http://localhost:3001/auth/allusers')
      .then((response)=>{
        console.log(response.data);
       setUsers(response.data);
        }).catch((err)=>console.log(err))
      },[])
  return (
    <>
    <h1 className='text-center font-bold'>User Details</h1> 
    <div className='container mx-auto'>
           
        <table className='w-[90%] border border-gray-300 mx-auto'>
        <thead>
          
          <tr className='bg-gray-200'>
            <th className='px-4 py-2 border border-gray-300'>NAME</th>
           <th className='px-4 py-2 border border-gray-300'>EMAIL ID</th> 
            <th className='px-4 py-2 border border-gray-300 w-[200px] '>ACTIONS</th>
          </tr>
        </thead>
        <tbody>

        {users.slice().reverse().map((item, index)=>(
          <tr key={index}>
          <td className='px-4 py-2 border text-center border-gray-300 w-[180px]'>{item.username}</td>
          <td className='px-4 py-2 border text-center border-gray-300'>{item.email}</td>
          <td className='px-4 py-2 border text-center border-gray-300'>

             
              
              <UserBlockModal id={item._id} isBlocked={item.blocked}/>


              
              <UserDeleteModal id={item._id}/>
              

            </td>
          </tr>
        ))}
          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Users