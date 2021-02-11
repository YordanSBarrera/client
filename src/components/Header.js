import React from 'react'
import { Link } from 'react-router-dom'

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
            </div>
        </div>
    )
}

export default Header;