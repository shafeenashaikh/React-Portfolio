import React from 'react'

function ServicesSection({image}) {
    return (
        <div className="ServicesSection">
            <div className="services">
                <img src={image} alt=""/>
                <h5 className="s-title"> </h5>
                <p className="s-text">
                    Lorem Ipsum dolor sit amet consecteture adipisicing elit.
                </p>
            </div>
        </div>
    )
}

export default ServicesSection;
