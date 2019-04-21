import React from 'react'
import { NavLink } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    return (
        <div className="NotFoundDiv" >
            <h1>Opps! there is nothing here. </h1>
            <NavLink className="btn btn-primary"  to="/" > Back to Main Page</NavLink>
        </div>
    )
}

export default NotFound
