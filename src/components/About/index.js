import './index.scss'
import AnimatedLetter from '../AnimatedLetters';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const About =(() =>{
    
const [letterClass,setLetterClass] = useState('text-animated')

useEffect(() =>{
    let timoutId;
    // if the letter class is strictly equal to text-animated or after this animation
    // it will set a timout first and then implement the text-animated-hover effect.
    // example if you load the browser and the text-animated has takesit parts, then
    // the it will takes a timout then a text-animated hover will render.
    if(letterClass === 'text-animated'){
        timoutId = setTimeout(() =>{
            setLetterClass('text-animated-hover');
        },3000);
    }
    return () =>{
        clearTimeout(timoutId);
    };
}, [letterClass]);


    return(
        <div className='container about-page'>
            <div className='text-zone2'>
                <h1>
                    <AnimatedLetter
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t','','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>

            </div>
            <div className='cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#DD00831' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD00831' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#DD00831' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#DD00831' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#DD00831' />
                    </div>
                </div>

            </div>
        </div>

    )
})
export default About;