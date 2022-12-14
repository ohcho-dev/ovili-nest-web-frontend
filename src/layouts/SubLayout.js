import React from "react";
import styled from "styled-components";
import Footer from "../components/Footers";
import Header from "../components/Headers";

const SubLayoutWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Content = styled.main`
  width: 100%;
  color: #fff;
`;

const SubLayout = ({ children }) => {
  return (
    <SubLayoutWrap>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </SubLayoutWrap>
  );
};

export default SubLayout;
