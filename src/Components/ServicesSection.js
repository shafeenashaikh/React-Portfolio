import React from 'react'

function ServicesSection({image, title}) {
    return (
        <div className="ServicesSection">
            <div className="services">
                <div className="service-content">
                <img src={image} alt=""/>
                <h5 className="s-title">{title}</h5>
                <p className="s-text">
                    Lorem Ipsum dolor sit amet consecteture adipisicing elit.
                </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
