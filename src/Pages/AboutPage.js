import React from 'react'
import ImageSection from '../Components/ImageSection';
import Tittle from '../Components/Tittle';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle title={'My Skills'} span={'My Skills'}/>
        </div>
    )
}
export default AboutPage;
