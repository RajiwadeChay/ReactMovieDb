import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";

const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const [casts, setCasts] = useState();
    const [loading, setLoading] = useState(true);
    let { id } = useParams();
    let location = useLocation();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4cbcac8a282c08aa737f254c9ba06df5&language=en-US`)
            .then(result => {
                setTimeout(() => {
                    setDetails(result.data);
                }, 500);
            }).catch(err => { console.log(err); });
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4cbcac8a282c08aa737f254c9ba06df5&language=en-US`)
            .then(result => {
                setTimeout(() => {
                    setCasts(result.data.cast);
                    setLoading(false);
                }, 500);
            }).catch(err => { console.log(err); });
    }, []);

    return (
        <React.Fragment>
            <div className="wrapper">
                {loading ?
                    <p>Fetching data...</p>
                    : <>
                        <div className="detail-card">
                            <div className="detail">
                                <figure>
                                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="Movie Poster" />
                                </figure>
                                <div className="card-info">
                                    <h3 className='card-movie-name'>{details.title}</h3>
                                    <p className='movie-rating'>Rating : {details.vote_average}</p>
                                    <div className='movie-info'>
                                        <span className="runtime">{details.runtime} min</span>
                                        <span className="genre">
                                            {
                                                details.genres.map((genre, i) => {
                                                    if (i != details.genres.length - 1) {
                                                        return `${genre.name}, `
                                                    } else { return genre.name }
                                                })
                                            }
                                        </span>
                                    </div>
                                    <p className='release-date'>Release Date : {details.release_date}</p>
                                </div>
                            </div>
                            <div className="overview">
                                <h4>Overview</h4>
                                <p className='overview-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, quas error? Id pariatur animi atque repellendus illum rerum, perspiciatis nostrum, voluptas consequuntur architecto assumenda corrupti voluptatum facere. Aperiam, ratione quidem.</p>
                            </div>
                        </div>
                        <div className="cast">
                            <h4>Cast</h4>
                            <ul className='cast-list'>
                                {casts.map((cast, i) =>
                                (
                                    <li key={cast.id}>
                                        <figure>
                                            <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="Movie Poster" />
                                        </figure>
                                        <p className='cast-name'>{cast.name}</p>
                                        <p className='character'>{cast.character}</p>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                    </>
                }
            </div>
        </React.Fragment>
    )
}

export default MovieDetails;

// function MovieDetails() {
//     return (
//         <>
//             <div className="detail-card">
//                 <div className="detail">
//                     <figure>
//                         <img src="https://via.placeholder.com/200X250" alt="Movie Poster" />
//                     </figure>
//                     <div className="card-info">
//                         <h3 className='card-movie-name'>Movie Name</h3>
//                         <p className='movie-rating'>10</p>
//                         <div className='movie-info'>
//                             <span className="runtime">90min</span>
//                             <span className="genre">Action,Adventure</span>
//                         </div>
//                         <p className='release-date'>Release Date : Thu Sep 30 2022</p>
//                     </div>
//                 </div>
//                 <div className="overview">
//                     <h4>Overview</h4>
//                     <p className='overview-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, quas error? Id pariatur animi atque repellendus illum rerum, perspiciatis nostrum, voluptas consequuntur architecto assumenda corrupti voluptatum facere. Aperiam, ratione quidem.</p>
//                 </div>
//             </div>
//             <div className="cast">
//                 <h4>Cast</h4>
//                 <ul className='cast-list'>
//                     <li>
//                         <figure>
//                             <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
//                         </figure>
//                         <p className='cast-name'>Cast Name</p>
//                         <p className='character'>character</p>
//                     </li>
//                     <li>
//                         <figure>
//                             <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
//                         </figure>
//                         <p className='cast-name'>Cast Name</p>
//                         <p className='character'>character</p>
//                     </li>
//                     <li>
//                         <figure>
//                             <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
//                         </figure>
//                         <p className='cast-name'>Cast Name</p>
//                         <p className='character'>character</p>
//                     </li>
//                     <li>
//                         <figure>
//                             <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
//                         </figure>
//                         <p className='cast-name'>Cast Name</p>
//                         <p className='character'>character</p>
//                     </li>
//                     <li>
//                         <figure>
//                             <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
//                         </figure>
//                         <p className='cast-name'>Cast Name</p>
//                         <p className='character'>character</p>
//                     </li>
//                     <li>
//                         <figure>
//                             <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
//                         </figure>
//                         <p className='cast-name'>Cast Name</p>
//                         <p className='character'>character</p>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// }