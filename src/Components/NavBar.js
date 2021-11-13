import React from 'react'
import avatar from '../images/avatar.png'

function NavBar() {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={avatar} alt=""/>
            </div>
            
        </div>
    )
}

export default NavBar
