import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect, useRef,form} from 'react';
import Loader from 'react-loaders';
import Logo from '../Contact/Logo';



const  Contact = (()=>{
    const [letterClass,setLetterClass] = useState('text-animated')
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const loaderTimeoutId = setTimeout(() => {
          setLoading(false);
        }, 8000); // Adjust the duration of the loader as needed
    
        return () => {
          clearTimeout(loaderTimeoutId);
        };
      }, []);

    useEffect(() =>{
        let timoutId;
        // if the letter class is strictly equal to text-animated or after this animation
        // it will set a timout first and then implement the text-animated-hover effect.
        // example if you load the browser and the text-animated has takesit parts, then
        // the it will takes a timout then a text-animated hover will render.
        if(letterClass === 'text-animated'){
            setLoading(false);
            timoutId = setTimeout(() =>{
                setLetterClass('text-animated-hover');
            },3000);
        }
        return () =>{
            clearTimeout(timoutId);
        };
    }, [letterClass]);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_x5n0f7s', e.target, 'oSrpVL2T_hPeDC-Py')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
          e.target.reset()
      }
    
    
    return(
        <>
        {loading ? ( // Show loader only when loading is true
        <Loader type="line"className='loader' />
      ) : (
        <div className='conatiner contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t','','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance oppurtunities - espescially ambitious or
                    large projets. However, if you have other request or question,
                    don't hesititate to conatct me using below form either. 
                </p>
            </div>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul className='style'>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li className='textarea'>
                                <input type='text-area' name='message' placeholder='Message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-buttons' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
                <Logo />
        </div>
            
        ) }
        </>
    )
})
export default Contact;