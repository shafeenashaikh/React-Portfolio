import React from 'react'
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import SkillsSection from '../Components/SkillsSection';
import Tittle from '../Components/Tittle';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg'
import gamedev from '../images/game-dev.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Lua'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'}/>
            <div className="services-container">
                <ServicesSection image={design} title={'web design'} 
                    text={'Web design encompasses many different skills and disciplines in the production'}
                />
                 <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                    text={'Artificial intelligence makes possible for machines to learn from experience.'}
                />
                 <ServicesSection image={gamedev} title={'Game Development'} 
                    text={'Here’s some terminology you’ll hear throughout your career as a game developer.'}
                />

            </div>
        </div>
    )
}
export default AboutPage;
