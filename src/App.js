import './App.css';
import { useState, useEffect }  from 'react';
import { Route, Link }          from 'react-router-dom'
import Nav    from './components/Nav'
import Home   from './components/Home'
import Footer from './components/Footer'
import FilmsDetail  from './components/films/FilmsDetail'
import FilmsList    from './components/films/FilmsList'
import PeopleList   from './components/people/PeopleList'
import PeopleDetail from './components/people/PeopleDetail'
import icon from './star-wars-logo.jpg'

function App() {

  const [page, setPage] = useState(1)

    return (
      <div className="App">

        <div className="App-header">
          <Link to='/'><img className='header-bg' src={icon} alt='cover'/></Link>
          <Route component={Nav}/>
        </div>

        <div className="App-main">
          <Route exact path='/' component={Home}/>

          <Route 
          exact path='/films' 
          component={FilmsList}
          />
          <Route exact path='/films/:episode_id' 
          render={(routerProps) =>
            <FilmsDetail
            episode_id={routerProps.match.params.episode_id}
            />
          }
          />

          <Route
          exact path='/people'
          render={() => 
            <PeopleList
              page={page}
              setPage={setPage}
            />
          }
          />
          
          <Route exact path='/people/:person_id' 
          render={(routerProps) =>
            <PeopleDetail
            page={page}
            person_id={routerProps.match.params.person_id}
            />
          }
          />

        </div>

        <div className="App-footer">
          <Route
          component={Footer}/>
        </div>

      </div>
    );

}

export default App;
