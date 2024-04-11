import './greenflash.css'
import greenflash from '../images/greenflashimage.jpg'
import goodconditions from '../images/goodconditions.png'
import badconditions from '../images/badconditions.png'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import sunset from '../images/sunset.jpg';
import jupiter from '../images/Jupiter.png';
import returnback from '../images/arrowback.png';
import { Link } from 'react-router-dom';

function createData(type, view, apperance, conditions) {
  return { type, view, apperance, conditions };
}

const rows = [
  createData('Inferior mirage (Most common)', 'Sea level or low elevations', 'Green oval, usually 1-2 seconds', 'Occurs when the surface is warmer than the air above it'),
  createData('Mock mirage',"More likely viewed the higher it's seen above the inversion, but brightest just above the inversion.", 'The upper rim of the sun appears as thin strips. Green strips last 1-2 seconds.', 'Occurs when the surface is colder than air about it'),
  createData('Sub-duct flash',	"At any height, but only within a narrow range below the inversion.",	"The top part of an hourglass-shaped sun appears green for as long as 15 seconds.",	"Seen when the observer is below an atmospheric inversion layer."),
  createData('Green ray',	'sea level', 'A green beam of light appears to shoot up from the top center of the sun as it sets or just after it sinks below the horizon.', 'Seen when a bright green flash is present and there is hazy air to produce the column of light.')
];

function Greenflash() {
  const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };
  
  return(
    <div className='greenflashpage'>
      <div className='greenflash-header'>
        <div className='greenflash-return' style={{ height: '120px', paddingLeft: '10px'}}>
          <Link to='/'>
            <img src={returnback} alt='Return To Home' height='100%' />
          </Link>
        </div>
      </div>
      <div className='greenflash-content'>
        <div className='greenflash-what'>
          <div className='greenflash-image'>
            <img src={greenflash} alt='Green Flash' width='100%'/>
            <div className='imagereference'>Inaglory, B. (2006) Green flash 9-18-06.</div>
          </div>
          <div className='greenflash-what-content'>
            <div className='greenflash-heading-main'>GREEN FLASH</div>
            <div className='what-heading greenflashheading'>What is the Green Flash?</div>
            <div className='what-text'>
              The green flash is an optical phenomenon visible shortly after 
              sunset or before sunrise, when the sun is almost entirely below 
              the horizon, but its upper edge is still visible. It appears as 
              a brief flash of green light on the upper edge of the sun. This 
              phenomenon is caused by the refraction of sunlight in the Earth's 
              atmosphere, particularly when the atmosphere acts as a prism, 
              separating light into its various colours.
            </div>
          </div>
        </div>
        <div className='greenflash-explanation'>
          <div className='explanation-heading greenflashheading'>
            Explanation of the Phenomenon
          </div>
          <div className='explanation-container'>
            <div className='explaination-text'>
              The green flash is a product of how light interacts with our atmosphere and is a combination of two optical phenomena: a mirage and the dispersion of sunlight. When sunlight passes through the air, especially at sunrise and sunset when it travels a longer path, the atmosphere acts like a prism. Imagine white light passing through a prism – it separates into a rainbow of colours. Similarly, the atmosphere bends sunlight, separating its colours. Since shorter wavelengths (like blue and green) bend more than longer wavelengths (like red and yellow), they get refracted further. During a green flash, as the sun dips below the horizon, the red and yellow light disappears first. The remaining, slightly bent, green light is then concentrated for a brief moment, creating the green flash we see.
            <br/>
            <br/><br/>
            There are 4 types of green flashes:
            </div>
            <div className='types-table'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650, }} size='small' aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: 700}}>Type of Flash</TableCell>
                    <TableCell style={{ fontWeight: 700}} align="center">Usually View From</TableCell>
                    <TableCell style={{ fontWeight: 700}} align="center">Apperance</TableCell>
                    <TableCell style={{ fontWeight: 700}} align="center">Conditions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.type}
                      </TableCell>
                      <TableCell align="justify">{row.view}</TableCell>
                      <TableCell align="justify">{row.apperance}</TableCell>
                      <TableCell align="justify">{row.conditions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
          </div>
          <div>
            The enigmatic green flash has intrigued skywatchers for centuries, 
            yet its first documented sightings occurred within the last 160 
            years. This curious fact raises questions about why ancient 
            civilizations with keen observations of the sky, such as those in 
            China, Japan, and Babylonia, did not record the phenomenon.
            <br/>
            <br/>
            The earliest scientifically acknowledged sighting of the green 
            flash dates back to 1865, credited to an observer named "W. Swan." 
            Swan described witnessing a "dazzling emerald green" flash at 
            sunrise over a distant mountain. However, it wasn't until 1883 that 
            Swan's observation was published, coinciding with reports of unusual 
            atmospheric phenomena following the eruption of the Krakatoa volcano. 
            https://www.space.com/green-flash-earth-sunrise-sunset 
          </div>
        </div>
        <div className='greenflash-howcontainer'>
          <div className='how-heading greenflashheading'>How to See a Green Flash</div>
          <div className='atmosphere'>
            <div className='atmosphere-text'>
              <div style={{ fontWeight: 800, }}>Atmosphere conditions</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '10px' }}> 
                <div style={{ marginRight: '10px' }}>Toggle Atmosphere</div>   
                <div className='toggle-container' onClick={handleToggleChange}>
                  <div className={`toggle-btn ${!toggle ? "disable" : ""}`}>
                    {toggle}
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: '20px', textAlign: 'justify' }}>
                {toggle ? "Bad Conditions: Hazy, cloudy skies or thick pollution block the view. Heavy dust or smoke particles hinder the atmospheric effect. Green flash unlikely." : "Good Conditions: Pristine blue sky, unobstructed view of the horizon. Ideal conditions for a green flash."}
              </div>
            </div>
            <div className='atmosphere-img'>
              <span className='emo'>{toggle ? <img src={badconditions} alt='Good Conditions' width='100%'/> : <img src={goodconditions} alt='Good Conditions' width='100%' />}</span>
            </div>
          </div>
          <div className='greenflash-how-distant-sunsafety'>
            <div>
              <div style={{ fontWeight: 800, }}>Distant Horizon</div>
              <ul>
                <li>Seek out locations with a distant and distinct horizon, such as open seas or expansive lakes.</li>
                <li>The farther the horizon, the better your chances of witnessing the green flash.</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 800, }}>Sun Safety First</div>
              <ul>
                <li>Never look directly at the sun, especially when it's near the horizon. Doing so can cause severe eye damage.</li>
                <li>Wait until the sun is almost entirely below the horizon before attempting to spot the flash.</li>
              </ul>
            </div>
          </div>
          <div className='greenflash-how-sunsetsunrise'>
            <div className='greenflash-how-sunsetsunrise-img'><img src={sunset} alt='Sunset' width='100%'/></div>
            <div className='greenflash-how-sunsetsunrise-text'>
              <div style={{ fontWeight: 800, }}>Sunset or Sunrise</div>
              <ul>
                <li>Green flashes are more commonly observed at sunset due to atmospheric conditions, but with patience, you may also see them at sunrise.</li>
                <li>Plan your observation session accordingly, aiming to be in position several minutes before the sun dips below the horizon.</li>
              </ul>
              <div style={{ fontWeight: 800, }}>Land Horizons</div>
              <ul>
                <li>Don't be discouraged if you're not near the coast. Even over land, a clear and expansive horizon can provide opportunities to witness the green flash.</li>
                <li>Look for locations with unobstructed views that stretch far into the distance, such as flat plains or desert landscapes.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='greenflash-otherplanets'>
          <div className='greenflashheading greenflash-otherplanets-heading'>Green Flash on Other Planets</div>
          <div className='greenflash-otherplanets-content'>
            <div className='greenflash-otherplanets-text'>The magic of the green flash isn't limited to our Sun! While most commonly observed during sunrise or sunset on Earth due to atmospheric refraction, the green flash can also be seen with very bright planets like Venus and Jupiter near the horizon. This is because the same principle applies: light from the planet bends as it passes through our atmosphere, with green wavelengths being the most prominent under the right conditions.</div>
            <div className='greenflash-otherplanets-img'><img src={jupiter} alt='Jupiter and Moons' width='100%' /></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Greenflash;