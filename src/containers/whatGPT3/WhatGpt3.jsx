import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'
import { navLinks, section1 } from '../../edit/data/export'

const WhatGpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id={navLinks[1].replaceAll(' ', '').toLocaleLowerCase()}>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title={section1.items[0].title}
          text={section1.items[0].text}
          some={true}
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>
          {section1.lead.title}
        </h1>
        <a href={`#${navLinks[4].replaceAll(' ', '').toLowerCase()}`}>{section1.lead.text}</a>
      </div>
      <div className="gpt3__whatgpt3-container">
        {section1.items.map((item, i) => (
          <>
            {i >= 1 && (
              <Feature
                title={item.title}
                text={item.text}
              />
            )}
          </>
        ))}
      </div>
    </div >
  )
}

export default WhatGpt3
