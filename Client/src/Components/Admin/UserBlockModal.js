import axios from "axios";
import React, { useState } from "react";
import './UserBlockModal.css'

const UserBlockModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  //blocking the user
  const handleBlock = () => {
    axios
      .put(`http://localhost:3001/auth/block/${props.id}`)
      .then((res) => {
        console.log("User has been blocked");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* user block button */}
      {props.isBlocked ? (
        <button
          className="inline-flex h-[35px] items-center px-4 py-2 bg-green-600 
            transition ease-in-out delay-75 hover:bg-green-700 text-black text-sm 
              font-medium rounded-md hover:-translate-y-1 hover:scale-110 fa fa-solid fa-circle-user"
          onClick={toggleModal}
        ></button>
      ) : (
        <button
          className="inline-flex h-[35px] items-center px-4 py-2 bg-green-600 
            transition ease-in-out delay-75 hover:bg-green-700 text-black text-sm 
            font-medium rounded-md hover:-translate-y-1 hover:scale-110 fa fa-solid fa-circle-xmark"
          onClick={toggleModal}
        ></button>
      )}

      
      {/* <button className="inline-flex h-[35px] items-center px-4 py-2 bg-darkyellow -600 
              transition ease-in-out delay-75 hover:bg-yellow -700 text-white text-sm 
              font-medium rounded-md hover:-translate-y-1 hover:scale-110 fa fa-solid fa-circle-xmark"
        onClick={toggleModal}>

      </button> */}

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-20">
             {props.isBlocked ? <p className="font-bold text-[15px] ">Do you want to unblock this user?</p> :
              <p className="font-bold text-[15px] "> Do you want to block this user?</p>
             } 
            <button
              onClick={handleBlock}
              className="bg-peach font-bold text-black w-20 rounded h-8 mt-4
            hover:transition ease-in-out hover:-translate-y-1 hover:scale-90 shadow-custom"
            >
            yes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserBlockModal;