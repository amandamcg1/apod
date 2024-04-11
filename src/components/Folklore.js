import { Link } from "react-router-dom";
import returnback from '../images/arrowback.png';
import './folklore.css'
import folkloreimage from '../images/folkloreimage.png'
import wolf from '../images/wolf.png';

function Folklore() {
  
  return (<>
    <div className='folklore-page'>
      <div className='folklore-header'>
        <div className='folklore-return' style={{ height: '120px', paddingLeft: '10px'}}>
          <Link to='/'>
            <img src={returnback} alt='Return To Home' height='100%' />
          </Link>
        </div>
      </div>
      <div className='folklore-content'>
        <div className="folklore-intro-content">
          <div className="folklore-intro">
            <div className="folklore-intro-heading-main">FOLKLORE AND CULTURE</div>
            <div className="folklore-intro-heading">Exploring Cultural Beliefs and Folklore Surrounding the Green Flash and Supermoons</div>
            <div className="folklore-intro-text">Welcome to our exploration of the rich cultural beliefs and folklore surrounding the Green Flash and Supermoons. These celestial phenomena have captivated human imagination for centuries, inspiring myths, rituals, and artistic expressions across diverse cultures. 
</div>
          </div>
          <div className="folklore-intro-img"><img src={folkloreimage} alt="Folklore Image" width='100%'/></div>
        </div>

        <div className="folklore-supermoons">
          <div className="folklore-supermoons-heading">Supermoons in Culture and Folklore</div>
          <div className="folklore-supermoons-text">
            Supermoons have left an indelible mark on myths, legends, and religious beliefs throughout history. Here's a glimpse into some of the fascinating beliefs and folklore surrounding them:
            <br/>
            <br/>
            Lunar Deities and Rituals: The supermoon's brilliance was often seen as a connection to lunar gods and goddesses. During supermoons, ancient Greeks held ceremonies and offered prayers to Artemis, the moon goddess, seeking her blessings and comfort. Under the glow of a supermoon, the people of ancient Greece would come together to honour Artemis, their lunar deity, with rituals and prayers for good fortune and solace. They performed ceremonies and offered prayers, hoping for blessings and comfort from the divine.
            <br/><br/>
            Spiritual Connection: For Native Americans, the Supermoon is a sacred time. They believe the moon's magnified energy strengthens their connection to nature and the universe. Special ceremonies and rituals under the Supermoon help them give thanks, seek guidance, and experience spiritual growth.
            <br/><br/>
            A Time of Caution: Folklore associates supermoons with erratic behaviour and insomnia. The term "lunatic" actually stems from the Latin word "luna," meaning moon. This reflects the long-held belief that the moon's influence can affect mental states. While modern science hasn't found a direct link, folklore persists, suggesting supermoons might exacerbate existing mental health issues or trigger unpredictable behaviour in some individuals.
          </div>
        </div>

        <div className="wolf">
          <img src={wolf} alt="Wolf" width='400px'/>
        </div>

        <div className="folklore-greenflash">
          <div className="folklore-greenflash-heading">Green Flash in Culture and Folklore</div>
          <div className="folklore-greenflash-text">
          The fleeting green flash visible at sunrise or sunset has captured the imaginations of people around the world, inspiring a variety of cultural beliefs and folklore
            <br/>
            <br/>
            Good Luck and Fortune: Spotting a green flash is considered an omen of good luck or a sign of impending good fortune.  Witnessing a green flash might be seen as a blessing or a message of hope for the future.
            <br/><br/>
            Messenges from the Divine: The green flash has been linked to the divine or the spirit world in some cultures. Witnessing it can be seen as a moment of heightened spiritual awareness or a sign from a higher power.
            <br/><br/>
            Wish Fulfillment: In certain traditions, seeing a green flash is believed to grant wishes. If you're quick enough to make a wish as the green light appears, it might just come true.
          </div>
        </div>

      </div>
    </div>
  </>)
}

export default Folklore;