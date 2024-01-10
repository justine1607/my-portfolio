import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import chloroR from '../../assets/images/1st-projects.png'
import { useState, useEffect } from 'react'


const Projects = (() => {
    
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

            <div className='project-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        strArray = {['M','y','','P','r','o','j','e','c','t','s']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        this are my projects 
                    </p>
                </div>
            
                <div className='card'>
                    <div className='my-projects'>
                        <img className='project1'src={chloroR} alt='pic of my 1st project' />
                        <a href='https://apexpointv2.vercel.app/chlorelief'>Link to Project</a>
                        
                    </div>
                </div>
                </div>
        
       

    )
})
export default Projects;