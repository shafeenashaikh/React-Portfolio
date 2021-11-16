import React from 'react'
import ImageSection from '../Components/ImageSection';
import Tittle from '../Components/Tittle';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
        </div>
    )
}
export default AboutPage;
