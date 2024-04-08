import React from 'react'
import './Pasta.css'
import pasta from '../Assets/19744.jpg'
import star from '../Assets/star1-removebg-preview.png';

function Pasta() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={pasta} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>Pasta</h3>
            <p>American vermicelli</p>
            <img src={star} className='star'></img>
            <p className='number'>(1101)</p>
            <p className='para'>pasta, any of several starchy food preparations </p>
            <p className='para1'>(pasta alimentaria) frequently associated</p>
            <p className='para2'>with Italian cuisine and made from semolina,  </p>
            <p className='para3'>the granular product obtained from the endosperm</p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <button className="btn btn-warning button">Order Now</button>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default Pasta