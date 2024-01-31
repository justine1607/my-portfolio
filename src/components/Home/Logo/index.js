import './index.scss'
import LogoS from '../../../assets/images/my-pic 1.jpg'
const Logo =() =>{
    return(
        
        <div className='box'>
            <div className='content'> 
                <img src={LogoS} alt='my profile pic'/>
                <h2>An Enthusiastic Front-end Developer</h2>
            </div>
        </div>
    )
}

export default Logo; 