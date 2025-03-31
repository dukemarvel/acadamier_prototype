import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import GridIcon from "../../assets/icon-grid.svg";
import userLogo from "../../assets/userImage.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: Logo + Category */}
      <div className="nav-left">
        <div className="logo">
          <img src={Logo} alt="Acadamier Logo" />
        </div>
        <div className="category-menu">
          {/* Grid icon for Category */}
          <img src={GridIcon} alt="Category Icon" className="category-icon" />
          <span className="category-label">Category</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        {/* Center: Search Bar */}
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-icon">🔍</button>
        </div>
      </div>

      {/* Right side: buttons & icons */}
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
    </nav>
  );
}

export default Navbar;