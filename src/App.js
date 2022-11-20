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
          <ul className="movie-list">
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

          </ul>
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
