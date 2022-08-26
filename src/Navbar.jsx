import React from "react"
import Logo from "./images/react-icon-small.png"

function Navbar(){
    return(
    <div className='Navbar'>
      <img className="Navbar_img" src={Logo} alt="This is a react Logo" />
      <h3 className="Navbar_h3">ReactFacts</h3>
      <h4 className="Navbar_h4">React Pratice For Fun</h4>
    </div>
    )
  };

export default Navbar