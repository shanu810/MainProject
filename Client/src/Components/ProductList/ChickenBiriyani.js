import React from 'react'
import './ChickenBiriyani.css'
import biriyani from '../Assets/chickenbiri.jpg'
import star from '../Assets/star1-removebg-preview.png';
import {Link} from 'react-router-dom';

function ChickenBiriyani() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={biriyani} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>Chicken Biriyani</h3>
            <p> juicy pieces</p>
            <img src={star} className='star'></img>
            <p className='number'>(1241)</p>
            <p className='para'>Biryani is a mixed rice dish, mainly popular </p>
            <p className='para1'> in South Asia.It is made with rice, some type of meat</p>
            <p className='para2'> and spices.To cater to vegetarians,in some cases,</p>
            <p className='para3'> it is prepared by substituting vegetables for the meat. </p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <Link to="/chickpay"><button className="btn btn-warning button">Order Now</button></Link>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default ChickenBiriyani