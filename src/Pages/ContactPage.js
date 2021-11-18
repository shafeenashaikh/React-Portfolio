import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../images/phone.svg';
import email from '../images/emailme.svg';
import location from '../images/location.svg';

function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="map-sect">
             <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" 
                    width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+19 7756118805'} text2={'+19 6782593214'} title={'Phone'}/>
                <ContactItem icon={email} text1={'Diana@gmail.com'} text2={'John12@gmail.com'} title={'Email'}/>
                <ContactItem icon={location} text1={'25 Paramount st, PN4 8H9 London'} text2={'United Kingdoms'} title={'Address'}/>
            </div>
        </div>
    )
}
export default ContactPage;
