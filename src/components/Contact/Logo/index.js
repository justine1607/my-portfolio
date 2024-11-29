import './index.scss'
import LogoS from '../../../assets/images/my-pic 1.jpg'
const Logo =() =>{
    return(
        <div className='logo-container'>
            <img src={LogoS} alt='myprofile-pic'className='my-pic animate--slow slideInRight' />
        </div>
    )
}

export default Logo; 