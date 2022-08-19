import React, { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
    BackHeader,
    FindMain,
    MemberBoxCover,
    MemberBox,
    OrangeTextBox,
    MainButton,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Find_member = () => {
  const navigate = useNavigate();
  const goSelectCondition = () => {
    navigate("/select_condition");
  };
  const goBack = () => {
    navigate(-1);
  };


  const [back1, setOrange1] = useState("transparent");
  const [back2, setOrange2] = useState("transparent");
  const [back3, setOrange3] = useState("transparent");
  const [back4, setOrange4] = useState("transparent");

  const toggleBackground1 = () => {
    setOrange1((back1) => !back1);
  }; 
  const toggleBackground2 = () => {
    setOrange2((back2) => !back2);
  }; 
  const toggleBackground3 = () => {
    setOrange3((back3) => !back3);
  }; 
  const toggleBackground4 = () => {
    setOrange4((back4) => !back4);
  }; 


  return (

    

    <>
      <BackHeader>
        <FontAwesomeIcon onClick={goBack}
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "" }}
        />
      </BackHeader>
      <FindMain>
        <p className="score600" style={{ fontSize: "100%", marginTop: "20px" }}>당신이 찾는 팀원은 누구인가요?</p>
        <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
            당신이 찾는 팀원의 분야를 선택해주세요!
        </OrangeTextBox>
        <MemberBoxCover>
            <MemberBox onClick={toggleBackground1} type="button" style={{backgroundColor: back1 ? 'transparent' : '#ff9866' }}>
                <img src="/img/members/product_planner.png" alt="product_planner.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">기획자</p>

            </MemberBox>
            <MemberBox onClick={toggleBackground2} type="button" style={{backgroundColor: back2 ? 'transparent' : '#ff9866' }}>
                <img src="/img/members/developer.png" alt="developer.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">개발자</p>
            </MemberBox>
        </MemberBoxCover>
        <MemberBoxCover>
            <MemberBox onClick={toggleBackground3} type="button" style={{backgroundColor: back3 ? 'transparent' : '#ff9866' }}>
                <img src="/img/members/designer.png" alt="designer.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">디자이너</p>
            </MemberBox>
            <MemberBox onClick={toggleBackground4} type="button" style={{backgroundColor: back4 ? 'transparent' : '#ff9866' }}>
                <img src="/img/members/maketer.png" alt="maketer.png" style={{ height:"62px", marginBottom:"20px" }}/>
                <p className="score600">마케터</p>
            </MemberBox>
        </MemberBoxCover>
        <MainButton onClick={goSelectCondition} type="button" className="score600" style={{ padding: "1px 25px", fontSize: "15px", magingTop: "70px"}}>
                다음
        </MainButton>
      </FindMain>
    </>
  );
};

export default Find_member;
