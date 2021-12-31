import React from "react";

const Header = () => {
  return (
    <div className="header wrapper">
      <div className="header_SVG">
        <img
          src="/images/anim.gif"
          alt="Automotive"
        />
      </div>
      <div className="header_Content">
        {/* <div className="header_Content_Wrapper"> REMOVE EXTRA CONTAINER*/}
        <h2>Connected Automotive</h2>
        <p>
          Transforming the way for Automotive mantainance. 
          System to build remarkable user experience.
        </p>
        <div className="header_Content_Get-started">
          <a className="primary-btn btn--lg" href="#link">
            Get Started
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
