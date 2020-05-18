import React, { Component } from 'react'
import App from '../App.css'

import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div >
                <nav>
                    <Link to="/">Home</Link>

                    <Link to="/UserProfile">User Profile</Link>
                    <Link to="/Login">Log in</Link>
                    
                </nav>
            </div>
        )
    }
}
