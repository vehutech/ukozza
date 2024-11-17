import React from 'react'
import { data } from '../../edit/data/export'
import './talents.css'
import { Linkedin, Github, Twitter, Globe } from 'react-bootstrap-icons';

const socialIcons = [
    <Github className='socialIcons' />,
    <Twitter className='socialIcons'/>,
    <Globe className='socialIcons'/>
];

const { navLinks, section4 } = data;

const Talents = () => (
    <>
        <div style={{ background: 'var(--color-footer)', padding: '2rem' }}>
            <h1 class="gradient__text text-center" >{section4[0].title}</h1>
        </div>
        <div className="container">
            {section4.map((developer, i) => (
                <>
                    {i > 0 && (
                        <div className="employee-card">
                            <div className="profile-image">
                                <img src={developer.image} alt="Developer Name" />
                            </div>
                            <div className="employee-info">
                                <p className="name">{developer.name}</p>
                                <p className="role">{developer.job}</p>
                                <p className="about">{developer.about}</p>
                                <div className="social-links">
                                    {developer.network.map((socials, i) => (
                                        <>
                                            <button key={i} className='transparent'>
                                                <a href={socials.link}>{socials.icon}</a>
                                            </button>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </div>
    </>
)

export default Talents
