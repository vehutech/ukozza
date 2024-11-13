import React from 'react'
import './features.css'
import { Feature } from '../../components';
import { data } from '../../edit/data/export';
import { Fade, Zoom } from 'react-awesome-reveal';

const Features = () => {

  const { navLinks, section2 } = data;

  return (
    <Fade direction='up' duration={800}>
      <div className='gpt3__features section__padding' id={navLinks[2].replaceAll(' ', '').toLowerCase()}>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>
            {section2.lead.title}
          </h1>
          <p>{section2.lead.text}</p>
        </div>
        <div className='gpt3__features-container'>
          {section2.items.map((item, i) => (
            <Feature
              key={i}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Features
