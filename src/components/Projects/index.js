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
        <div className='container project-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
            </div>
                <div className='my-projects'>
                    
                        <img className='my-project1' src={chloroR} alt='pic of my 1st project' />
                        <span>
                            <a className='link1' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                        </span>
                        <img className='my-project2' src={chloroR} alt='pic of my 1st project' />
                        <span>
                            <a className='link2' href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                        </span>
             </div>
        </div>
    );
});

export default Projects;
