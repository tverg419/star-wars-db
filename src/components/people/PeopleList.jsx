import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function PeopleList({page, setPage}) {

    const [people, setPeople] = useState()
    let personId = 0;
    
    const getData = (num) => {
      const url = `https://swapi.dev/api/people/?page=${num}`
      fetch(url)
      .then(res => res.json())
      .then(res => setPeople(res.results))
      .catch(console.error)
    }
    useEffect(() => {
      setPage(1)
      getData(page)
    }, [])
    const nextPage = () => {
      if (page < 9) {
        let newPage = parseInt(page) + 1;
        setPage(newPage)
        getData(newPage)
      }
    }
    
    const prevPage = () => {
      if (page > 1) {
        let newPage = parseInt(page) - 1;
        setPage(newPage)
        getData(newPage)
      }
    }
    if (people) {
      const peopleList = people.map(p => {
        personId++;
        return (
          <Link to={`/people/page=${page}/${personId}`}>
          <div className= 'card'>
              <div className='card-image'>
                <img
                src='img/not-available.png'
                alt='img/not-available.png'
                />
              </div>
              <div className='card-name'>
                <h4>{p.name}</h4>
              </div>
            </div>
          </Link>
        );
      })

      return (
        <div >

          <div className='list people-list'>
            {peopleList}
          </div>

          <div className='button-container'>
            <button onClick={prevPage}>Previous</button>
            <p>{page}/9</p>
            <button onClick={nextPage}>Next</button>
          </div>

        </div>
        );

    } else {

        return (
            <div>
                <h1>Fetching Data</h1>
            </div>
        );
    }
}

export default PeopleList;