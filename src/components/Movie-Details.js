function MovieDetails() {
    return (
        <>
            <div className="detail-card">
                <div className="detail">
                    <figure>
                        <img src="https://via.placeholder.com/200X250" alt="Movie Poster" />
                    </figure>
                    <div className="card-info">
                        <h3 className='card-movie-name'>Movie Name</h3>
                        <p className='movie-rating'>10</p>
                        <div className='movie-info'>
                            <span className="runtime">90min</span>
                            <span className="genre">Action,Adventure</span>
                        </div>
                        <p className='release-date'>Release Date : Thu Sep 30 2022</p>
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
                    <li>
                        <figure>
                            <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
                        </figure>
                        <p className='cast-name'>Cast Name</p>
                        <p className='character'>character</p>
                    </li>
                    <li>
                        <figure>
                            <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
                        </figure>
                        <p className='cast-name'>Cast Name</p>
                        <p className='character'>character</p>
                    </li>
                    <li>
                        <figure>
                            <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
                        </figure>
                        <p className='cast-name'>Cast Name</p>
                        <p className='character'>character</p>
                    </li>
                    <li>
                        <figure>
                            <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
                        </figure>
                        <p className='cast-name'>Cast Name</p>
                        <p className='character'>character</p>
                    </li>
                    <li>
                        <figure>
                            <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
                        </figure>
                        <p className='cast-name'>Cast Name</p>
                        <p className='character'>character</p>
                    </li>
                    <li>
                        <figure>
                            <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
                        </figure>
                        <p className='cast-name'>Cast Name</p>
                        <p className='character'>character</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MovieDetails;