import React from 'react'
import Navbar from '../Home/Navbar'
import './Product.css'
import img1 from '../Assets/chickenbiri.jpg'
import img2 from '../Assets/kuzhimanthi-hot-spicy-manthi-arabic-chicken-biryani-kuzhimanthi-hot-spicy-manthi-arabic-chicken-biryani-cooked-meat-189647244.webp'
import img3 from '../Assets/2150857788.jpg'
import img4 from '../Assets/Roti-Canai.jpg'
import img5 from '../Assets/47633563.jpg'
import img6 from '../Assets/19744.jpg'
import img7 from '../Assets/chicken-tandoori-sherpa-curry-house.jpg'
import img8 from '../Assets/Shawarma.jpg'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
    <Navbar/>
    <br></br><br></br><br></br><br></br>
    <div className='heading'>
        <h1>Today's Specials</h1></div>
        <h1 className='edit1'>--------</h1>

<div className='main'>
    <div className='box1'>
        <img src={img1} className='image'></img>
        <h5>Chicken Biriyani</h5>
        <p className='p1'>100 : $</p>
        <Link to="/Chicken"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    <div className='box1'>
        <img src={img2} className='image'></img>
        <h5>kuzhimanthi</h5>
        <p className='p1'>100 : $</p>
        <Link to="/mandhi"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    <div className='box1'>
        <img src={img3} className='image'></img>
        <h5>Meals </h5>
        <p className='p1'>100 : $</p>
        <Link to="/meals"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    </div>
    <div className='edit11'>
    <div className='box1'>
        <img src={img4} className='image'></img>
        <h5>Parotta </h5>
        <p className='p1'>100 : $</p>
        <Link to="/Parotta"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    <div className='box1'>
        <img src={img5} className='image'></img>
        <h5>Fried Rice </h5>
        <p className='p1'>100 : $</p>
        <Link to="/friedrice"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    <div className='box1'>
        <img src={img6} className='image'></img>
        <h5>Pasta </h5>
        <p className='p1'>100 : $</p>
        <Link to="/Pasta"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    </div>
    <div className='edit12'>
    <div className='box1'>
        <img src={img7} className='image'></img>
        <h5>Al-Fahm </h5>
        <p className='p1'>100 : $</p>
        <Link to="/alfahm"><button className='btn btn-warning   style1'> Buy Now</button></Link>
    </div>
    <div className='box1'>
        <img src={img8} className='image'></img>
        <h5>Shawarma </h5>
        <p className='p1'>100 : $</p>
       <Link to='/Shawarma'><button className='btn btn-warning  style1'>Buy Now</button></Link>
    </div>
    </div>

{/* //Footer */}
<div className='futer'>
    <div className="last" style={{background: 'rgb(221, 234, 236)'}}>
          <footer className="footer section body-container">
            <div className="footer-container body-grid">
              <div className="footer-content">
                <a href="#" className="footer-logo">SingleSpot</a>
                <span className="footer-description">foodies</span>
                <div>
                  <a href="#" className="footer-social"><i className="bx bxl-facebook-circle" /></a>
                  <a href="#" className="footer-social"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="footer-social"><i className="bx bxl-twitter" /></a>
                </div>
              </div>
              <div className="footer-content">
                <h3 className="footer-title">Services</h3>
                <ul>
                  <li><a href="^" className="footer-link">Delivery</a></li>
                  <li><a href="^" className="footer-link">Pricing</a></li>
                  <li><a href="^" className="footer-link">Custom Order</a></li>
                  <li><a href="^" className="footer-link">Reserve your spot</a></li>
                </ul>
              </div>
              <div className="footer-content">
                <h3 className="footer-title">Information</h3>
                <ul>
                  <li><a href="^" className="footer-link">Event</a></li>
                  <li><a href="^" className="footer-link">Contact</a></li>
                  <li><a href="^" className="footer-link">Privacy policy</a></li>
                  <li><a href="^" className="footer-link">Terms of services</a></li>
                </ul>
              </div>
              <div className="footer-content">
                <h3 className="footer-title">Adress</h3>
                <ul>
                  <li>City - Country</li>
                  <li>Lorem ipsum #999</li>
                  <li>111 - 222 - 333</li>
                  <li>SingleSpot@mail.com</li>
                </ul>
              </div>
            </div>
            <p className="footer-copy">© 2024 SingleSpot. All right reserved</p>
            <p className="footer-copy">Disigned by: <a href target="_blank">Mohamed Sanhar</a></p>
          </footer>
        </div>
        </div>
    </>
  )
}

export default Product