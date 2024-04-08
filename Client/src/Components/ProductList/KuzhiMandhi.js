import React from 'react'
import './KuzhiMandhi.css'
import star from '../Assets/star1-removebg-preview.png';
import mandhi from '../Assets/kuzhimanthi-hot-spicy-manthi-arabic-chicken-biryani-kuzhimanthi-hot-spicy-manthi-arabic-chicken-biryani-cooked-meat-189647244.webp'

function KuzhiMandhi() {
  return (
    <>
    <div className='containerzz'>
        <div className='side1'>
            <img src={mandhi} className='img1'></img>
        </div>
        <div className='side2'>
            <h3>KuzhiMandhi</h3>
            <p>Arabian delicious</p>
            <img src={star} className='star'></img>
            <p className='number'>(2564)</p>
            <p className='para'>This is a meat prepared with the rice in a special</p>
            <p className='para1'>pit like baking pot(hence the name Kuzhi= pit) where</p>
            <p className='para2'> the meat and spices are baked together with rice. The </p>
            <p className='para3'> spices and the oil from meat mix together special taste. </p>

            <input type='number' style={{width:55,marginLeft:20}}></input><br></br>
            <button className="btn btn-warning button">Order Now</button>
            <button className="btn btn-warning button">Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default KuzhiMandhi