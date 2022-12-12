import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CustomSelect from "./CustomSelect";
import HambergMenu from "./HambergMenu";
import MenuItem from "./MenuItem";

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

  @media screen and (max-width: 768px) {
    height: 56px;
  }
`;
const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Logo = styled.img`
  width: 199px;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
const MobileNav = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
  }
`;
const MenuBtn = styled.img`
  width: 100%;
`;

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <HeaderWrap>
      <Container>
        <NavWrap>
          <Link to="/">
            <Logo src="/images/logo.svg" alt="ovili nest" />
          </Link>
          <MenuItem />
        </NavWrap>
        <CustomSelect />

        <MobileNav onClick={handleMenuToggle}>
          <MenuBtn src="/images/icon-menu.svg" alt="menu" />
        </MobileNav>
        {menuToggle && <HambergMenu handleMenuToggle={handleMenuToggle} />}
      </Container>
    </HeaderWrap>
  );
};

export default Header;
