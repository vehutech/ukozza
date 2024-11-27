import React from 'react'
import './footer.css'
import { footer } from '../../edit/data/export'

const { items } = footer;

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>

      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>{footer.title}</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>{footer.btnText}</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
          <img src={footer.logo.src} alt={footer.logo.alt} />
          <p>{footer.address}</p>
        </div>

        {items.map((item, parentKey) => (
          <div key={parentKey} className='gpt3__footer-links_div'>
            <h4>{item.title}</h4>

            <section className={`${parentKey === 0 ? 'socialMediaIconGroup' : ''}`}>
              {item.utility.map((network, childKey) => (
                <>
                  {parentKey == 0 ? (
                    <a target='blank' href={network.link} key={childKey}>
                      <img className='smallIcon' src={network.src} alt={network.alt} />
                    </a>
                  ) : (
                    <p key={childKey}>{network}</p>
                  )}
                </>
              ))}
            </section>

          </div>
        ))}

      </div>

      <div className='gpt3__footer-copyright'>
        <p>{footer.copyRight}</p>
      </div>

    </div>
  )
}

export default Footer
