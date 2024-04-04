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
          Green Flash and Super Moon
        </div>
        <div className='welcome'>
          This website explores the Green Flash phenomenon, a rare optical illusion that can occur during a Super Moon. For a fleeting moment, a vibrant green flash appears at the moon's edge, leaving observers awestruck. Delve into the science behind this captivating event, explaining how the Earth's atmosphere bends light, creating the illusion. We'll also explore the factors that influence the Green Flash's rarity and how these conditions might align with a Super Moon. 
        </div>
        <div className='reference'>
          Laurent Laveder. (2012). Green Flash and Super Moon. Available at: https://www.pixheaven.net/photo_us.php?nom=120506_3193
        </div>
     </div>
  )
}

export default Homepage;