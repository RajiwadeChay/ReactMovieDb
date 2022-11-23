import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav id='nav'>
            <ul>
                <li><NavLink to='/'>Popular</NavLink></li>
                <li><NavLink to='/TopRated'>Top Rated</NavLink></li>
                <li><NavLink to='/Upcoming'>Upcoming</NavLink></li>
            </ul>
        </nav>
    )
}


