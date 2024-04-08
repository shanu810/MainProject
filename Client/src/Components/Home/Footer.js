import React from 'react'
import './Footer.css'

function Footer() {
  return (
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
  )
}

export default Footer