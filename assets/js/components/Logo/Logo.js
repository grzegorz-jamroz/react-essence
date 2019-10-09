import React from "react";
import { Link } from "@reach/router";
import "../../Core/Fonts";
import "./Logo.scss";

export default () => (
  <Link to={`/`} className="navbarButton">
    <div className="navbarButton__logo">ESSENCE</div>
  </Link>
);
