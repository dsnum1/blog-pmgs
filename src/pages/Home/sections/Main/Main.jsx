import React from 'react'
import { useNavigate } from 'react-router-dom'
import profilePic from '../../../../assets/profilePic.png'
import st_logo from '../../../../assets/st_logo.png'
import uts_logo from '../../../../assets/uts_logo.png'
import anthology from '../../../../assets/anthology.png'
import utsoc from '../../../../assets/utsoc.png'
import vertigo from '../../../../assets/vertigo.png'
import { Button } from '../../../../components'
import './Main.css'

const Main = () => {

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/aboutus');
    };

    const navigateToResearch = () => {
        navigate('/research');
    };

    const navigateToPublications = () => {
        navigate('/publications');
    };

    return (
        <div className="main">

            <div className="main__intro">
                <div className="main__intro-img">
                    <img src={profilePic} alt="profile-pic" />
                </div>

                <div className="main__intro-text">
                    <p className="main__intro-text__content">I am an aspiring digital anthropologist who studies internet ontologies and cultures. 
                    Welcome to PMGS- a collection of my engagements with the key themes of my research and much more!</p>

                    <p className="main__intro-text__name">-Sanskriti Satyakam</p>

                    <Button onClick={navigateToAbout} />
                </div>
            </div>


            <div className="main__research">
                <h2>RESEARCH</h2>
                <p>
                    My research is a contribution to balancing the current Western-centricity of digital and social media scholarly discourse. It qualitatively investigates the interplay between self-presentations by and perceived authenticities of a subset of content creators- family vloggers in a rapidly, digitally developing nation like India.
                </p>

                <p className="main__research-paraTwo">
                    It regards this interplay as a plausible sign of parasociality and broadly asks the question whether this parasociality manifests a change in the Indian social fabric in terms of familial gender constructions.
                </p>
                <Button onClick={navigateToResearch} />
            </div>


            <div className="main__publications">
                <h2>PUBLICATIONS</h2>
                <p>
                    As a woman of colour, I am aware of my sociocultural positioning and therefore consider gender and race as the overriding premises of not only my research, but often my other writing pieces as well. I feel deeply about many subjects that are outside the scope of my research- Stray animals, work-life balance, bullying culture, philosophical interpretations of everydayness are a few among many. See glimpses of these, here!
                </p>

                <div className="main__publications-images">
                    <img src={st_logo} alt="st_logo" className="st-image" />
                    <img src={uts_logo} alt="uts_logo" className="uts-image" />
                    <img src={anthology} alt="anthology" className="anthology-image" />
                    <img src={utsoc} alt="utsoc" className="utsoc-image" />
                    <img src={vertigo} alt="vertigo" className="vertigo-image" />
                </div>
                <Button onClick={navigateToPublications} />
            </div>
        </div>
    )
}

export default Main