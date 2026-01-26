import React from 'react'
import "./nav.scss"
import DataTime from './DataTime'

const Nav = () => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar_icons/apple.svg" alt="apple" />
                </div>

                <div className="nav-item">
                    <p>Aryan Patel</p>
                </div>

                <div className="nav-item">
                    <p>File</p>
                </div>

                <div className="nav-item">
                    <p>Window</p>
                </div>

                <div className="nav-item">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="./navbar_icons/wifi.svg" alt="wifi" />

                </div>
                <div className="nav-item">
                    <DataTime />
                </div>
            </div>
        </nav>
    )
}

export default Nav
