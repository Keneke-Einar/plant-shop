import React from 'react';
import logo from '../assets/logo.png'; 
import profileIcon from '../assets/profile-icon.png'; 
import cartIcon from '../assets/cart-icon.png';
import searchIcon from '../assets/search-icon.png';

    // ---------------------------------------------------------------------------------------------------------------------------
    // Нужно будет интергрировать это в style.css
    // ---------------------------------------------------------------------------------------------------------------------------

const Header = () => {
    const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 140px', // Vertical and horizontal padding
    backgroundColor: '#004F44',
    color: 'white',
    position: 'relative', // Allows for absolute positioning inside
    height: '128px', // Adjust as needed
  };

  const logoContainerStyle = {
    position: 'absolute', // Takes the logo out of the flex flow
    left: '50%',
    transform: 'translateX(-50%)', // Centers the logo horizontally
    top: '50%',
    transform: 'translate(-50%, -50%)', // Centers the logo vertically in the header
  };

  const logoStyle = {
    width: '120px', // Logo width
    height: '90px', // Logo height
    objectFit: 'contain',
  };

  const navStyle = {
    display: 'flex',
    gap: '40px', // Space between navigation links
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 400,
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '16px', // Space between buttons
  };

  const buttonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: '8px', // Button padding
    color: 'white',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
  };

  return (
    // ---------------------------------------------------------------------------------------------------------------------------
    // Нужно будет интергрировать это в style.css
    // ---------------------------------------------------------------------------------------------------------------------------
    <header style={headerStyle}>
      {/* Navigation Links */}
      <nav style={navStyle}>
        <a href="#shop" style={navLinkStyle}>Shop</a>
        <a href="#products" style={navLinkStyle}>Products</a>
        <a href="#fertilizer" style={navLinkStyle}>Fertilizer</a>
        <a href="#guide" style={navLinkStyle}>Guide</a>
      </nav>

      {/* Logo */}
      <div style={logoContainerStyle}>
        <img src={logo} alt="Plantify Logo" style={logoStyle} />
      </div>

      {/* Buttons with Icons */}
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>
            <img src={profileIcon} alt="Profile" style={iconStyle} />
        </button>
        <button style={buttonStyle}>
            <img src={cartIcon} alt="Cart" style={iconStyle} />
        </button>
        <button style={buttonStyle}>
            <img src={searchIcon} alt="Search" style={iconStyle} />
        </button>
      </div>
    </header>
  );
};

export default Header;
