import React from 'react'
import './Parotta.css'
import Parottas from '../Assets/Roti-Canai.jpg'
import star from '../Assets/star1-removebg-preview.png';

function Parotta() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={Parottas} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>Parotta</h3>
            <p>Kerala Style</p>
            <img src={star} className='star'></img>
            <p className='number'>(2171)</p>
            <p className='para'> Porotta is a layered Indian and Sri Lankan </p>
            <p className='para1'>flatbread made from Maida or Atta, alternatively known</p>
            <p className='para2'>as flaky ribbon pancake. It is very common in the Indian </p>
            <p className='para3'>states of South India and widely available. </p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <button className="btn btn-warning button">Order Now</button>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default Parotta