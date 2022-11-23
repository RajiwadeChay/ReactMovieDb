import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';

function Header(props) {
    const [loading, setLoading] = useState(true);

    const addclass = () => {
        document.querySelector("#ham").classList.toggle('active-ham');
        document.querySelector("#nav").classList.toggle('active-nav');
    }

    if (!loading) {
        return <p>Downloading data...</p>;
    } else {
        return (
            <header>
                <div className="wrapper">
                    <h1>
                        <a href="/" title="Home Page">MovieDb</a>
                    </h1>
                    <div className="hamburger" id='ham' onClick={addclass} >
                        <span className="bar">bar</span>
                    </div>
                    <>
                        <Navbar />
                    </>
                    <form className="search-form" onSubmit={props.onSearch}>
                        <div className='search-bar'>
                            <label htmlFor="searchBar"></label>
                            <input type="text" id="searchBar" value={props.search} onChange={(e) => props.setSearch(e.target.value)} placeholder="Movie Name" />
                        </div>
                        <div className="search-submit" onClick={props.onSearch}>
                            <input type="submit" value="&#128269;" />
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default Header;