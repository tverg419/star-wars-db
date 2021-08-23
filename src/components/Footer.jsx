import React from 'react';
import ghLogo from '../logos/github-logo.png'
import linkLogo from '../logos/linkedin-logo.png'
function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-text'>
                <p>Website Created By: Troi Vergara 2021</p>
                <p>All data was taken from <a href='https://swapi.dev/'>Star Wars API.</a></p><br/> 
            </div>
            <div className='social-icons'>
                <a href='https://github.com/tverg419/star-wars-db'>
                    <img
                    src={ghLogo}
                    alt='github'
                    />
                </a>
                <a href='https://www.linkedin.com/in/troi-vergara/'>
                    <img
                    src={linkLogo}
                    alt='linkedin'
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;