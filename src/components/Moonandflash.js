import { Link } from "react-router-dom";
import returnback from '../images/arrowback.png'
import './Moonandflash.css';
import greenflashandsupermoon from '../images/greenflashandsupermoon.jpg'

function Moonandflash() {
  
  return(<>
    <div className='moonandflash-page'>
      <div className='moonandflash-header'>
        <div className='moonandflash-return' style={{ height: '120px', paddingLeft: '10px'}}>
          <Link to='/'>
            <img src={returnback} alt='Return To Home' height='100%' />
          </Link>
        </div>
      </div>
      <div className='moonandflash-content'>
        
        <div className="moonandflash-intro">
          <div className="moonandflash-intro-content">
            <div className='moonandflash-heading-main'>GREEN FLASH DURING A SUPER MOON</div>
              <div className='moonandflash-intro-heading'>Observing the Green Flash During a Super Moon Event</div>
              <div className='moonandflash-intro-text'>
                Observing a green flash during a supermoon event combines two fascinating 
                astronomical phenomena, offering a rare and captivating spectacle for sky 
                watchers. This page explores the science behind these events and how to 
                optimise your chances of witnessing the Green Flash during a Super Moon 
                event.
              </div>
          </div>
          <div className="moonandflash-intro-img">
            <img src={greenflashandsupermoon} alt="APOD Green Flash and Supermoon" width='100%' />
            <div style={{ fontSize: '6pt', textAlign: 'right' }}>Image Credit & Copyright: Laurent Laveder (PixHeaven.net / TWAN)</div>
          </div>
        </div>

        <div>
          <div className="moonandflash-description">
            The featured image, captured on May 10, 2012, showcases a supermoon adorned with 
            a fleeting emerald rim – a green flash. This captivating event is caused by a 
            phenomenon called atmospheric refraction. As light from the moon, or the sun for 
            that matter, travels through Earth's atmosphere, it bends slightly due to variations 
            in air density. Shorter wavelengths of light, like blue and green, bend more than 
            longer wavelengths like red and orange. This separation of cliors is most noticeable 
            when the moon (or sun) sits low on the horizon, where the light travels through a 
            thicker layer of atmosphere. Under specific atmospheric conditions, with a clear sky 
            and minimal turbulence, a brief flash of green light can appear just above the moon's 
            upper limb, as seen in the image. For more info on the Green Flash . A supermoon 
            occurs when a full moon coincides with the moon's closest approach to Earth in its 
            elliptical orbit. This makes the moon appear slightly larger and brighter than usual, 
            captivating skywatchers around the globe.  The term "supermoon" isn't an official 
            astronomical term, but it has become widely used due to its public appeal. While 
            both supermoons and green flashes are relatively rare occurrences on their own, witnessing 
            them together is an exceptional sight. The fleeting nature of the green flash, 
            lasting only a few seconds, makes this a particularly challenging event to observe.
          </div>

          <div className="moonandflash-observation">
            <div className="moonandflash-observation-heading">Observation Tips</div>
            <div className="moonandflash-observation-text">
              Tips for Observing the Green Flash During a Super Moon Event:
              <ol>
                <li>Choose Optimal Viewing Locations: Seek out locations with unobstructed views of the horizon, such as coastal areas or elevated vantage points.
  </li>
                <li>Timing: Plan your observation session to coincide with sunset or sunrise, when the Green Flash is most likely to occur. Check the specific timing of the Super Moon event for enhanced visibility.
  </li>
                <li>Sun Safety: Never look directly at the sun, especially when it's close to the horizon. Wait until the sun is almost entirely below the horizon before attempting to spot the Green Flash.
  </li>
                <li>Patience and Persistence: Observing the Green Flash requires patience and persistence. Stay vigilant and be prepared to wait for the precise moment when atmospheric conditions align for optimal viewing.
  </li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>)
}

export default Moonandflash;