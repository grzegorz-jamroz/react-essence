import React from "react";
import "./Sidebar.scss";
import Overlay from "../Overlay";
import SidebarClose from "../SidebarClose/SidebarClose";

const Sidebar = props => {
  const {open, handleClose, children} = props;
  let classes = "sidebar";
  let styles = { right: 0 };

  if (open) {
    classes += " sidebar--open";
  }

  if (!open) {
    styles = { right: "-20rem" };
  }

  return (
    <>
      <Overlay open={open}/>
      <div style={styles} className={classes}>
        <div className="sidebar__offSwitch">
          <SidebarClose handleClick={handleClose}/>
        </div>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
