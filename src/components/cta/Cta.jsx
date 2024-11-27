import React from 'react'
import './cta.css'
import { cta } from '../../edit/data/export';

const Brand = () => {
  return (
    <div className='gpt3__cta'>
      
      <div className='gpt3__cta-content'>
        <p>{cta.text}</p>
        <h3>{cta.title}</h3>
      </div>

      <div className='gpt3__cta-btn'>
        <button type='button'>{cta.btnText}</button>
      </div>
    </div>
  )
}
export default Brand
