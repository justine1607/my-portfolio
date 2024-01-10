import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Images from './Images'
import chloroR from '../../assets/images/1st-projects.png';


const Projects = (() => {
    
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
        <div className='project-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
            </div>
                <div className='my-projects'>
            <div>
                <img className='project1' src={chloroR} alt='pic of my 1st project' />
                <p>
                    <a className='link1' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                </p>
            </div>
            <div>
                <img className='project2' src={chloroR} alt='pic of my 1st project' />
                <p>
                    <a className='link2' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                </p>
            </div>
        </div>
        <div className='my-projects1'>
            <div>
                <img className='project3' src={chloroR} alt='pic of my 1st project' />
                <p>
                    <a className='link3' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                </p>
            </div>
            <div>
                <img className='project4' src={chloroR} alt='pic of my 1st project' />
                <p>
                    <a className='link4' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                </p>
            </div>
        </div>
        </div>
    );
});

export default Projects;
