import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import chloroR from '../../assets/images/1st-projects.png';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animated');

    useEffect(() => {
        let timeoutId;
        if (letterClass === 'text-animated') {
            timeoutId = setTimeout(() => {
                setLetterClass('text-animated-hover');
            }, 3000);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [letterClass]);

    return (
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
            </div>
            <div className='my-projects'>
                <img className='my-project1 animate--fast slideInLeft' src={chloroR} alt='pic of my 1st project' />
                <h6>
                    <a className='link1 animate--fast slideInLeft' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                </h6>
                <h1 className='project animate--fast slideInRight'>
                    Other projects are not done yet😌
                </h1>
        </div>
    </div>
    );
};

export default Projects;
