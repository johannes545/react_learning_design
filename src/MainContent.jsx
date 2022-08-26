import React from "react"

function MainContent(){
    return(
      <div className='MainContent'>
        <h1 className="MainContent_h1">Fun Facts About React</h1>
        <ul className="MainContent_ul">
          <li className="MainContent_li">
            Was first released in 2013
          </li>
          <li className="MainContent_li">
            Was originally created by Jordan Walke
          </li>
          <li className="MainContent_li">
            Has well over 100k star on GitHub
          </li>
          <li className="MainContent_li">
            Is mainted by Facebook/Meta
          </li>
          <li className="MainContent_li">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    )
  };

export default MainContent
  