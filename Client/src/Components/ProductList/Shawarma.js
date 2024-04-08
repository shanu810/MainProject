import React from 'react'
import './Shawarma.css'
import shawarma  from '../Assets/Shawarma.jpg'; 
import star from '../Assets/star1-removebg-preview.png';

function Shawarma() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={shawarma} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>Shawarma</h3>
            <p>Spicy Mexican</p>
            <img src={star} className='star'></img>
            <p className='number'>(1101)</p>
            <p className='para'>Shawarma (/ʃəˈwɑːrmə/; Arabic: شاورما) is a </p>
            <p className='para1'>Middle Eastern dish that originated in the Levant</p>
            <p className='para2'>region of the Arab world during the Ottoman Empire </p>
            <p className='para3'>consisting of meat that is cut into thin slices. </p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <button className="btn btn-warning button">Order Now</button>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
    
  )
}

export default Shawarma