import { GitHub,Linkedin } from 'react-feather';
const Links =()=>{
    return(
      <div className="liner animated fadeInUp" style={{animationDelay: '1s'}}>
        <div className="liner-links">
          <a href="https://github.com/nikhilhooda35" target="_blank" rel="noopener noreferrer" title="github.com">
            <GitHub className="link-1" color="#787c88" size={26}/>
          </a>
          <a href="https://www.linkedin.com/in/nikhilhooda35" target="_blank" rel="noopener noreferrer" title="linkedin.com">
            <Linkedin className="link-2" color="#787c88" size={26}/>
          </a>
        </div>
      </div>
    )
}

export default Links