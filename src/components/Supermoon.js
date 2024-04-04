import React from 'react';
import './supermoon.css';
import "react-vertical-timeline-component/style.min.css"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import supermoons from './Supermoondata.json'
import { ReactComponent as MoonIcon} from '../images/moon.svg'

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
      <div className='header'>
      </div>
      <div className='content'>
        Your Supermoon content goes here
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
