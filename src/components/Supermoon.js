import React from 'react';
import './supermoon.css';
import "react-vertical-timeline-component/style.min.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import supermoons from './Supermoondata.json';
import { ReactComponent as MoonIcon} from '../images/moon.svg';
import supermoon from '../images/supermoonimg.png';
import perigeeapogee from '../images/perigeeapogee.png';
import supermoonsizing from '../images/supermoon-sizing.png';

const Supermoon = () => {
  const buildCard = () => {
    let arry = []
    supermoons.forEach((item, idx) => {
      arry.push({
        id: idx,
        date: item.Date,
        time: item.Time,
        distance: item.Distance,
      })
    })
  
    return arry
  }

  const supermoonArray = buildCard()
  
  let iconStyle = {
    background: '#274689',
  }

  return (
    <div className='supermoonpage'>
      <div className='supermoon-header'>
      </div>
      <div className='supermoon-content'>
        <div className='supermoon-intro'>
          <div className='supermoon-image'>
            <img src={supermoon} alt='Super Moon' width='100%'/>
          </div>
          <div className='supermoon-intro-content'>
            <div className='supermoon-heading supermoon-intro-heading'>Super Moons</div>
            <div className='supermoon-intro-text'>
              Have you ever gazed up at a full moon and marveled 
              at its size and brilliance? Sometimes, the moon 
              appears larger and brighter than usual. These 
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
              29.5-day lunar cycle. There are two key points in 
              this orbit: perigee and apogee.
              <ul>
                <li>
                  Perigee: This is the point in the Moon's orbit 
                  where it comes closest to Earth, at a distance 
                  of roughly 226,000 miles (363,300 kilometers).
                </li>
                <li>
                  Apogee: This is the farthest point in the Moon's 
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
            <div className='supermoon-bigger-and-brighter-text'>
              The Moon's elliptical orbit directly affects its 
              apparent size and brightness during a supermoon. 
              Here's why:
              <ul>
                <li>
                  Distance: At perigee, the Moon is about 14% 
                  closer to Earth compared to apogee (sometimes 
                  called a micromoon). This slight distance 
                  change translates to a perceivable increase in 
                  the Moon's size, though it may not be dramatic 
                  to the naked eye.
                </li>
                <li>
                  Light Reflection: As the Moon is closer during
                  a supermoon, it reflects about 30% more 
                  sunlight towards Earth, making it appear 
                  brighter.
                </li>
                <li>
                  Moon Illusion: When a supermoon rises or sets 
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
          <br/><br/>
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



        <div className='timeline-container' style={{ backgroundColor: '#E22C6F', overflowY: 'auto', height: '600px', }}>
          <h1 className='timeline-title'>Supermoon Timeline</h1>
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
                  <h3 className='vertical-timeline-element-title'>Moon</h3>
                  <h5 className='vertical-timeline-element-subtitle'>subtitle</h5>
                  <p id='description'>{element.distance}</p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Supermoon;
