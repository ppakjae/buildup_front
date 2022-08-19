import React  from "react";
import { useNavigate } from "react-router-dom";

import { 
    CompetitionSearch,
    FindMain,
    BackHeader,
    MemberBoxCover,
    MainBottom,
    Hashtag,
    Competitionyear,

 } from "../styledComponents";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./Footer";

const Competition = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
      };

    return (
        <>
            <BackHeader>
                <FontAwesomeIcon onClick={goBack}
                icon={faArrowLeft}
                style={{ padding: "25px 0 0 23px", color: "" }}
                />
            </BackHeader>

            <FindMain style={{width: "100%"}}>
                <CompetitionSearch type="text" className="score500" placeholder="공모전 이름을 검색하십시오."></CompetitionSearch>
                <MemberBoxCover style={{marginTop: "8px"}}>
                    <Hashtag className="score600">#개발자</Hashtag>
                    <Hashtag className="score600">#디자이너</Hashtag>
                    <Hashtag className="score600">#기획자</Hashtag>
                    <Hashtag className="score600">#마케터</Hashtag>
                    <Hashtag className="score600">#웹</Hashtag>
                    <Hashtag className="score600">#앱</Hashtag>
                    <Hashtag className="score600">#게임</Hashtag>
                </MemberBoxCover>
                <Competitionyear>
                    <p className="score600" style={{fontSize:"13px"}}>&gt; 2022 공모전</p>
                </Competitionyear>

                <MainBottom>
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster1.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster2.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster3.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster4.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster5.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster6.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster7.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster8.png"
                        alt="poster.png"
                    />
                    <img
                        className="bottomposter"
                        src="/img/competition_poster/competition_poster9.png"
                        alt="poster.png"
                    />
                </MainBottom>

            </FindMain>
            <Footer />

        </>
    );
};

export default Competition;