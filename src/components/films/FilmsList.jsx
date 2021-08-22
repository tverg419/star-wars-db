import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function FilmsList(props) {

    const [films, setFilms] = useState()
    
    useEffect(() => {
      const url = 'https://swapi.dev/api/films'
      fetch(url)
      .then(res => res.json())
      .then(res => setFilms(res.results))
      .catch(console.error)
      
    }, [])

    if (films) {
      const filmsList = films.map(f => {
        return (
            <Link to={`/films/${f.episode_id}`} key={films.episode_id}>
            <div className= 'film-card'>
                <div className='card-image'>
                  <img
                  src='/'
                  alt='profile'
                  />
                </div>
                <div className='card-name'>
                  {f.title}
                </div>
              </div>
            </Link>
        );
      })
      return (
        <div className='list'>
          {filmsList}
        </div>
        );

    } else {

        return (
            <div>
                <h1>Data Not Fetched</h1>
            </div>
        );
    }
}

export default FilmsList;