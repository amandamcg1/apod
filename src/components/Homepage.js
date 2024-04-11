import './homepage.css'
import supermoon from '../images/supermoon.png';
import greenflash from '../images/greenflash.png';
import flashandmoon from '../images/flashandmoon.png';
import folklore from '../images/folkloe.png'
import { Link } from 'react-router-dom';

const icons = [
  { image: supermoon, text: "Super Moon Events", link: 'supermoon'},
  { image: greenflash, text: "About the Green Flash", link: 'greenflash'},
  { image: flashandmoon, text: "Green Flash during a Super Moon", link: 'moonandflash'},
  { image: folklore, text: "Folklore and Cultural", link: 'folklore'},
]
function Homepage() {
  
  return (
      <div 
        className='page'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
      }}>
        <div className='navigation' style={{ position: 'absolute', marginBottom: '350px'}}>
          
        <div className="icon-grid">
          {icons.map((data, index) => (
            <div className="icon-container" key={index}>
              <Link to={data.link}>
                <img src={data.image} alt={`Icon ${index + 1}`} className="icon-image" />
              </Link>
              <div className="icon-text">{data.text}</div>
            </div>
          ))}
        </div>

        </div>
        <div className='title'>
          Green Flash and Supermoon
        </div>
        <div className='welcome'>
          This website explores the Green Flash phenomenon and the Supermoon. Inspired by a captivating 
          image on NASA's Astronomy Picture of the Day (APOD) capturing a supermoon alongside 
          a green flash on May 10th, 2012, this website dives deep into the science and wonder behind 
          these celestial phenomena.
        </div>
        <div className='reference'>
          Laurent Laveder. (2012). Green Flash and Super Moon. Available at: https://www.pixheaven.net/photo_us.php?nom=120506_3193
        </div>
     </div>
  )
}

export default Homepage;