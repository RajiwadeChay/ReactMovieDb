function Header() {
    return (
        <div className="header">
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
        </div>
    );
}

export default Header;