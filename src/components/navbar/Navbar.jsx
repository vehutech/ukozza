import React, { useState, useEffect } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { data, brandName } from '../../edit/data/export';

const { brand, navLinks } = data;

const Menu = () => {

  return (
    <>
      {
        navLinks.map((item, i) => (
          <p key={i}>
            <a href={`#${item.replaceAll(' ', '').toLowerCase()}`}>
              {item}
            </a>
          </p>
        ))
      }
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    console.log(window.scrollY);

    if (window.scrollY < 200) {
      setShowNavbar(false);
      return;
    }

    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (

    <div className={`gpt3__navbar ${showNavbar ? 'show' : ''}`}>

      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={brand.logo.src} alt={brand.logo.alt} />
          <img src={brand.logoMain.src} alt={brand.logoMain.alt} />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        {
          toggleMenu ?
            <RiCloseLine color='#ff4820' size={27} onClick={() => setToggleMenu(false)} /> :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />

              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>

            </div>
          </div>
        )}
      </div>

    </div>
  )
}
export default Navbar
