import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SelectWrap = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ErrorIcon = styled.img`
  transform: rotate(${(props) => props.rotate});
  transition: 0.3s;
`;

const CustomSelect = () => {
  const navigate = useNavigate();
  const [linkToggle, setLinkToggle] = useState(false);

  return (
    <SelectWrap className="select">
      <div className="selected" onClick={() => setLinkToggle(!linkToggle)}>
        <div className="label">Link</div>
        <ErrorIcon
          src="/images/icon-arrow.svg"
          alt="arrow"
          rotate={linkToggle ? "0deg" : "180deg"}
        />
      </div>
      {linkToggle && (
        <ul className="optionWrap">
          <li className="option" onClick={() => navigate("#")}>
            YongPyong
          </li>
          <li className="option" onClick={() => navigate("#")}>
            Youtube
          </li>
        </ul>
      )}
    </SelectWrap>
  );
};

export default CustomSelect;
