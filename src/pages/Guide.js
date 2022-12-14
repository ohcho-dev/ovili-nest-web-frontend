import React from "react";
import SubLayout from "../layouts/SubLayout";
import "./styles/guide.scss";
// import img1 from '/';

const Guide = () => {
  return <SubLayout className="guid-subLayout">
    <div className="guide-container">
      <div className="inner-container">
        <div className="text"><img src='images/common/coming-soon.svg' className="img1" alt="Coming Soon" /></div>
      </div>
      <div className="line">&nbsp;</div>
      <div className="back-redial"></div>
    </div>
  </SubLayout>;
};

export default Guide;
