import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useState, useEffect, useRef,form} from 'react';
import Logo from '../Home/Logo';
import Swal from 'sweetalert2';



const  Contact = (()=>{
    const [letterClass,setLetterClass] = useState('text-animated');
    const form = useRef();
    
    useEffect(() =>{
        let timoutId;
        if(letterClass === 'text-animated'){
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
            .sendForm('service_kxzutkf', 'template_x5n0f7s', form.current, 'oSrpVL2T_hPeDC-Py')
            .then(() => {
                Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Message successfully send.",
                        showConfirmButton: false,
                        timer: 1800
            });

            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                Swal.fire({
                  icon:'error',
                  title:'Oops...',
                  text:'Please try again'  
            });
            })
            .finally(() => {
                e.target.reset();
            });
    };

    
    
    return(
        <div className='theme-container theme-contact'>
            <div className='container'>
                <div className='container contact-page'>
                    <div className='contact-wrapper'>
                        <div className='contact-text'>
                            <h1 className='contact-title'>
                                <AnimatedLetters
                                  letterClass={letterClass}
                                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                                  idx={15}
                                />
                            </h1>
                            <p className='animate--fast slideInLeft text-describe'>
                                I am interested in freelance opportunities - espescially ambitious on
                                large projects. However, if you have other request or question,
                                don't hesitate to contact me using the form below
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
                                </ul>
                                <button type='submit' className='flat-buttons'>SEND</button>
                            </form>
                        </div>
                    </div>
                    <Logo />
                </div>
            </div>
        </div>
    )
})
export default Contact;