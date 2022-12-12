import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 131px;
  max-width: 1280px;
  padding: 16px 40px;
  margin: 0 auto;
`;
const Address = styled.address`
  text-align: center;
`;
const AddressItem = styled.span`
  font-family: "Rubik";
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;

  &:nth-child(2n) {
    margin: 0 8px;
  }
`;
const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0 32px;
`;
const LinkItem = styled.div`
  font-family: "Rubik";
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
  text-decoration: underline;
  text-underline-position: under;

  &:nth-child(2n) {
    margin: 0 8px;
    text-decoration: none;
  }
`;
const Copyright = styled.div`
  font-family: "Rubik";
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #777777;
  text-align: center;
`;
const Footer = () => {
  return (
    <footer>
      <Container>
        <Address>
          <AddressItem>(주) 용평리조트 대표이사 : 신달순, 임학운</AddressItem>
          <AddressItem>|</AddressItem>
          <AddressItem>
            주소 : 강원도 평창군 대관령면 올림픽로 715(구 용산리 130)
          </AddressItem>
          <AddressItem>|</AddressItem>
          <AddressItem>제휴문의 XXX@XXX.com</AddressItem>
        </Address>

        <LinkWrap>
          <Link to="#">
            <LinkItem>이용약관</LinkItem>
          </Link>
          <LinkItem>|</LinkItem>
          <Link to="#">
            <LinkItem>개인정보처리방침</LinkItem>
          </Link>
        </LinkWrap>
        <Copyright>
          Copyright 2022 YONGPYONG RESORT All right reserved.
        </Copyright>
      </Container>
    </footer>
  );
};

export default Footer;
