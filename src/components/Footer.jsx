import React from 'react';
import { Link } from 'react-router-dom'
function Footer(props) {
    return (
        <div className='footer'>
            <Link to=''>
                Github
            </Link>
            <p>
                &#0169; Troi Vergara
            </p>
        </div>
    );
}

export default Footer;