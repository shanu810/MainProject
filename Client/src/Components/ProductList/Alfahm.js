import React from 'react'
import './Alfahm.css'
import alfahm from '../Assets/chicken-tandoori-sherpa-curry-house.jpg'
import star from '../Assets/star1-removebg-preview.png';
import {Link} from 'react-router-dom';

function FriedRice() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={alfahm} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>Alfahm</h3>
            <p>Garlic Tender</p>
            <img src={star} className='star'></img>
            <p className='number'>(1101)</p>
            <p className='para'>AlFaham chicken, also called </p>
            <p className='para1'>“grilled chicken” or “Arabian grilled chicken,”</p>
            <p className='para2'>Pieces of chicken are marinated in a tasty mix of </p>
            <p className='para3'>spices, yogurt, garlic, and lemon juice. </p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <Link to="/prd"><button className="btn btn-warning button">Order Now</button></Link>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default FriedRice