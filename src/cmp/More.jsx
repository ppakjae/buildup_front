import { React, useState } from "react";
import Footer from "./Footer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoreDiv, BackHeader, OrangeTextBox, MainButton } from "../styledComponents";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const More = () => {
    
  const [text, setText] = useState([]);
  const addr = window.location.href;
  const id = addr[addr.length - 1];

  const navigate = useNavigate();
  const goWhoYou = () => {
    navigate("/who_are_you");
  };
  const goBack = () => {
    navigate(-1);
  };


  const getData = () => {
    axios
      .get(`http://43.200.140.244/api/member/${id}`)
      .then((response) => {
        setText([response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (text.length === 0) {
    getData();
  }

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon onClick={goBack}
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "rgb(159, 163, 171)" }}
        />
      </BackHeader>
      <MoreDiv>
        {text.map((e) => (
          <div key={e.id} className="box">
            <div className="titleBox">
              <p className="score600 fc">당신이 찾는 팀원!</p>
              <p className="left score400">"{text[0].name}"</p>
              <p className="left score600 fc">님</p>
            </div>
            <img src={`/img/profile/${text[0].name}.png`} alt={`${text[0].name}`} />
            <div className="textBox">
              <p className="score400">기술 스택: {text[0].tech_stack}</p>
              <p className="score400">프로젝트 경험: {text[0].career_period}</p>
              <p className="score400">진행방식: {text[0].project_method}</p>
              <OrangeTextBox
                className="score600"
                style={{
                  color: "#1c458f",
                  border: "2px solid #1c458f",
                  fontSize: "14px",
                  marginTop: "50px",
                  padding: "3px 40px",
                }}
              >
                {text[0].name}님의 프로젝트 상세보기
              </OrangeTextBox>
            </div>
          </div>
        ))}
        <MainButton
          className="score600"
          type="button"
          onClick={goWhoYou}
          style={{ padding: "5px 20px", marginTop: "50px" }}
        >
          팀 빌딩 'GO'
        </MainButton>
      </MoreDiv>
      <Footer></Footer>
    </>
  );
};

export default More;
