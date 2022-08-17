import React from "react";
import Footer from "./Footer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackHeader } from "../styledComponents";

const More = () => {
  return (
    <>
      <BackHeader>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ padding: "25px 0 0 23px", color: "rgb(159, 163, 171)" }}
        />
      </BackHeader>
      <div className="profileBox"></div>
      <Footer></Footer>
    </>
  );
};

export default More;
