import { Nav, NavLink, NavMenu } from "./NavbarElements";

export default function Header() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Popular" activeStyle>
                        Popular
                    </NavLink>
                    <NavLink to="/TopRated" activeStyle>
                        Top Rated
                    </NavLink>
                    <NavLink to="/Upcoming" activeStyle>
                        Upcoming
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}