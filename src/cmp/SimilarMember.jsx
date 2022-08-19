import { React, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimilarMemberDiv, BackHeader, OrangeTextBox } from "../styledComponents";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import axios from "axios";

const SimilarMember = () => {
  const navigate = useNavigate();

  const goMore = (e) => {
    navigate(`/more/${e}`);
  };
  const goBack = () => {
    navigate(-1);
  };

  const [text, setText] = useState([]);
  const getData = () => {
    axios
      .get("http://43.200.140.244/api/member")
      .then((response) => {
        setText([...response.data]);
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
      <SimilarMemberDiv className="box">
        <p className="score600" style={{ fontSize: "100%" }}>
          당신이 찾는 팀원은 누구인가요?
        </p>
        <OrangeTextBox className="score600">팀원의 스펙을 살펴보세요!</OrangeTextBox>
        <div className="memberBox">

          {text.map((e) => (
            <div key={e.id} className="member">
              <img src={`/img/profile/${e.name}.png`} alt={`${e.name}`} />
              <div className="score500 nameBox">
                <p className="name">{e.name}</p>
                <p className="score300">님</p>
              </div>
              <button
                onClick={() => {
                  goMore(e.id);
                }}
                type="button"
                className="more score400"
              >
                더보기
              </button>
            </div>
          ))}
        </div>
      </SimilarMemberDiv>
      <Footer></Footer>
    </>
  );
};

export default SimilarMember;
