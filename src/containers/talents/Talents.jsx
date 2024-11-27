import React, { useState } from 'react'
import { navLinks, section4 } from '../../edit/data/export'
import './talents.css'
import { Linkedin, Github, Twitter, Globe } from 'react-bootstrap-icons';

const socialIcons = [
    <Github className='socialIcons' />,
    <Twitter className='socialIcons' />,
    <Globe className='socialIcons' />
];

const Talents = () => {

    const [showDevelopers, setShowDevelopers] = useState(false);

    const handleShowDevelopers = () => {
        setShowDevelopers((prev) => !prev);
    }

    return (
        <>
            <div style={{ background: 'var(--color-footer)', padding: '2rem' }}>
                <button
                    onClick={() => handleShowDevelopers()}
                    className='transparent meetDevBtn'
                >
                    <h1 class="gradient__text text-center" >{ showDevelopers ? section4[0].title[1] : section4[0].title[0]}</h1>
                </button>
            </div>
            {
                showDevelopers && (
                    <div className="container">
                        {section4.map((developer, i) => (
                            <>
                                {i > 0  && (
                                    <div className="employee-card scale-up-center">
                                        <div className="profile-image">
                                            <img src={developer.image} alt={`Image of '${developer.name}'`} />
                                        </div>
                                        <div className="employee-info">
                                            <p className="name">{developer.name}</p>
                                            <p className="role">{developer.job}</p>
                                            <p className="about">{developer.about}</p>
                                            <div className="social-links">
                                                {developer.network.map((socials, i) => (
                                                    <button key={i} className='transparent'>
                                                        <a href={socials.link}>{socials.icon}</a>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                )}
        </>
    )
}

export default Talents
