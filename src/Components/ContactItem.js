import React from 'react'

function ContactItem({icon, text1, text2, title}) {
    return (
        <div className="contactItem">
            <img src={icon} alt=""/>
            <div className="right-item">
                <h6>{title}</h6>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    )
}

export default ContactItem;
