import React, { useState } from "react";
import { faArrowLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import {
  BackHeader,
  FindMain,
  OrangeTextBox,
  ConditionBoxCover,
  ConditionBtn,
  MainButton,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Select_condition = () => {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(true);
  const [checkbox4, setCheckbox4] = useState(true);
  const [checkbox5, setCheckbox5] = useState(true);
  const [checkbox6, setCheckbox6] = useState(true);
  const [checkbox7, setCheckbox7] = useState(true);
  const [checkbox8, setCheckbox8] = useState(true);
  const [checkbox9, setCheckbox9] = useState(true);
  const [checkbox10, setCheckbox10] = useState(true);
  const [checkbox11, setCheckbox11] = useState(true);
  const [checkbox12, setCheckbox12] = useState(true);
  const [checkbox13, setCheckbox13] = useState(true);
  const [checkbox14, setCheckbox14] = useState(true);
  const [checkbox15, setCheckbox15] = useState(true);

  const toggleCheckbox1 = () => {
    setCheckbox1((checkbox1) => !checkbox1);
  };
  const toggleCheckbox2 = () => {
    setCheckbox2((checkbox2) => !checkbox2);
  };
  const toggleCheckbox3 = () => {
    setCheckbox3((checkbox3) => !checkbox3);
  };
  const toggleCheckbox4 = () => {
    setCheckbox4((checkbox4) => !checkbox4);
  };
  const toggleCheckbox5 = () => {
    setCheckbox5((checkbox5) => !checkbox5);
  };
  const toggleCheckbox6 = () => {
    setCheckbox6((checkbox6) => !checkbox6);
  };
  const toggleCheckbox7 = () => {
    setCheckbox7((checkbox7) => !checkbox7);
  };
  const toggleCheckbox8 = () => {
    setCheckbox8((checkbox8) => !checkbox8);
  };
  const toggleCheckbox9 = () => {
    setCheckbox9((checkbox9) => !checkbox9);
  };
  const toggleCheckbox10 = () => {
    setCheckbox10((checkbox10) => !checkbox10);
  };
  const toggleCheckbox11 = () => {
    setCheckbox11((checkbox11) => !checkbox11);
  };
  const toggleCheckbox12 = () => {
    setCheckbox12((checkbox12) => !checkbox12);
  };
  const toggleCheckbox13 = () => {
    setCheckbox13((checkbox13) => !checkbox13);
  };
  const toggleCheckbox14 = () => {
    setCheckbox14((checkbox14) => !checkbox14);
  };
  const toggleCheckbox15 = () => {
    setCheckbox15((checkbox15) => !checkbox15);
  };

    const navigate = useNavigate();
    const goSimilarMember = () => {
        navigate("/similar_member");
    };
    const goBack = () => {
      navigate(-1);
    };

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon onClick={goBack} icon={faArrowLeft} style={{ padding: "25px 0 0 23px", color: "" }} />
      </BackHeader>
      <FindMain>
        <p className="score600" style={{ fontSize: "100%", marginTop: "20px" }}>
          당신이 찾는 팀원은 누구인가요?
        </p>
        <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
          원하는 기술 스택을 선택해주세요!
        </OrangeTextBox>
        <ConditionBoxCover>
          <ConditionBtn type="button" onClick={toggleCheckbox1}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              REACT
            </p>
            {checkbox1 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox2}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              WEB
            </p>
            {checkbox2 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox3}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              IT
            </p>
            {checkbox3 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
        </ConditionBoxCover>
        <ConditionBoxCover>
          <ConditionBtn type="button" onClick={toggleCheckbox4}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              Java
            </p>
            {checkbox4 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox5}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              C##
            </p>
            {checkbox5 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox6}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              기타
            </p>
            {checkbox6 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
        </ConditionBoxCover>
        <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
          원하는 기술 경험을 선택해주세요!
        </OrangeTextBox>
        <ConditionBoxCover>
          <ConditionBtn type="button" onClick={toggleCheckbox7}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              3개월 미만
            </p>
            {checkbox7 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox8}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              6개월
            </p>
            {checkbox8 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox9}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              9개월
            </p>
            {checkbox9 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
        </ConditionBoxCover>
        <ConditionBoxCover>
          <ConditionBtn type="button" onClick={toggleCheckbox10}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              1년
            </p>
            {checkbox10 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox11}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              1년이상
            </p>
            {checkbox11 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox12}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              2년 이상
            </p>
            {checkbox12 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
        </ConditionBoxCover>
        <OrangeTextBox className="score600" style={{ marginTop: "40px" }}>
          원하는 프로젝트 방식을 선택해주세요!
        </OrangeTextBox>
        <ConditionBoxCover>
          <ConditionBtn type="button" onClick={toggleCheckbox13}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              대면
            </p>
            {checkbox13 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox14}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              비대면
            </p>
            {checkbox14 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
          <ConditionBtn type="button" onClick={toggleCheckbox15}>
            <p className="score500" style={{ fontSize: "12px", marginRight: "8px" }}>
              병행
            </p>
            {checkbox15 ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faSquareCheck} />}
          </ConditionBtn>
        </ConditionBoxCover>
        <MainButton
          onClick={goSimilarMember}
          type="button"
          className="score600"
          style={{ padding: "1px 25px", fontSize: "15px", marginTop: "40px" }}
        >
          다음
        </MainButton>
      </FindMain>
    </>
  );
};

export default Select_condition;
