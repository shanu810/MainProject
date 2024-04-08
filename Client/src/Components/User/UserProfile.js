import React, { useEffect, useState } from 'react';
//import sidebarimg from '../USER/assets/usersidebar.png';
import axios from 'axios';
import UserProfileDisplay from '../User/UserProfileDisplay';
import Navbar from '../Home/Navbar'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  const navigate=useNavigate();
  const token = localStorage.getItem('token');
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/userprofile/${token}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        
      });
  }, []);

  const handleEdit = () => {

    const userDetails ={
      username:user.username, 
      mobileNumber:user.mobileNumber,
      address:user.address,
      pincode:user.pincode,
      city:user.city}

    axios.put(`http://localhost:3001/auth/editProfile/${token}`, userDetails)
      .then((response) => {
        console.log(response.data);
        toast.success("Profile Updated");
            setTimeout(() => {
              navigate('/home');
            }, 2000); 
      })
      .catch((error) => {
        console.log(error);
        toast.error("update error");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
    <Navbar/>
     <div className="flex" style={{marginTop:50}}>
      {/* Sidebar */}
     <div className="bg-peach w-64 min-h-screen border-l border-t-0 border-b-0 border-yellow border-[5px]">
        {/* <img src={ } alt="sidebar" className="min-h-screen" /> */}
      </div>

      {/* Main content */}
      <div className="flex-1 mt-2 p-3">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-600 mb-4">User Profile</h2>
            {/* Profile form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Display Username */}
                <div className="col-span-2">
                  <p>Hello, {user.username}</p>
                </div>

                {/* email */}
                <div>
                  <label className="block text-sm font-medium text-gray">Email id</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={user.emai}
                    className="mt-1 bg-white shadow-ip block w-full sm:text-sm rounded-md h-9"
                  />
                </div>

                {/* Mobile number */}
                <div>
                  <label className="block text-sm font-medium text-gray">10-digit Mobile Number</label>
                  <input
                    type="text"
                    id="mobile_number"
                    name="mobileNumber"
                    value={user.mobileNumber || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-ip block w-full sm:text-sm rounded-md h-9"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-medium text-gray">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={user.pincode || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-ip block w-full sm:text-sm rounded-md h-9"
                  />
                </div>

                {/* Address */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray">Address (Area and Street)</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={user.address || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-ip block w-full sm:text-sm rounded-md h-9"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray">City/District</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={user.city || ''}
                    onChange={handleChange}
                    className="mt-1 shadow-ip block w-full sm:text-sm rounded-md h-9"
                  />
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-end">
              <button
                  onClick={handleEdit}
                  type="button"
                  className="bg-peach hover:bg-peach text-black font-semibold py-2 px-4 rounded-md shadow-md mr-2"
                >Save</button>
              </div>
            </form>
          </div>
        </div>
        <UserProfileDisplay user={user}/>
      </div>
      <ToastContainer/>
    </div>
    </>
  );
};

export default UserProfile;