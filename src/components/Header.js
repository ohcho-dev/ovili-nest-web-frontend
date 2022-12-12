import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrap = styled.header`
  background: #000;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
`;

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Nav = styled.nav`
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
const LinkWrap = styled.div``;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <Container>
        <NavWrap>
          <img src="/images/logo.svg" alt="ovili nest" />
          <Nav>
            <NavItem>WORLD</NavItem>
            <NavItem>JOURNEY MAY</NavItem>
            <NavItem>UTILITY</NavItem>
            <NavItem>NEST</NavItem>
            <NavItem>|</NavItem>
            <NavItem>GUIDE</NavItem>
            <NavItem>FAQ</NavItem>
          </Nav>
        </NavWrap>
        <div className="select">
          <div className="selected" onClick={() => setToggle(!toggle)}>
            <div className="label">Link</div>
            <div className="arrow"></div>
          </div>
          {toggle && (
            <ul className="optionWrap">
              <li className="option" onClick={() => navigate("#")}>
                YongPyong
              </li>
              <li className="option" onClick={() => navigate("#")}>
                Youtube
              </li>
            </ul>
          )}
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
