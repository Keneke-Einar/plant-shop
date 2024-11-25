import React from 'react';
import arrowIcon from '../assets/arrow-icon.png'

const HeroSection = () => {
    const heroContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 140px', // Adjust padding as needed
      backgroundColor: '#004F44',
      height: '500px', // Adjust height as needed
    };
  
    const textColumnStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      flex: 1,
      padding: '20px',
    };
  
    const titleStyle = {
      fontSize: '64px', // Adjust for h1
      fontWeight: 500,
      color: '#EFF7F5',
    };
  
    const paragraphStyle = {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#EFF7F5',
    };
  
    const buttonContainerStyle = {
      display: 'flex',
      gap: '36px', // Space between buttons
    };
  
    const buttonStyle = {
      padding: '20px 40px',
      fontSize: '16px',
      fontWeight: 500,
      border: 'none',
      cursor: 'pointer',
    };
  
    const primaryButtonStyle = {
      ...buttonStyle,
      backgroundColor: '#004F44',
      color: 'white',
    };
  
    const secondaryButtonStyle = {
      ...buttonStyle,
      backgroundColor: 'white',
      color: '#004F44',
      border: '1px solid #004F44',
    };
  
    const cardColumnStyle = {
      display: 'flex',
      gap: '20px',
      flex: 1,
      justifyContent: 'space-around',
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
    };
  
    const cardStyle = {
      width: '150px',
      height: '200px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
    };
  
    return (
      <section style={heroContainerStyle}>
        {/* Text and Buttons Column */}
        <div style={textColumnStyle}>
          <h1 style={titleStyle}>Happiness blooms from within</h1>
          <p style={paragraphStyle}>
            Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
          </p>
          <div style={buttonContainerStyle}>
            <button style={secondaryButtonStyle}>Shop Now</button>
            <button style={primaryButtonStyle}>Explore plants
                <img src={arrowIcon} alt="Arrow" style={iconStyle} />
            </button>
          </div>
        </div>
  
        {/* Cards Column */}
        <div style={cardColumnStyle}>
          <div style={cardStyle}>
            <h3>Card 1</h3>
            <p>Some description</p>
          </div>
          <div style={cardStyle}>
            <h3>Card 2</h3>
            <p>Some description</p>
          </div>
          <div style={cardStyle}>
            <h3>Card 3</h3>
            <p>Some description</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  