import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h3 className="title">Where in the world?</h3>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#">Dark Mode</a>
            </li>
            <li>
              <a href="https://gifted-jones-569cb9.netlify.app/">Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
