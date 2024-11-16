import React from 'react'
import './possibility.css'
import { data } from '../../edit/data/export';

const { navLinks, section3 } = data;

const Possibility = () => {
  return (
      <div className='gpt3__possibility section__padding' id={navLinks[3].replaceAll(' ', '').toLocaleLowerCase()}>
        <div className='gpt3__possibility-image'>
          <img src={section3.image.src} alt={section3.image.alt} />
        </div>
        <div className='gpt3__possibility-content'>
          <h4>{section3.text2}</h4>
          <h1 className='gradient__text'>
            {section3.title}
          </h1>
          <p>
            {section3.text1}
          </p>
          <h4>{section3.text2}</h4>
        </div>
      </div>
  )
}

export default Possibility;
