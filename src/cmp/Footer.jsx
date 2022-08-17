import React from "react";
import { faUserGroup, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FooterDiv, FooterIn, FooterBtn } from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterIn>
        <FooterBtn style={{ height: "40px" }}>
          <img src="/img/bottomicon.png" style={{ height: "40px" }} alt="icon.png" />
        </FooterBtn>
        <FooterBtn>
          <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "27px", color: "#9fa3ab" }} />
        </FooterBtn>
        <FooterBtn>
          <FontAwesomeIcon icon={faUserGroup} style={{ fontSize: "26px", color: "#9fa3ab" }} />
        </FooterBtn>
        <FooterBtn className="userimgcover">
          <img src="/img/user.png" className="userimg" alt="user.png" />
        </FooterBtn>
      </FooterIn>
    </FooterDiv>
  );
};

export default Footer;
