import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../images/phone.svg';
import email from '../images/emailme.svg';
import location from '../images/location.svg';

function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="map-sect"></div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+19 7756118805'} text2={'+19 6782593214'} title={'Phone'}/>
                <ContactItem icon={email} text1={'Diana@gmail.com'} text2={'John12@gmail.com'} title={'Email'}/>
                <ContactItem icon={location} text1={'25 Paramount st, PN4 8H9 London'} text2={'United Kingdoms'} title={'Address'}/>
            </div>
        </div>
    )
}
export default ContactPage;
