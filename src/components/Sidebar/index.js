
import './index.scss'
import { Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser,faBars,faClose, faToolbox, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

  const [sidebar,setSidebar] = useState(false);

return(
  <div className= 'navbar'>
    <Link className= 'logo' to='/' onClick={() =>setSidebar(false)}>
      <img src ={LogoS} alt= 'logo' />
      <img className='sub-logo' src = {LogoSubtitle} alt='justine' />
    </Link>
      <nav className={sidebar ? 'mobile-show':''}>
          <NavLink exact = 'true' activeclassname='active' to='/' onClick={() => setSidebar(false)}>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>

            <NavLink exact = 'true' activeclassname='active' className='about-link' to='/about'onClick={() => setSidebar(false)}>
               <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact = 'true' activeclassname='active' className='skills-link' to='/skills'onClick={() => setSidebar(false)}>
               <FontAwesomeIcon icon={faLightbulb} color='#4d4d4e' />
            </NavLink>

            <NavLink exact = 'true' activeclassname='active' className='contact-link' to='/contact'onClick={() => setSidebar(false)}>
              <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

            <NavLink exact = 'true' activeclassname='active' className='project-link' to='/project'onClick={() => setSidebar(false)}>
              <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
            </NavLink>
            <FontAwesomeIcon 
              onClick={() => setSidebar(false)}
              icon={faClose}
              color='#000000'
              className='close-icon' />
      </nav>
      <ul>
        <li>
          <a target='_blank'rel='nonereffer' href='https://github.com/justine1607'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
          </a>
        </li>

        <li>
          <a target='_blank'rel='nonereffer' href='https://www.linkedin.com/in/justine-miras-929778280/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </li>

        <li>
          <a target='_blank'rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
            <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setSidebar(true)}
          icon={faBars}
          color='#1af451'
          className='hamburger-icon' />
  </div>
) }


export default Sidebar;