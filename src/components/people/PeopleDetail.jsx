import React, { useState, useEffect }  from 'react';

function PeopleDetail({ page, person_id }) {

    const [people, setPeople] = useState()

    useEffect(() => {
      const url = `https://swapi.dev/api/people/?page=${page}`
      fetch(url)
      .then(res => res.json())
      .then(res => setPeople(res.results))
      .catch(console.error)
      
    }, [])

    if (people) {
        return (
            <div className='details-container'>

            <div className='person-image'>
                <img
                className='person-poster' 
                src={`/img/people/${person_id}/poster.png`}
                alt='cover'
                />
            </div>

            <section className='details'>
                <h2>{people[person_id - 1].name}</h2>
                <p>Birth Year: {people[person_id - 1].birth_year}</p>
                <p>Gender: {people[person_id - 1].gender}</p>
                <p>Skin Color: {people[person_id - 1].skin_color}</p>
                <p>Eye Color: {people[person_id - 1].eye_color}</p>
                <p>Height: {people[person_id - 1].height.charAt(0)}.{people[person_id - 1].height.slice(1)} meters</p>
                <p>Mass: {people[person_id - 1].height}kg</p>
            </section>
            
        </div>
        );
    } else {
        return(
            <div>
                Data Not Fetched
            </div>
        );
    }
}

export default PeopleDetail;