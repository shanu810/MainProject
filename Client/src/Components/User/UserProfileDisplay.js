import React from 'react';

const UserProfileDisplay = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-btn p-6 mt-3">
      <h2 className="text-xl font-600 mb-4">User Information</h2>
      <div className='font-400'>
        <p><span className='text-black'>Name : </span>  {user.username}</p>
        <p><span className='text-black'>Phone :</span>  {user.mobileNumber}</p>
        <p><span className='text-black'>Pincode :</span>  {user.pincode}</p>
        <p><span className='text-black'>Address :</span>  {user.address}</p>
        <p><span className='text-black'>City :</span>  {user.city}</p>
      </div>
    </div>
  );
};
 
export default UserProfileDisplay;