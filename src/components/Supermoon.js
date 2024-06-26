import React from 'react';
import './supermoon.css';
import "react-vertical-timeline-component/style.min.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import supermoons from './Supermoondata.json';
import { ReactComponent as MoonIcon} from '../images/moon.svg';
import supermoon from '../images/supermoonimg.png';
import perigeeapogee from '../images/perigeeapogee.png';
import supermoonsizing from '../images/supermoon-sizing.png';
import returnback from '../images/arrowback.png';
import { Link } from 'react-router-dom';

const Supermoon = () => {
  const buildCard = () => {
    let arry = []
    supermoons.forEach((item, idx) => {
      arry.push({
        id: idx,
        date: item.date,
        time: item.time,
        distance: item.distance,
        diameter: item.diameter,
        relativeDistance: item.relativeDistance,
        relativeBrightness: item.relativeBrightness,
        eclipse: item.eclipse,
        type: item.Supermoon,
      })
    })
  
    return arry
  }

  const formatDate = (dateString) => {
    const dateParts = dateString.split('/');
    let day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];

    if (day.startsWith('0')) {
      day = day.substring(1);
    }
  
    // Convert month from number to its name representation
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[parseInt(month, 10) - 1];
  
    // Add 'th' to day if needed
    let dayWithSuffix;
    switch (day) {
      case '1':
      case '21':
      case '31':
        dayWithSuffix = day + 'st';
        break;
      case '2':
      case '22':
        dayWithSuffix = day + 'nd';
        break;
      case '3':
      case '23':
        dayWithSuffix = day + 'rd';
        break;
      default:
        dayWithSuffix = day + 'th';
    }
  
    return `${dayWithSuffix} ${monthName} ${year}`;
  };

  const eclipseType = (eclipse) => {
    let eclipseType = '';
    if (eclipse === 'p')
      eclipseType = 'Partial Eclipse'
    else if (eclipse === 'n')
      eclipseType = 'Penumbral Eclipse'
    else
      eclipseType = 'Total Eclipse'
    return (<>{eclipseType} <br/></>)
  }

  const supermoonArray = buildCard()
  
  let iconStyle = {
    background: '#e22c6f',
  }

  return (
    <div className='supermoonpage'>
      <div className='supermoon-header'>
        <div className='supermoon-return' style={{ height: '120px', paddingLeft: '10px'}}>
          <Link to='/'>
            <img src={returnback} alt='Return To Home' height='100%' />
          </Link>
        </div>
      </div>
      <div className='supermoon-content'>
        <div className='supermoon-intro'>
          <div className='supermoon-image'>
            <img src={supermoon} alt='Super Moon' width='100%'/>
          </div>
          <div className='supermoon-intro-content'>
            <div className='supermoon-heading-main'>SUPERMOONS</div>
            <div className='supermoon-heading supermoon-intro-heading'>Introduction To Supermoons</div>
            <div className='supermoon-intro-text'>
              Have you ever gazed up at a full moon and marveled 
              at its size and brilliance? Sometimes, the moon 
              appears slightly larger and brighter than usual. These 
              impressive lunar displays are called supermoons.
              <br/><br/>
              Supermoons are a regular part of the Moon's orbit 
              around Earth. There's no formal scientific 
              definition, but they occur when a full moon 
              coincides, or nearly coincides, with the Moon's 
              closest approach to Earth in its elliptical orbit. 
              This alignment results in the moon appearing 
              slightly larger and brighter than a typical full moon.
              </div>
          </div>
        </div>

        <div className='supermoon-cycle'>
          <div className='supermoon-cycle-content'>
            <div className='supermoon-heading supermoon-cycle-heading'>The Supermoon Cycle</div>
            <div className='supermoon-cycle-text'>
              The key to understanding supermoons lies in the 
              Moon's orbit around Earth. Unlike a perfect circle, 
              the Moon's orbit is elliptical. This means the 
              Moon's distance from Earth varies throughout its 
              29.5-day lunar cycle. 
              <br/><br/>
              There are two key points in this orbit: perigee and apogee.
              <ul>
                <li>
                  <b>Perigee:</b> This is the point in the Moon's orbit 
                  where it comes closest to Earth, at a distance 
                  of roughly 226,000 miles (363,300 kilometers).
                </li>
                <li>
                  <b>Apogee:</b> This is the farthest point in the Moon's 
                  orbit, where it's about 251,000 miles 
                  (405,500 kilometers) from Earth.
                </li>
              </ul>
              
              During a full moon that lines up with, or falls 
              very near, perigee, the Moon appears larger and 
              brighter in the night sky. This is because the 
              Moon's gravitational pull is strongest at perigee, 
              and its effect on Earth, including tides, is 
              slightly amplified.
              <br/><br/>
              Supermoons are not uncommon. On average, there are 
              three or four supermoons in a year, sometimes 
              clustered together for two to five full moons in a 
              row. This grouping occurs because the Moon's 
              perigee doesn't perfectly align with every full 
              moon cycle.
            </div>
          </div>
          <div className='supermoon-perigeeapogee'>
            <img src={perigeeapogee} alt='Perigee and Apogee Infographic' width='100%'/>
          </div>
        </div>

        <div className='supermoon-bigger-and-brighter'>
          <div className='supermoon-infographic'>
            <img src={supermoonsizing} alt='Supermoon Sizing Infographic'width='100%' />
          </div>
          <div className='supermoon-bigger-and-brighter-content'>
            <div className='supermoon-heading supermoon-bigger-and-brighter-heading'>Why Does the Moon Look Bigger and Brighter?</div>
            <div className='supermoon-bigger-and-brighter-text' style={{lineHeight: '1.5'}}>
              The Moon's elliptical orbit directly affects its 
              apparent size and brightness during a supermoon. 
              Here's why:
              <ul>
                <li>
                  <b>Distance:</b> At perigee, the Moon is about 14% 
                  closer to Earth compared to apogee (sometimes 
                  called a micromoon). This slight distance 
                  change translates to a perceivable increase in 
                  the Moon's size, though it may not be dramatic 
                  to the naked eye.
                </li>
                <li>
                  <b>Light Reflection:</b> As the Moon is closer during
                  a supermoon, it reflects about 30% more 
                  sunlight towards Earth, making it appear 
                  brighter.
                </li>
                <li>
                  <b>Moon Illusion:</b> When a supermoon rises or sets 
                  near the horizon, it can appear even larger due 
                  to The Moon illusion. Our brains perceive 
                  objects near the horizon as bigger compared to 
                  those directly overhead.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='supermoon-special'>
          <div className='supermoon-heading supermoon-special=heading'>Special Supermoons</div>
          <div className='supermoon-special-text'>
          When a supermoon coincides with a lunar eclipse, we can 
          witness a “super blood moon."
          <br/><br/>
          During a lunar eclipse, the Sun, Earth, and Moon align 
          perfectly. Earth casts a shadow on the Moon, blocking 
          most of the sunlight. However, some sunlight filters 
          through Earth's atmosphere, bending slightly as it 
          does. Blue light bends more than red light, so the blue 
          light scatters, leaving primarily the reddish hues to 
          reach the Moon's surface. This is why the eclipsed Moon 
          appears red, earning the nickname "blood moon." 
          The combination of a supermoon and a lunar eclipse is a 
          rare event. Because a supermoon requires the full moon 
          to be near perigee (its closest point to Earth), and a 
          lunar eclipse requires specific alignment, these two 
          events don't always occur together.
          <br/><br/>
          The most extraordinary supermoon event is the "super 
          blue blood moon," which combines a supermoon, a lunar 
          eclipse, and a blue moon (the second full moon in a 
          calendar month). This is exceptionally rare, as the 
          specific conditions for all three phenomena to occur 
          simultaneously must align. The most recent super blue 
          blood moon happened on January 31st, 2018.
          <br/><br/>
          Looking ahead, the next supermoon lunar eclipse will be 
          on September 18th, 2024. However, it will be a partial 
          eclipse, meaning only part of the Moon will be bathed 
          in the Earth's reddish shadow.
          </div>
        </div>
        <div className='supermoon-heading' style={{paddingTop: '40px'}}>What are New Supermoons and Full Supermoons?
</div>
        <div>
        Supermoons occur when the Moon reaches its closest point to Earth (perigee) coinciding with either a new moon or full moon phase. During a new supermoon, the Moon is positioned between the Earth and the Sun, making it invisible to the naked eye. However, its gravitational pull aligns with Earth and the Sun, amplifying tidal forces and creating stronger high tides (spring tides or king tides).
In contrast, a full supermoon coincides with the Moon's full phase, making it appear larger and brighter than usual in the night sky due to its closer proximity to Earth.
        </div>

        <div className='supermoon-heading' style={{paddingTop: '40px'}}>Observing Supermoon</div>
        <div>
          Supermoons are a beautiful astronomical phenomenon to witness. You don't need any special equipment to enjoy them – simply head outside on a clear night during a supermoon and marvel at the Moon's brilliance!
          <br/><br/>
          Using the Timeline you can check when your next Supermoon will be.
        </div>


        <h1 className='timeline-title'>Supermoon Timeline</h1>
        <div className='timeline-container' style={{ backgroundColor: '#023263', overflowY: 'auto', height: '900px', marginBottom: '100px' }}>
          <VerticalTimeline>
            {supermoonArray.map(element => {
              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName='date'
                  iconStyle={iconStyle}
                  icon={<MoonIcon />}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div><h3 className='vertical-timeline-element-title'>{formatDate(element.date)}</h3></div>
                    <div>{element.time.split(':').slice(0, 2).join(':')} GMT</div>
                  </div>
                  
                  <h5 className='vertical-timeline-element-subtitle'>
                    {element.type == 'Full' ? "Full" : "New"} Supermoon
                  </h5>
                  <p id='description' style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      {element.eclipse ? eclipseType(element.eclipse) : null}
                      Distance (km)<br/>
                      Diameter (arc-min)<br/>
                      Relative Distance <br/>
                      {element.relativeBrightness ? 'Relative Brightness' : null}
                    </div>
                    <div>
                      {element.eclipse ? <br/> : null}
                      {element.distance}
                      <br/>
                      {element.diameter}<br/>
                      {element.relativeDistance}<br/>
                      {element.relativeBrightness ? element.relativeBrightness : null}
                    </div>
                    {/* {element.distance} */}
                  </p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
        <div className='endreferences' style={{ paddingBottom: '60px'}}>
        <div className='supermoon-heading' style={{paddingTop: '40px'}}>References</div>
        Curran, M. (2024) 1st of 5 new supermoons in a row starting today, EarthSky. Available at: https://earthsky.org/astronomy-essentials/new-supermoons-in-a-row/ (Accessed: 11 April 2024). 
        <br/><br/>
        Espenak, F. (2022) New Moon at Perigee (New Supermoon): 2001 to 2100, New Moon at perigee (new Supermoon): 2001 to 2100. Available at: http://astropixels.com/ephemeris/moon/newperigee2001.html?fbclid=IwAR2W_6fmFyOipzc49P5_ESB25Bx0JNDJ82fCjTPxJdrDYLWrL3hJrok-tMM (Accessed: 11 April 2024). 
        <br/><br/>
        Osterloff, E. and Hendry, L. (2024) What is a supermoon?, Natural History Museum. Available at: https://www.nhm.ac.uk/discover/what-is-a-supermoon.html#:~:text=When%20a%20full%20Moon%20occurs,an%20easy%20explanation%20for%20it (Accessed: 11 April 2024). 
        </div>
      </div>
    </div>
  );
};

export default Supermoon;
