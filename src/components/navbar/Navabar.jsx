import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navabar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <nav className='navbar'>
            <div className="nav-logo-section">
                <Link to='/' className="nav-logo">Travel</Link>
            </div>
            <div className="nav-items-section">
                <i className={click ? "fa fa-times nav-icon" : "fa fa-bars nav-icon"} onClick={handleClick}></i>
                <ul className={click ? "nav-items nav-show" : "nav-items"}>
                    <li className="nav-item">
                        <Link to='/' className='nav-link' >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-link' >Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-link' >About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navabar
