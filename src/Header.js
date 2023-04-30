import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ThreePIcon from "@mui/icons-material/ThreeP";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_logo" />
      </IconButton>
      <img
        className="header_logo"
        src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
        alt="logo"
      />
      <IconButton>
        <ThreePIcon fontSize="large" className="header_logo" />
      </IconButton>
    </div>
  );
}

export default Header;
