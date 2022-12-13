import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import MenuItem from "./MenuItem";

const FadeAnimation = keyframes`
    0% {
        opacity: 0;
    };
    100% {
        opacity: 1;
    }
`;

const HambergMenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;
const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  animation: ${FadeAnimation} 0.2s linear alternate;
`;
const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 200px;
  height: 100vh;
  background: #000;
`;
const CloseWrap = styled.div`
  width: 100%;
  height: 56px;
  padding: 15px 20px;
  text-align: right;
  border-bottom: 1px solid #484848;
`;
const CloseIcon = styled.img`
  width: 24px;
`;
const MobileNavLists = styled.nav`
  padding: 14px 0;
  width: 100%;
`;
const MobileNav = styled.li`
  width: 100%;
  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.05em;
  color: #ffffff;
  padding: 18px 20px;
`;
const SelectWrap = styled.div``;
const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
`;
const Label = styled.div`
  width: 100%;
  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.05em;
  color: #ffffff;
`;
const ErrorIcon = styled.img`
  transform: rotate(${(props) => props.rotate});
  transition: 0.3s;
`;
const OptionWrap = styled.ul`
  width: 100%;
  padding: 8px 0;
  background: #2e2c2c;
`;
const Option = styled.li`
  padding: 8px 20px;
  font-family: "Lexend";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

const HambergMenu = ({ handleMenuToggle }) => {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const [linkToggle, setLinkToggle] = useState(false);

  return (
    <>
      {windowSize.width <= 768 && (
        <HambergMenuWrap>
          <Dimmed onClick={handleMenuToggle} />
          <Modal className="slideAnimation">
            <CloseWrap>
              <CloseIcon
                src="/images/icon-close.svg"
                alt="닫기"
                onClick={handleMenuToggle}
              />
            </CloseWrap>

            <MobileNavLists>
              <MobileNav onClick={() => navigate("/world")}>WORLD</MobileNav>
              <MobileNav onClick={() => navigate("/journey")}>
                JOURNEY MAY
              </MobileNav>
              <MobileNav onClick={() => navigate("/utility")}>
                UTILITY
              </MobileNav>
              <MobileNav onClick={() => navigate("/nest")}>NEST</MobileNav>
              <MobileNav onClick={() => navigate("/guide")}>GUIDE</MobileNav>
              <MobileNav onClick={() => navigate("/faq")}>FAQ</MobileNav>

              <SelectWrap>
                <Selected onClick={() => setLinkToggle(!linkToggle)}>
                  <Label>Link</Label>
                  <ErrorIcon
                    src="/images/icon-arrow.svg"
                    alt="arrow"
                    rotate={linkToggle ? "0deg" : "180deg"}
                  />
                </Selected>
                {linkToggle && (
                  <OptionWrap>
                    <Option onClick={() => navigate("#")}>YongPyong</Option>
                    <Option onClick={() => navigate("#")}>Youtube</Option>
                  </OptionWrap>
                )}
              </SelectWrap>
            </MobileNavLists>
            <MenuItem />
          </Modal>
        </HambergMenuWrap>
      )}
    </>
  );
};

export default HambergMenu;
