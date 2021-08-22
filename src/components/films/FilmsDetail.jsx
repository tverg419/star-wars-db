import React, { useState, useEffect }  from 'react';

function FilmsDetail({ episode_id }) {
    
    const [films, setFilms] = useState()
    const [index, setIndex] = useState(0)
    
    const getIndex = (id) => {
        if (id == 1 || id == 2 || id == 3) {
            setIndex(id + 2)
        } else {
            setIndex(id - 4)
        }
    }
    useEffect(() => {
      const url = 'https://swapi.dev/api/films'
      fetch(url)
      .then(res => res.json())
      .then(res => {
        setFilms(res.results)
        getIndex(parseInt(episode_id))
        })
      .catch(console.error)
      
    }, [])
    
    if (films) {
        return (
            <div className='details-container'>

            <div className='film-image'>
                <img
                className='film-poster' 
                src={`/img/films/${episode_id}/poster.png`}
                alt='cover'
                />
            </div>

            <section className='details'>
                <h2>{films[index].title}</h2>
                <h4>Released: {films[index].release_date}</h4>
                <h4>Director: {films[index].director}, Producer: {films[index].producer}</h4>
                <p>{films[index].opening_crawl}</p>
            </section>
            
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

export default FilmsDetail;