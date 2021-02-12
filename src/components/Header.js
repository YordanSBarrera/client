import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="Item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="Item">
                    todos los flujos..
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header;