import React, { useState, useEffect }  from 'react';

function PeopleDetail({ person_id }) {
    console.log(person_id)
    const [people, setPeople] = useState()
    const [index, setIndex] = useState()

    useEffect(() => {
      const url = `https://swapi.dev/api/people/?page=${person_id}`
      fetch(url)
      .then(res => res.json())
      .then(res => setPeople(res.results))
      .catch(console.error)
      
    }, [])
    console.log(people)

    if (people) {
        return (
            <div className='details-container'>

            <div className='person-image'>
                <img
                className='person-poster' 
                src={`/img/people/${index}/poster.png`}
                alt='cover'
                />
            </div>

            <section className='details'>
                <h2>{people[index].name}</h2>
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