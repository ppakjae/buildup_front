import React from "react";
import {
  Header,
  HeaderTop,
  HeaderRightDiv,
  HeaderRightIcon,
  HeaderTextBox,
  MainDiv,
  MainTop,
  MainMiddle,
  MiddleBtn,
  MainButton,
  TopRightDiv,
  TopRightText,
  MainBottom,
  ForBottomBar,
  TopPoster,
} from "../styledComponents";

import { faEllipsis, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

// import ReactDOM from 'react-dom'

const TeamBuild = () => {
  const navigate = useNavigate();
  const goCreatingTeam = () => {
    navigate("/creating_team");
  };
  const goFindMember = () => {
    navigate("/find_member");
  };
  const goCompetition = () => {
    navigate("/competition");
  };
  

  return (
    <>
      <ForBottomBar>
        <Header>
          <HeaderTop>
            <img className="headerlog" src="/img/logo.png" alt="buildup_logo.png" />
            <HeaderRightDiv>
              <HeaderRightIcon>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </HeaderRightIcon>
              <HeaderRightIcon>
                <FontAwesomeIcon icon={faEllipsis} />
              </HeaderRightIcon>
            </HeaderRightDiv>
          </HeaderTop>
          <HeaderTextBox>
            <li className="score600 lifirst">공모전</li>
            <li className="score600">대외활동</li>
            <li className="score600">사이드프로젝트</li>
            <li className="score600">창업</li>
          </HeaderTextBox>
        </Header>

        <MainDiv>
          <MainTop onClick={goCompetition} className="MainTop">
            <TopPoster>
              <img src="/img/poster/poster2.png" alt="poster.png" style={{ height: "15vh", margin:"0 5px" }} />
              <img src="/img/poster/poster1.png" alt="poster.png" style={{ height: "20vh", margin:"0 5px" }} />
              <img src="/img/poster/poster3.png" alt="poster.png" style={{ height: "15vh", margin:"0 5px" }} />
            </TopPoster>
            <TopRightDiv>
              <TopRightText className="score500">더보기</TopRightText>
            </TopRightDiv>
          </MainTop>

          <MainMiddle>
            <MiddleBtn className="score600" style={{ marginRight: "3px", padding: "15px 0 15px 0" }}>
              팀 모집글 작성
              <MainButton onClick={goCreatingTeam} className="score500" style={{ marginTop: "16px", padding: "2% 9%" }}>
                바로가기
              </MainButton>
            </MiddleBtn>
            <MiddleBtn className="score600" style={{ marginLeft: "3px", padding: "15px 0 15px 0" }}>
              팀원 모집글 작성
              <MainButton
                onClick={goFindMember}
                className="score500"
                style={{ marginTop: "16px", padding: "2% 9%" }}
              >
                바로가기
              </MainButton>
            </MiddleBtn>
          </MainMiddle>
        </MainDiv>

        <MainBottom>
          <img
            className="bottomposter"
            src="/img/poster/poster6.png"
            alt="poster.png"
            style={{ height: "140px", width: "106.9px" }}
          />
          <img
            className="bottomposter"
            src="/img/poster/poster7.png"
            alt="poster.png"
            style={{ height: "140px" }}
          />
          <img
            className="bottomposter"
            src="/img/poster/poster8.png"
            alt="poster.png"
            style={{ height: "140px" }}
          />
        </MainBottom>

        <Footer />
      </ForBottomBar>
    </>
  );
};

// const poster = React.createElement('img', {src : "/img/bottomicon.png"})

// ReactDOM.render(poster, TeamBuild.MainTop);

export default TeamBuild;
