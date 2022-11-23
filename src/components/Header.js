import { Navbar } from './Navbar';

function Header() {

    function activateHamburger() {

    }

    return (
        <header>
            <div className="wrapper">
                <h1>
                    <a href="/" title="Home Page">MovieDb</a>
                </h1>
                <div className="hamburger" onClick={activateHamburger} >
                    <span className="bar">bar</span>
                </div>
                <>
                    <Navbar />
                </>
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
    );
}

export default Header;