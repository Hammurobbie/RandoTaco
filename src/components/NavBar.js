import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  width: 86%;
  justify-content: space-between;
  text-decoration: none;
  background-color: #fcd16b;
  color: #fcd16b;
  padding: 2% 7% 2% 7%;
  border-bottom: 1px solid #d3dddc;
`;

const NavLinks = styled.a`
  text-decoration: none;
  color: #456355;
  font-size: 1.25rem;
`;

const InnerNav = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  list-style: none;
`;

const NavBar = () => {
  return (
    <div>
      <NavDiv>
        <Link to="/">
          <NavLinks>RandoTaco</NavLinks>
        </Link>
        <InnerNav>
          <div>
            <Link to="/home">
              <NavLinks>Home</NavLinks>
            </Link>
          </div>
          <div>
            <Link to="/cocktails">
              <NavLinks>Cocktails</NavLinks>
            </Link>
          </div>
        </InnerNav>
      </NavDiv>
    </div>
  );
};

export default NavBar;
