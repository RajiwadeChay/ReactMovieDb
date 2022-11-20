import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import MainBody from './components/MainBody';
// import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      {/* <Header />
      <MainBody />
      <Footer /> */}
      <header>
        <div className="wrapper">
          <h1>
            <a href="/" title="Home Page">MovieDb</a>
          </h1>
          <div className="hamburger">
            <span className="bar">bar</span>
          </div>
          <nav>
            <ul>
              <li><a href="/components/Popular">Popular</a></li>
              <li><a href="/components/TopRated">Top Rated</a></li>
              <li><a href="/components/Upcoming">Upcoming</a></li>
            </ul>
          </nav>
          <form className="search-form">
            <div className='search-bar'>
              <label htmlFor="searchBar"></label>
              <input type="text" id="searchBar" placeholder="Movie Name" />
            </div>
            <div className="search-submit">
              <input type="submit" value="&#128269;" />
            </div>
          </form>
        </div>
      </header>
      <main>
        <div className="wrapper">
          {/* <ul className="movie-list">
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>
            <li>
              <figure>
                <img src="https://via.placeholder.com/245X330" alt="Movie Poster" />
              </figure>
              <p className='movie-name'><a href="#FIXME" title='Movie Name'>Movie Name</a></p>
              <p className='rating'>Rating</p>
            </li>

          </ul> */}
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
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>&copy; MovieDb Copy Rights Reserved 2022</p>
          <div className="footer-logo">
            <a href="/" title="Home Page">MovieDb</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
