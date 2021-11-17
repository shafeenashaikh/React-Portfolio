import React from 'react'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import Tittle from '../Components/Tittle';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'}/>
        </div>
    )
}
export default AboutPage;
