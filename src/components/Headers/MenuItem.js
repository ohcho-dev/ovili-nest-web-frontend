import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.li`
  margin-right: 24px;
  cursor: pointer;
  font-family: "Lexend";
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;

  &:nth-child(5) {
    cursor: normal;
  }
`;

const MenuItem = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav>
        <NavItem onClick={() => navigate("/world")}>WORLD</NavItem>
        <NavItem onClick={() => navigate("/journey")}>JOURNEY MAY</NavItem>
        <NavItem onClick={() => navigate("/utility")}>UTILITY</NavItem>
        <NavItem onClick={() => navigate("/nest")}>NEST</NavItem>
        <NavItem>|</NavItem>
        <NavItem onClick={() => navigate("/guide")}>GUIDE</NavItem>
        <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
      </Nav>
    </>
  );
};
export default MenuItem;
