import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function PeopleList(props) {

    const [people, setPeople] = useState()
    let page = 1;
    let personId = 0;
    
    const getData = (num) => {
      const url = `https://swapi.dev/api/people/?${num}`
      fetch(url)
      .then(res => res.json())
      .then(res => setPeople(res.results))
      .catch(console.error)
    }
    useEffect(() => {
      getData(page)
    }, [])

    if (people) {
      const peopleList = people.map(p => {
        personId++;
        return (
          <Link to={`/people/${personId}`}>
          <div className= 'card'>
              <div className='card-image'>
                <img
                src='img/people/3/'
                alt='profile'
                />
              </div>
              <div className='card-name'>
                {p.name}
              </div>
            </div>
          </Link>
        );
      })

      return (
        <div className='list'>
          {peopleList}
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

export default PeopleList;