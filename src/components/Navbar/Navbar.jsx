import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import GridIcon from "../../assets/icon-grid.svg";
import userLogo from "../../assets/userImage.png";

function Navbar() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <div className="navbar-desktop">
        <div className="nav-left">
          <div className="logo">
            <img src={Logo} alt="Acadamier Logo" />
          </div>
          <div className="category-menu">
            <img src={GridIcon} alt="Category Icon" className="category-icon" />
            <span className="category-label">Category</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-icon">🔍</button>
          </div>
        </div>
        <div className="nav-right">
          <button className="btn-instructor">Become an Instructor</button>
          <button className="btn-my-learning">My Learning</button>
          <div className="icon">
            <span>♡</span>
            <span className="icon-badge">2</span>
          </div>
          <div className="icon">
            <span>🛒</span>
            <span className="icon-badge">3</span>
          </div>
          <img className="user-avatar" src={userLogo} alt="User" />
        </div>
      </div>

      
      <div className="navbar-mobile">
        <div className="mobile-left">
          
          <label htmlFor="menu-toggle" className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </div>
        <div className="mobile-center">
          <div className="logo">
            <img src={Logo} alt="Acadamier Logo" />
          </div>
        </div>
        <div className="mobile-right">
          <button className="search-icon">🔍</button>
          <div className="icon">
            <span>♡</span>
          </div>
          <div className="icon">
            <span>🛒</span>
          </div>
        </div>
      </div>
      
      <div className="mobile-menu">
        <div className="mobile-menu-content">
          <div className="mobile-user">
            <img
              src={userLogo}
              alt="User"
              className="mobile-user-avatar"
            />
          </div>
          <button className="btn-instructor">Become an Instructor</button>
          <button className="btn-my-learning">My Learning</button>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;