import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4cbcac8a282c08aa737f254c9ba06df5&language=en-US&page=1')
            .then(result => {
                setTimeout(() => { setMovies(result.data.results); }, 200);
            }).catch(error => { setError(error); });
    }, []);

    if (error) {
        return <p className="error">Error: {error.message}</p>;
    } else if (!loading) {
        return <p>Downloading data...</p>;
    } else {
        return (
            <React.Fragment>
                <div className="wrapper">
                    {movies.length < 1 ?
                        <p>Fetching data...</p>
                        :
                        <ul className="movie-list">
                            {movies.map((movie, i) =>
                            (
                                <li key={movie.id}>
                                    <Link to={{
                                        pathname: `/movie-details/${movie.id}`,
                                    }}>
                                        <figure>
                                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                                        </figure>
                                        <p className='movie-name'>{movie.title}</p>
                                        <p className='rating'>{movie.vote_average}</p>
                                    </Link>
                                </li>
                            )
                            )}
                        </ul>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default TopRated;