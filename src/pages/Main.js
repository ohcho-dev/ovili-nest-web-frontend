import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { useWindowSize } from "../hooks/useWindowSize";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
const VideoFontWrap = styled.div`
  @media screen and (max-width: 768px) {
    height: 158px;
    text-align: center;
  }
`;
const VideoFont = styled.div`
  display: inline-block;
  width: 20rem;
  height: 20rem;
  margin-right: 25px;
  cursor: pointer;
  -webkit-mask: url("${(props) => props.src}");
  mask: url("${(props) => props.src}");

  &:nth-child(6) {
    height: 120px;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    width: 8.8rem;
    height: 8.8rem;
    margin-right: 1rem;
    mask-size: 100%;
    -webkit-mask-size: 100%;
    &:nth-child(5) {
      margin-right: 0;
    }

    &:nth-child(6) {
      display: block;
      margin: 0 auto;
      margin-top: 15px;
      height: 5.3rem;
    }
  }
`;
const VideoFontSvg = styled.img`
  margin-right: 25px;
  cursor: pointer;

  &:nth-child(6) {
    height: 120px;
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    width: 8.8rem;
    height: 8.8rem;
    margin-right: 1rem;

    &:nth-child(5) {
      margin-right: 0;
    }

    &:nth-child(6) {
      height: 5.3rem;
    }
  }
`;
const Title = styled.h2`
  font-family: "Lexend";
  font-weight: 700;
  font-size: 56px;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #ffffff;
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    font-family: "Rubik";
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    text-align: center;
  }
`;
const Desc = styled.h4`
  font-family: "Rubik";
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  letter-spacing: -0.03em;
  color: #7d7d7d;

  @media screen and (max-width: 768px) {
    font-family: "Rubik";
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.05em;
    margin-top: 16px;
  }
`;
const VideoWhiteFontWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Main = () => {
  const [video, setVideo] = useState("");
  const windowSize = useWindowSize();

  const handleMouseEnter = (e, url) => {
    setVideo(url);
  };
  const handleMouseLeave = (e, url) => {
    setVideo(url);
  };

  return (
    <MainLayout>
      <Container>
        <VideoFontWrap>
          <VideoFont
            src="/images/font-o.svg"
            alt="o"
            onMouseEnter={(e) =>
              windowSize.width > 768 &&
              handleMouseEnter(e, "/videos/video-o.mp4")
            }
            onMouseLeave={(e) =>
              windowSize.width > 768 && handleMouseLeave(e, "")
            }
            style={
              windowSize.width <= 768
                ? { width: "82px", height: "89px" }
                : { width: "184px" }
            }
          >
            <div
              className="fadeAnimation"
              style={{ position: "fixed", top: 0, left: 0 }}
            >
              <video
                height="100%"
                autoPlay
                loop
                playing={true}
                muted={true}
                src={"/videos/video-o.mp4"}
              >
                Browser not supported
              </video>
            </div>
          </VideoFont>
          <VideoFont
            src="/images/font-v.svg"
            alt="o"
            onMouseEnter={(e) =>
              windowSize.width > 768 &&
              handleMouseEnter(e, "/videos/video-v.mp4")
            }
            onMouseLeave={(e) =>
              windowSize.width > 768 && handleMouseLeave(e, "")
            }
            style={
              windowSize.width <= 768
                ? { width: "83px", height: "87px" }
                : { width: "186px", height: "197px" }
            }
          >
            <div
              className="fadeAnimation"
              style={{ position: "fixed", top: 0, left: 0 }}
            >
              <video
                height="100%"
                autoPlay
                loop
                playing={true}
                muted={true}
                src={"/videos/video-v.mp4"}
              >
                Browser not supported
              </video>
            </div>
          </VideoFont>
          <VideoFont
            src="/images/font-i-1.svg"
            alt="i"
            onMouseEnter={(e) =>
              windowSize.width > 768 &&
              handleMouseEnter(e, "/videos/video-i-1.mp4")
            }
            onMouseLeave={(e) =>
              windowSize.width > 768 && handleMouseLeave(e, "")
            }
            style={
              windowSize.width <= 768
                ? { width: "36px", height: "89px" }
                : { width: "82px", height: "201px" }
            }
          >
            <div
              className="fadeAnimation"
              style={{ position: "fixed", top: 0, left: 0 }}
            >
              <video
                height="100%"
                autoPlay
                loop
                playing={true}
                muted={true}
                src={"/videos/video-i-1.mp4"}
              >
                Browser not supported
              </video>
            </div>
          </VideoFont>
          <VideoFont
            src="/images/font-l.svg"
            alt="l"
            onMouseEnter={(e) =>
              windowSize.width > 768 &&
              handleMouseEnter(e, "/videos/video-l.mp4")
            }
            onMouseLeave={(e) =>
              windowSize.width > 768 && handleMouseLeave(e, "")
            }
            style={
              windowSize.width <= 768
                ? { width: "67px", height: "86px" }
                : { width: "151px", height: "195px" }
            }
          >
            <div
              className="fadeAnimation"
              style={{ position: "fixed", top: 0, left: 0 }}
            >
              <video
                height="100%"
                autoPlay
                loop
                playing={true}
                muted={true}
                src={"/videos/video-l.mp4"}
              >
                Browser not supported
              </video>
            </div>
          </VideoFont>
          <VideoFont
            src="/images/font-i-2.svg"
            alt="i"
            onMouseEnter={(e) =>
              windowSize.width > 768 &&
              handleMouseEnter(e, "/videos/video-i-2.mp4")
            }
            onMouseLeave={(e) =>
              windowSize.width > 768 && handleMouseLeave(e, "")
            }
            style={
              windowSize.width <= 768
                ? { width: "36px", height: "89px" }
                : { width: "82px", height: "201px" }
            }
          >
            <div
              className="fadeAnimation"
              style={{ position: "fixed", top: 0, left: 0 }}
            >
              <video
                height="100%"
                autoPlay
                loop
                playing={true}
                muted={true}
                src={"/videos/video-i-2.mp4"}
              >
                Browser not supported
              </video>
            </div>
          </VideoFont>
          <VideoFont
            src="/images/font-nest.svg"
            alt="nest"
            onMouseEnter={(e) =>
              windowSize.width > 768 &&
              handleMouseEnter(e, "/videos/video-nest.mp4")
            }
            onMouseLeave={(e) =>
              windowSize.width > 768 && handleMouseLeave(e, "")
            }
            style={
              windowSize.width <= 768
                ? { width: "167px", height: "53px" }
                : { width: "376px", height: "120px" }
            }
          >
            <div
              className="fadeAnimation"
              style={{ position: "fixed", top: 0, left: 0 }}
            >
              <video
                height="100%"
                autoPlay
                loop
                playing={true}
                muted={true}
                src={"/videos/video-nest.mp4"}
              >
                Browser not supported
              </video>
            </div>
          </VideoFont>
        </VideoFontWrap>
        <Title>
          “Hi, Villionz! {windowSize.width <= 768 && <br />}Welcome to Ovili
          nest”
        </Title>
        <Desc>
          오빌리 네스트는 발왕산에 서식하는 {windowSize.width <= 768 && <br />}
          천연기념물 “수리부엉이“를 모티브로{windowSize.width <= 768 && <br />}
          {windowSize.width > 768 && <br />}
          용평리조트에서 운영하는 {windowSize.width <= 768 && <br />}NFT 멤버십
          프로젝트 입니다.{windowSize.width <= 768 && <br />}
          {windowSize.width > 768 && <br />}
          오빌리와 함께 신나고 {windowSize.width <= 768 && <br />}즐거운 모험을
          떠나보세요!
        </Desc>

        {video && (
          <VideoWhiteFontWrap>
            {video === "/videos/video-o.mp4" && (
              <VideoFontSvg
                src="/images/font-o-white.svg"
                alt="o"
                onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-o.mp4")}
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                className="fadeAnimation2"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-600px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-v.mp4" && (
              <VideoFontSvg
                src="/images/font-v-white.svg"
                alt="o"
                onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-v.mp4")}
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                className="fadeAnimation2"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-452px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-i-1.mp4" && (
              <VideoFontSvg
                src="/images/font-i-1-white.svg"
                alt="o"
                onMouseEnter={(e) =>
                  handleMouseEnter(e, "/videos/video-i-1.mp4")
                }
                className="fadeAnimation2"
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-307px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-l.mp4" && (
              <VideoFontSvg
                src="/images/font-l-white.svg"
                alt="o"
                onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-l.mp4")}
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                className="fadeAnimation2"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-248px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-i-2.mp4" && (
              <VideoFontSvg
                src="/images/font-i-2-white.svg"
                alt="o"
                onMouseEnter={(e) =>
                  handleMouseEnter(e, "/videos/video-i-2.mp4")
                }
                className="fadeAnimation2"
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-136px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-nest.mp4" && (
              <VideoFontSvg
                src="/images/font-nest-white.svg"
                alt="o"
                onMouseEnter={(e) =>
                  handleMouseEnter(e, "/videos/video-nest.mp4")
                }
                className="fadeAnimation2"
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-55px, -130%)",
                  height: "120px",
                  marginRight: "0",
                }}
              />
            )}
          </VideoWhiteFontWrap>
        )}
      </Container>
      {video && (
        <div
          className="fadeAnimation"
          style={{ position: "fixed", top: 0, left: 0 }}
        >
          <video
            height="100%"
            autoPlay
            loop
            playing={true}
            muted={true}
            src={video}
          >
            Browser not supported
          </video>
        </div>
      )}
    </MainLayout>
  );
};

export default Main;
