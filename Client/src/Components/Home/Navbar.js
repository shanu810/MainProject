import React,{useState} from 'react'
import { useSelector,useDispatch } from  "react-redux";
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Slice/authSlice'



function Navbar() {
  const token = useSelector((state)=>state.auth.token)
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogOut=()=>{
  dispatch(logout());
  }


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  return (
      <div>
        <>
      <a href="#" className="scroll-top" id="scroll-top">
          <i className="bx bx-chevrons-up scroll_top_icon" />
        </a>
        {/* Header */}
        <header id="header" className="menu-header">
          <nav className="nav-container body-container">
            <a href="#" className="nav-logo">SingleSpot</a>
            <div className="nav-menu" id="nav-menu-id">
              <ul className="nav-list">
                <li className="nav-item " style={{marginTop:9}}><a href="#home" className="nav-link active-link">Home</a></li>
                <li className="nav-item" style={{marginTop:9}}><a href="#menu" className="nav-link">Menu</a></li>
                <li className="nav-item" style={{marginTop:9}}><a href="#services" className="nav-link">Services</a></li>
                <li className="nav-item" style={{marginTop:9}}><a href="#about" className="nav-link">About</a></li>
                
                
                {token? (
              //     <li>
              //       <div className="dropdown">
              //       <button className='butt1' onClick={toggleDropdown}>
              //    <i className="fa fa-user"></i>
              //  </button>
              //  {showDropdown && (
              //    <ul className="dropdown-menu">
              //     <li>
              //       <Link  to="/userprofile">MyProfile</Link>
              //     </li>
              //     <li>
              //     <Link  to="/Chicken">MyOrders</Link>
              //     </li>
              //   </ul>
              // )}
              // </div>
              // </li>
              <>
              <Link to="/LoginForm">
                <li className='nav-item' style={{width:50,textDecoration:"none",marginTop:10}} onClick={handleLogOut}>LogOut</li></Link>
                <Link to="/userprofile">
                <li className="nav-item"nav-item style={{marginTop:9}}><a className="nav-link">My Profile</a></li></Link>
                </>
                
                ) : (
                  <li>
                  <Link to="/LoginForm">
                    <button className='btn' style={{marginLeft:10, position:'relative'}}>Login</button>
                  </Link>
                  </li>
                )}
              
 

                {/* {token? (
                  <li>
                <Link to="/LoginForm">
                  <button onClick={handleLogOut}>LogOut</button></Link>
                  </li>
                ) : (
                  <li>
                  <Link to="/LoginForm">
                    <button className='btn'></button>
                  </Link>
                  </li>
                )} */}


                {/* <li><i className="bx bx-moon dark-light" id="theme" /></li> */}
              </ul>
            </div>
            <div className="nav-toggle" id="nav-toggle">
              <i className="bx bx-menu" />
            </div>
          </nav>
        </header>
        <main></main>
        </>
    </div>
  )
}


export default Navbar

{/* <li>
<div className="dropdown">
<button className='butt1' onClick={toggleDropdown}>
<i className="fa fa-user"></i>
</button>
{showDropdown && (
<ul className="dropdown-menu">
<li>
<Link  to="/userprofile">MyProfile</Link>
</li>
<li>
<Link  to="/Chicken">MyOrders</Link>
</li> */}