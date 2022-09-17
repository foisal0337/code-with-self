import React from "react";
import "./topbar.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
  FaTwitterSquare,
} from "react-icons/fa";

function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare className="topIcon" />
        <FaInstagramSquare className="topIcon" />
        <FaPinterestSquare className="topIcon" />
        <FaTwitterSquare className="topIcon" />
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
        </ul>
      </div>

      <div className="topRight">
        <img
          className="topImage"
          src="https://picsum.photos/30"
          alt=" Random Img"
        />
        <FaSearch className="topSearch" />
      </div>
    </div>
  );
}

export default Topbar;
