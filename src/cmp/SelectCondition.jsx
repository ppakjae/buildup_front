import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import {
  BackHeader,
  FindMain,
  OrangeTextBox,
  MemberBoxCover,
  ConditionBtn,
  MainButton,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Select_condition = () => {
  const navigate = useNavigate();
  const goSimilarMember = () => {
    navigate("/similar_member");
  };

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon icon={faArrowLeft} style={{ padding: "25px 0 0 23px", color: "" }} />
      </BackHeader>
      <FindMain>
        <p className="score600" style={{ fontSize: "100%" }}>
          당신이 찾는 팀원은 누구인가요?
        </p>
        <OrangeTextBox className="score600">원하는 기술 스택을 선택해주세요!</OrangeTextBox>
        <MemberBoxCover>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              REACT
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              WEB
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              IT
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
        </MemberBoxCover>
        <MemberBoxCover>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              Java
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              C##
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              기타
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
        </MemberBoxCover>
        <OrangeTextBox className="score600">원하는 기술 경험을 선택해주세요!</OrangeTextBox>
        <MemberBoxCover>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              3개월 미만
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              6개월
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              9개월
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
        </MemberBoxCover>
        <MemberBoxCover>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              1년
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              1년이상
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              2년 이상
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
        </MemberBoxCover>
        <OrangeTextBox className="score600">원하는 프로젝트 방식을 선택해주세요!</OrangeTextBox>
        <MemberBoxCover>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              대면
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              비대면
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
          <ConditionBtn type="button">
            <p className="score500" style={{ fontSize: "16px", marginRight: "8px" }}>
              병행
            </p>
            <FontAwesomeIcon icon={faSquare} />
          </ConditionBtn>
        </MemberBoxCover>
        <MainButton
          onClick={goSimilarMember}
          type="button"
          className="score600"
          style={{ padding: "1px 25px", fontSize: "15px" }}
        >
          다음
        </MainButton>
      </FindMain>
    </>
  );
};

export default Select_condition;
