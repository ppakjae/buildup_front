import React from "react";
import { faUserGroup, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FooterDiv, FooterIn, FooterBtn } from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";




const Footer = () => {

  const navigate = useNavigate();
  const goWhoYou = () => {
    navigate("/who_are_you");
  };
  const goTeamBuild = () => {
    navigate("/team_build");
  };

  return (
    <FooterDiv>
      <FooterIn>
        <FooterBtn onClick={goTeamBuild} style={{ height: "40px" }}>
          <img src="/img/bottomicon.png" style={{ height: "40px" }} alt="icon.png" />
        </FooterBtn>
        <FooterBtn>
          <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "27px", color: "#9fa3ab" }} />
        </FooterBtn>
        <FooterBtn>
          <FontAwesomeIcon icon={faUserGroup} style={{ fontSize: "26px", color: "#9fa3ab" }} />
        </FooterBtn>
        <FooterBtn onClick={goWhoYou} className="userimgcover">
          <img src="/img/user.png" className="userimg" alt="user.png" />
        </FooterBtn>
      </FooterIn>
    </FooterDiv>
  );
};

export default Footer;
