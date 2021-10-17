import {useContext} from 'react';
import './App.css';
import Search from './components/Search';
import Movie from './components/Movie';
import {StateContext} from './store/reducer/GlobalState';

function App() {
  const {state} = useContext(StateContext)
  const {loading, errorMessage, movies} = state;
  return (
    <div className="App">
      <Search />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}`} {...movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
