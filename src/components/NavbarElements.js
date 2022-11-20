import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 85px;
  padding: 20px;
  display: flex;
  background: #333A3F;
  justify-content: space-between;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  padding: 0 5px;
  align-items: center;
  color: #777B7F;
  cursor: pointer;
  text-decoration: none;
  &.active {
    color: #4285F4;
  }
`;

export const NavMenu = styled.div`
  margin-right: 3px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;