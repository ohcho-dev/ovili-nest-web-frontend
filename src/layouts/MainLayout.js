import React from "react";
import styled from "styled-components";
import Footer from "../components/Footers";
import Header from "../components/Headers";

const MainLayoutWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.main`
  height: calc(100vh - 90px - 131px);

  @media screen and (max-width: 768px) {
    height: calc(100vh - 56px - 205px);
  }
`;

const MainLayout = ({ children }) => {
  return (
    <MainLayoutWrap>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </MainLayoutWrap>
  );
};

export default MainLayout;
