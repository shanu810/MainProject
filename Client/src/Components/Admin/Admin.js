import React from 'react'
import admin from './Admin.module.css'
import { Link } from 'react-router-dom'


function Admin() {
  return (
    <>
    <div>
  {/* Hello world */}
  <header role="banner">
    <h1>Welcome Admin</h1>
    <ul className={admin.utilities}>
      <br />
      {/* <li className="users">
        <a href="#">My Account</a>
      </li> */}
      {/* <li className="logout warn">
        <a href="">Log Out</a>
      </li> */}
    </ul>
  </header>
  <nav role="navigation">
    <ul className={admin.main}>
      <li className={admin.dashboard}>
        <a href="admindashboard">Dashboard</a>
      </li>
      <li className={admin.edit}>
        <a href="#">Products</a>
      </li>
      <li className={admin.write}>
        <a href="#">Users</a>
      </li>
      <li className={admin.comments}>
        <a href="#">Category</a>
      </li>
      <li className={admin.users}>
        <a href="#">Orders</a>
      </li>
    </ul>
  </nav>
  <div>
    <button className={admin.box}>Products</button>
    <Link to='/Users'><button className={admin.box}>Users</button></Link>
    <button className={admin.box}>Category</button><br></br>
    <button className={admin.box}>Orders</button>
    
  </div>
      </div>
    </>
  )
}

export default Admin