import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayoutWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.main`
  height: calc(100vh - 90px - 131px);
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
