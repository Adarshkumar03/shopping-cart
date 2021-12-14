import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import janam from "./janam.jpeg";
import bhutan from "./bhutan.jpeg"
import funNFoodVillage from "./funNFoodVillage.jpeg";
import keralaWapasi from "./keralaWapasi.jpeg";
import Prize from "./Prize.jpeg";
import sapphire from "./sapphire.jpeg";
import indiaGate from "./indiaGate.jpeg";
import SNClg from "./SNClg.jpeg";
import amritsar from "./amritsar.jpeg";
import agra from "./agra.jpeg";
import current from "./current.jpeg";

const Timeline = () => {
  return <section className="timeline">
    <h1>Teri Life ke kuch highlights(jo mujhe yaad hai)</h1> 
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA'}}
    contentArrowStyle={{ borderRight: '7px solid  #F5f3ea' }}
    date="2001"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Birthday</h3>
    <p className="timeline-content">Ek bhayanak jeev ka janam</p>
    <img className="timeline-img" src={janam} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA'}}
    contentArrowStyle={{ borderRight: '7px solid  #F5f3ea' }}
    date="2006"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Prize</h3>
    <p className="timeline-content">Woh bhi kisi director se mila hua</p>
    <img className="timeline-img" src={Prize} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#830A48', color: '#F5F3EA' }}
    date="2007"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Dilli</h3>
    <p className="timeline-content">
    Jayasuriya wali t-shirt pehenke padhare hamare shabri.
    </p>
    <img className="timeline-img" src="" alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA' }}
    className="vertical-timeline-element--work"
    date="2007"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">India Gate</h3>
    <p className="timeline-content">
      Isse zyada bolne ki zaroorat to nhi hai na
    </p>
    <img className="timeline-img" src={indiaGate} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA' }}
    className="vertical-timeline-element--work"
    date="2008"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Agra Trip</h3>
    <p className="timeline-content">
      Taj Mahal mein suit pehenke jaane wala pehla bachha
    </p>
    <img className="timeline-img" src={agra} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA' }}
    className="vertical-timeline-element--work"
    date="2011"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Bhutan</h3>
    <p className="timeline-content">
       Humari pehli "foreign" trip
    </p>
    <img className="timeline-img" src={bhutan} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#830A48', color: '#F5F3EA' }}
    className="vertical-timeline-element--work"
    date="2012"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Junior Sapphire House Prefect</h3>
    <p className="timeline-content">
      Pta nhi kaise
    </p>
    <img className="timeline-img" src={sapphire} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#830A48', color: '#F5F3EA' }}
    className="vertical-timeline-element--work"
    date="2016"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Fun-N-Food Village</h3>
    <p className="timeline-content">
      Kitne gande dikhte the hum
    </p>
    <img className="timeline-img" src={funNFoodVillage} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#830A48', color: '#F5F3EA' }}
    className="vertical-timeline-element--work"
    date="2018"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Amritsar Trip</h3>
    <p className="timeline-content">
      Ghar se bhaag jayega to rehna ka intezaam aur "Punjab Police" se protection
    </p>
    <img className="timeline-img" src={amritsar} alt=""/>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA' }}
    className="vertical-timeline-element--education"
    date="May 5, 2018"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">Kerala Wapasi</h3>
    <p className="timeline-content">
      Dilli chhodke ammumma appuppan ke saath rehne ka suvarna awsar
    </p>
    <img className="timeline-img" src={keralaWapasi} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020"
    contentStyle={{ background: '#830A48', color: '#F5F3EA' }}
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">College Admission</h3>
    <p className="timeline-content">
    Bohot Saare college se dhakke khaane ke baad world famous "S.N Chempazhanthy" mein bharti
    </p>
    <img className="timeline-img" src={SNClg} alt=""/>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#3C91E6', color: '#F5F3EA' }}
    date="Dec 15, 2021"
    iconStyle={{ background: '#0F7173', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title timeline-head">20th birthday</h3>
    <p className="timeline-content">
      20 years of tolerating you
    </p>
    <img className="timeline-img" src={current} alt=""/>
  </VerticalTimelineElement>
</VerticalTimeline>
  </section>
}

export default Timeline