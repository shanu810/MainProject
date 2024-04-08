import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './UserDeleteModal.css'
// import { useParams } from 'react-router-dom';
const UserDeleteModal = (props) => {
  useEffect(()=>{
    console.log(props);
  } , [])

    const [modal, setModal] = useState(false);
    // const {productId} = useParams()

    const toggleModal = () => {
        setModal(!modal);
    };

  //deleting the user
  const handleDelete =()=>{
    try {
        axios.delete(`http://localhost:3001/auth/deleteuser/${props.id}`)
        .then((response)=>{
            console.log(response.data)
            window.location.reload()
        })
        .catch((error)=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
  }


  return (
    <>

        {/* user page button */}
      <button
        className="inline-flex h-[35px] ml-5 items-center px-4 py-2 bg-red-600 
              transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm 
              font-medium rounded-md hover:-translate-y-1 hover:scale-110 fa fa-solid fa-trash"
        onClick={toggleModal}>

      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-20">

            <p className='font-bold text-[15px] '>Are you sure <br/> you want to delete?</p>

            <button onClick={handleDelete} className='bg-red-700 ml-2 font-bold text-white w-20 rounded h-8 mt-4 
            hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom'>Yes</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDeleteModal;