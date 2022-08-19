import React  from "react";
import { useNavigate } from "react-router-dom";


import {
    BackHeader,
    DropDown,
    FindMain,
    Introducing,
    OrangeText,
    DropDownCover,

  } from "../styledComponents";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

const CreatingTeam = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
      };

    return (
        <>
            <BackHeader>
                <FontAwesomeIcon onClick={goBack}
                    icon={faArrowLeft} style={{ padding: "25px 0 0 23px", color: "" }} />
                <p className="score600"style={{ padding: "20px 23px 0 0", fontSize: "14px" }}>완료</p>
            </BackHeader>
            
            <FindMain style={{height:"38px"}}>
                <p className="score600" style={{ fontSize: "100%", marginTop: "10px"}}>팀 모집 글 작성</p>
            </FindMain>

            <FindMain style={{width:"100%"}}>
                <div style={{width:"85%", marginTop:"20px"}}>
                    <OrangeText className="score700">설명</OrangeText>
                </div>
                <FindMain style={{width: "80%", marginTop:"10px"}}>
                    <Introducing type="text" className="score500" placeholder="최대 100자 이내로 작성해주세요!"></Introducing>
                </FindMain>
                <div style={{width:"85%", marginTop:"30px", marginBottom:"0"}}>
                    <OrangeText className="score700">모집 구분</OrangeText>
                </div>
                <FindMain style={{width: "100%"}}>
                    <DropDown className="score600" style={{width: "84%", padding:"5px 5px"}}>
                        <option value="">대외활동</option>
                        <option value="">공모전</option>
                        <option value="">사이드프로젝트</option>
                    </DropDown>
                </FindMain>
                <div style={{width:"85%", marginTop:"30px"}}>
                    <OrangeText className="score700">모집 팀원</OrangeText>
                </div>
                <DropDownCover style={{width: "100%"}}>
                    <DropDown className="score600" style={{width: "40%", padding:"5px 5px"}}>
                        <option value="">프론트엔드</option>
                        <option value="">백엔드</option>
                        <option value="">기획</option>
                        <option value="">디자인</option>
                    </DropDown>
                    <p style={{fontSize:"35px", margin: "0 3px"}}>-</p>
                    <DropDown className="score600" style={{width: "40%", padding:"5px 5px"}}>
                        <option value="">1명</option>
                        <option value="">2명</option>
                        <option value="">3명</option>
                        <option value="">4명 이상</option>
                    </DropDown>
                </DropDownCover>
                <DropDownCover style={{width: "100%"}}>
                    <DropDown className="score600" style={{width: "40%", padding:"5px 5px"}}>
                        <option value="">프론트엔드</option>
                        <option value="" selected>백엔드</option>
                        <option value="">기획</option>
                        <option value="">디자인</option>
                    </DropDown>
                    <p style={{fontSize:"35px", margin: "0 3px"}}>-</p>
                    <DropDown className="score600" style={{width: "40%", padding:"5px 5px"}}>
                        <option value="">1명</option>
                        <option value="">2명</option>
                        <option value="">3명</option>
                        <option value="">4명 이상</option>
                    </DropDown>
                </DropDownCover>
                <div style={{width:"85%",marginTop:"30px"}}>
                    <OrangeText className="score700">진행 방식</OrangeText>
                </div>
                <FindMain style={{width: "100%"}}>
                    <DropDown className="score600" style={{width: "84%", padding:"5px 5px"}}>
                        <option value="">대면</option>
                        <option value="">오프라인</option>
                        <option value="">혼용</option>
                    </DropDown>
                </FindMain>
                <div style={{width:"85%", marginTop:"30px"}}>
                    <OrangeText className="score700">진행 기간</OrangeText>
                </div>
                <DropDownCover style={{width: "100%"}}>
                    <DropDown className="score600" style={{width: "40%", padding:"5px 5px"}}>
                        <option value="">2020.07.07</option>
                    </DropDown>
                    <p style={{fontSize:"35px", margin: "0 3px"}}>-</p>
                    <DropDown className="score600" style={{width: "40%", padding:"5px 5px"}}>
                        <option value="">2022.12.21</option>
                    </DropDown>
                </DropDownCover>
            </FindMain>
            <Footer></Footer>
        </>
    );
};

export default CreatingTeam;