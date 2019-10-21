import React from "react";
import { Link } from "@reach/router";
import "../../Core/Fonts";
import "./Logo.scss";

const Logo = () => (
  <Link to={`/`} className="navbarButton">
    <div className="navbarButton__logo">ESSENCE</div>
  </Link>
);

export default Logo;
