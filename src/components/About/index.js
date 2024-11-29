import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';




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
              <div className="container about-page">
                <div className="text-zone">
                  <h1 className='animate--fast'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                      idx={15}
                    />
                  </h1>
                  <p className='animate--fast slideInLeft'>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                  </p>
                  <p align="LEFT" className='animate--fast slideInLeft'>
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                  </p>
                </div>

                <div className="cube-cont animate--fast slideInRight">
                  <div className="cubespinner ">
                    <div className="face1">
                      <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                    </div>
                    <div className="face2">
                      <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                      <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                  </div>
                </div>
              </div>
      ) 
    }
)
export default About;