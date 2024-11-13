import React from 'react';
import './header.css';
import { data } from '../../edit/data/export';

const { hero, navLinks } = data;

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id={navLinks[0].replaceAll(' ', '').toLowerCase()}>
      <div className='gpt3__header-content'>
        <div className="titleGroup">
          <h1 className='gradient__text'>{hero.title1}</h1>
          <h1 className='gradient__textBright'>{hero.title2}</h1>
        </div>
        <p>{hero.text1}</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={hero.images.subImg.src} alt={hero.images.subImg.alt} />
          <p>{hero.text2}</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={hero.images.leadImg.src} alt={hero.images.leadImg.alt} />
      </div>

    </div>
  )
}

export default Header
