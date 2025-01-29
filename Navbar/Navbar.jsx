import React, { useContext, useState } from 'react';  
import { assets } from '../../assets/assets';  
import './Navbar.css';  
import { Link, useNavigate } from 'react-router-dom';  
import { StoreContext } from '../../context/StoreContext';  
import Searchle from '../Searchble/Searchle';  

const Navbar = ({ setShowlogin }) => {  
  const [showSearch, setShowSearch] = useState(false);  
  const [menu, setMenu] = useState("home");  
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);  
  const navigate = useNavigate();  

  const toggleSearch = () => {  
    setShowSearch(!showSearch);  
  };  

  const logout = () => {  
    localStorage.removeItem("token");  
    setToken("");  
    navigate("/");  
  };  

  return (  
    <div className='navbar'>  
      <Link to='/'>  
        <img src={assets.group1} alt="" className='logo' />  
      </Link>  
      <ul className="navbar-menu">  
        <Link to='/' className={menu==="home" ? "active" : ""} onClick={() => setMenu("home")}>home</Link>  
        <a href='#explore-menu' className={menu==="menu" ? "active" : ""} onClick={() => setMenu("menu")}>Product-List</a>  
        <a href='#footer' className={menu==="contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>contact-us</a>  
      </ul>  
      <div className="navbar-right">  
        <img onClick={toggleSearch} className='search-icon1' src={assets.search_icon} alt="" />  
        
        {showSearch && <Searchle />}  
        
        <div className="navbar-search-icon">  
            <Link to='/cart'><img src={assets.car_liveStock} alt="" /></Link>  
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>  
        </div>  
        {!token ? (  
          <button onClick={() => setShowlogin(true)} className='sigin-in'>sign in</button>  
        ) : (  
          <div className='navbar-profile'>  
            <img src={assets.profile_icon} alt="" />  
            <ul className='navbar-profile-dropdown'>  
              <li onClick={() => navigate("/myorders")}><img src={assets.basket_icon} alt="" /><p>Order</p></li>  
              <hr />  
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>  
            </ul>  
          </div>  
        )}  
      </div>  
    </div>  
  );  
};  

export default Navbar;