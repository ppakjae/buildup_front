import React from "react";
import { HomeDiv, MainButton } from "../styledComponents";
import { useNavigate } from "react-router-dom";
import "../index.css"

const Home = () => {
  const navigate = useNavigate();
  const goTeamBuild = () => {
    navigate("/team_build");
  };

  return (
    <HomeDiv>
      <div className="home_wrapper">
        <img src="/img/logo.png" alt="buildup_logo.png" />
        <div className="dsc_wrapper">
          <h1 className="score600">빌덥</h1>
          <p className="score500">
            빌덥은 대학생을 대상으로 팀 빌딩이 가능한 커뮤니티 플랫폼입니다.
            <br />
            팀플 및 단체 활동이 잦은 대학생들과 포트폴리오를 쌓으려는
            <br />
            대학생들의 니즈를 맞추었습니다.
            <br />
            빌덥과 함께 대학 생활의 질을 높여볼까요?
          </p>
        </div>
        <MainButton onClick={goTeamBuild} type="button" fontSize="17px" className="score500" style={{ marginTop: "100px", padding: "10px 31px"}}>
          시작하기!
        </MainButton>
      </div>
    </HomeDiv>
  );
};

export default Home;
