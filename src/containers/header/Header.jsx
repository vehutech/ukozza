import React, { useEffect, useState } from 'react';
import './header.css';
import { hero, navLinks } from '../../edit/data/export';
import { ArrowBarUp, ArrowUpCircle, ArrowUpCircleFill } from 'react-bootstrap-icons';

const Header = () => {

  const [showScrollUpIcon, setShowScrollUpIcon] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);

    if (window.scrollY > 200) {
      setShowScrollUpIcon(true);
      return;
    }
    
    if (window.scrollY < 200) {
      setShowScrollUpIcon(false);
      return;
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      {showScrollUpIcon && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='transparent upDownEffect arrow-up-icon'>
          <ArrowUpCircle
            className='arrow-up-icon-elem'
          />
        </button>
      )}

    </div>
  )
}

export default Header
