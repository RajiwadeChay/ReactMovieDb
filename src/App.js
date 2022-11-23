import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectRoute from './Route';


function App() {
  const [search, setSearch] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const onSearch = (e) => {
    e.preventDefault();

    if (search) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4cbcac8a282c08aa737f254c9ba06df5&language=en-US&query=${search}`)
        .then(result => { setTimeout(() => { setMovies(result.data.results); }, 200); }).catch(error => { setError(error); });
    } else {
      setMovies([]);
    }
  }

  return (
    <div className='container'>
      <Header onSearch={(e) => onSearch(e)} search={search} setSearch={(value) => setSearch(value)} />
      <ProjectRoute movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
