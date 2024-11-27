import React, { useState } from 'react'
import './feature.css'
import { brand } from '../../edit/data/export'

const Feature = ({ title, text, some }) => {

  const [isAboutNextJsVisible, setIsAboutNextJsVisible] = useState(false)

  const revealAboutNext = () => {
    setIsAboutNextJsVisible(prev => !prev)
  }

  return (

    <div>
      <div className='gpt3__features-container__feature'>
        <div className='gpt3__features-container__feature-title'>
          <div />
          {some && (
            <img className='smallIcon' src={brand.logo.src} alt="" />
          )}
          <h1>{title}</h1>
        </div>
        <div className='gpt3__features-container__feature-text'>
          <p>
            {text}
            {some && (
              <button
                onClick={() => revealAboutNext()}
                className={`inlineBtn ${isAboutNextJsVisible ? 'whitish' : ''}`}>
                NextJs
                <div className="blinkEffect circle">
                  <div className="circle"></div>
                </div>
              </button>
            )}
          </p>
        </div>
      </div>

      {some && isAboutNextJsVisible && (
        <div className='aboutNext'>
          <p className='gradient__text scale-up-center'>
            Next.js is a powerful, React-based framework that enables developers to build fast, scalable web applications. It simplifies development by supporting server-side rendering, static site generation, and seamless API routes, all while offering optimized performance and enhanced SEO out of the box. Perfect for creating high-performance, customizable user interfaces, Next.js is widely used for both simple and complex projects alike.
          </p>
        </div>
      )}

    </div>
  )
}
export default Feature
