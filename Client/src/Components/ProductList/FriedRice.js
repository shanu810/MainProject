import React from 'react'
import './FriedRice.css'
import rice from '../Assets/47633563.jpg'
import star from '../Assets/star1-removebg-preview.png';

function FriedRice() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={rice} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>Fried Rice</h3>
            <p>Garlic Tender</p>
            <img src={star} className='star'></img>
            <p className='number'>(1101)</p>
            <p className='para'>Fried rice is a dish of cooked rice that </p>
            <p className='para1'>has been stir-fried in a wok or a frying pan and is</p>
            <p className='para2'>usually mixed with other ingredients such as </p>
            <p className='para3'>eggs, vegetables, seafood, or meat. </p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <button className="btn btn-warning button">Order Now</button>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default FriedRice