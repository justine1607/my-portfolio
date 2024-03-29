
import { Link } from 'react-router-dom'
import LogoTittle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'



const Home = () =>{
const [letterClass,setLetterClass] = useState('text-animated');
const firstArray = ['u','s','t','i','n','e']
console.log(firstArray);
const secondArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

useEffect(() =>{
    let timoutId;
    // if the letter class is strictly equal to text-animated or after this animation
    // it will set a timout first and then implement the text-animated-hover effect.
    // example if you load the browser and the text-animated has takesit parts, then
    // the it will takes a timout then a text-animated hover will render.
    if(letterClass === 'text-animated'){
        timoutId = setTimeout(() =>{
            setLetterClass('text-animated-hover');
        },4000);
    }
    return () =>{
        clearTimeout(timoutId);
    };
}, [letterClass]);
return(

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                {/* the dollar sign and the ` is used to embed values and a classname example the value here is a letter class and a classname which is _12 if you want to specificaly design the letter */}
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTittle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={firstArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={secondArray}
                idx={22} />
                </h1>
                <div class="wrapper">
                    <span class='typing-demo initial-hidden'>Front-end Developer</span>
                </div>
                {/* <h2 className='animate--slow slideInLeft text'>Front-end Developer</h2> */}
                <Link to='/contact'className='flat-button animate--slow slideInLeft'>Contact me</Link>
                    
            </div>
                <Logo />
        </div>
     )}





export default Home;
