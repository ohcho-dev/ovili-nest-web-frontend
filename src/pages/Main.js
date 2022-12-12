import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const VideoFontWrap = styled.div``;
const VideoFont = styled.img`
  height: 20rem;
  margin-right: 25px;
  cursor: pointer;

  &:nth-child(6) {
    height: 120px;
    margin-right: 0;
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
`;
const Desc = styled.h4`
  font-family: "Rubik";
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  letter-spacing: -0.03em;
  color: #7d7d7d;
`;
const VideoWhiteFontWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;
const Main = () => {
  const [video, setVideo] = useState("");

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
            onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-o.mp4")}
            onMouseLeave={(e) => handleMouseLeave(e, "")}
          />
          <VideoFont
            src="/images/font-v.svg"
            alt="o"
            onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-v.mp4")}
            onMouseLeave={(e) => handleMouseLeave(e, "")}
          />
          <VideoFont
            src="/images/font-i-1.svg"
            alt="i"
            onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-i-1.mp4")}
            onMouseLeave={(e) => handleMouseLeave(e, "")}
          />
          <VideoFont
            src="/images/font-l.svg"
            alt="l"
            onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-l.mp4")}
            onMouseLeave={(e) => handleMouseLeave(e, "")}
          />
          <VideoFont
            src="/images/font-i-2.svg"
            alt="i"
            onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-i-2.mp4")}
            onMouseLeave={(e) => handleMouseLeave(e, "")}
          />
          <VideoFont
            src="/images/font-nest.svg"
            alt="nest"
            onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-nest.mp4")}
            onMouseLeave={(e) => handleMouseLeave(e, "")}
          />
        </VideoFontWrap>
        <Title>“Hi, Villionz! Welcome to Ovili nest”</Title>
        <Desc>
          오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를 모티브로
          <br />
          용평리조트에서 운영하는 NFT 멤버십 프로젝트 입니다.
          <br />
          오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
        </Desc>

        {video && (
          <VideoWhiteFontWrap>
            {video === "/videos/video-o.mp4" && (
              <VideoFont
                src="/images/font-o-white.svg"
                alt="o"
                onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-o.mp4")}
                onMouseLeave={(e) => handleMouseLeave(e, "")}
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
              <VideoFont
                src="/images/font-v-white.svg"
                alt="o"
                onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-v.mp4")}
                onMouseLeave={(e) => handleMouseLeave(e, "")}
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
              <VideoFont
                src="/images/font-i-1-white.svg"
                alt="o"
                onMouseEnter={(e) =>
                  handleMouseEnter(e, "/videos/video-i-1.mp4")
                }
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-299px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-l.mp4" && (
              <VideoFont
                src="/images/font-l-white.svg"
                alt="o"
                onMouseEnter={(e) => handleMouseEnter(e, "/videos/video-l.mp4")}
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-245px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-i-2.mp4" && (
              <VideoFont
                src="/images/font-i-2-white.svg"
                alt="o"
                onMouseEnter={(e) =>
                  handleMouseEnter(e, "/videos/video-i-2.mp4")
                }
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-126px, -117%)",
                }}
              />
            )}
            {video === "/videos/video-nest.mp4" && (
              <VideoFont
                src="/images/font-nest-white.svg"
                alt="o"
                onMouseEnter={(e) =>
                  handleMouseEnter(e, "/videos/video-nest.mp4")
                }
                onMouseLeave={(e) => handleMouseLeave(e, "")}
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transform: "translate(-46px, -130%)",
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
