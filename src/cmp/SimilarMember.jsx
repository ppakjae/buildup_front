import { React, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimilarMemberDiv, BackHeader, OrangeTextBox } from "../styledComponents";
import { useNavigate } from "react-router-dom";

const SimilarMember = () => {
  const [text, setText] = useState([]);
  const navigate = useNavigate();
  const goMore = () => {
    navigate("/more");
  };

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/api/member")
      .then((response) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(getData);

  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
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
          <div className="member">
            <img src="/img/profile/wjddn.png" alt="wotjs" />
            <p className="score500 nameBox">
              장정우
              <p className="score300">님</p>
            </p>
            <button onClick={getData} type="button" className="more score400">
              더보기
            </button>
          </div>
          <div className="member">
            <img src="/img/profile/wjddn.png" alt="wotjs" />
            <p className="score500 nameBox">
              장정우
              <p className="score300">님</p>
            </p>
            <button onClick={goMore} type="button" className="more score400">
              더보기
            </button>
          </div>
        </div>
        {text.map((e) => (
          <div>
            {" "}
            <div className="list">
              <span>
                {e.id}번, {e.name}, {e.field}, {e.tech_stack}, {e.career_period}, {e.self_introduction},{" "}
                {e.project_method}
              </span>
              <button
                className="btn-delete"
                onClick={() => {
                  axios.delete(`http://127.0.0.1:8000/api/member/${e.id}`);
                  setText(text.filter((text) => text.id !== e.id));
                }}
              >
                DELETE
              </button>{" "}
            </div>
          </div>
        ))}
      </SimilarMemberDiv>
      <Footer></Footer>
    </>
  );
};

export default SimilarMember;
