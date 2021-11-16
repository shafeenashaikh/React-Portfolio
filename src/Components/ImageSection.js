import React from 'react';
import about from '../images/about.jpg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="name-details">
                        <p>Full Name</p>
                        <p>: Lorem Ipsum</p>
                    </div>
                    <div className="name-details">
                        <p>Age</p>
                        <p>: 50</p>
                    </div>
                    <div className="name-details">
                        <p>Nationality</p>
                        <p>: New Zealand</p>
                    </div>
                    <div className="name-details">
                        <p>Language</p>
                        <p>: Spanish, French, English</p>
                    </div>
                    <div className="name-details">
                        <p>Address</p>
                        <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
                    </div>
                    <div className="name-details">
                        <p>Countries</p>
                        <p>: Spain, France</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageSection;
