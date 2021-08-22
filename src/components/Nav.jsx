import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/films'>Film</Link>
            <Link to='/people'>People</Link>
            {/* <Link to='/planets'>Planets</Link>
            <Link to='/species'>Species</Link>
            <Link to='/vehicles'>Vehicles</Link>
            <Link to='/starships'>Starships</Link> */}
        </div>
    );
}

export default Nav;