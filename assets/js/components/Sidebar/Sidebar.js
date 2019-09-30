import React from "react";
import "./Sidebar.scss";
import Overlay from "../Overlay";
import MenuToggler from "../MenuToggler";

const Sidebar = props => {
  const { open, setOpen, children } = props;
  let classes = "sidebar";
  let styles = { right: 0 };

  if (open) {
    classes += " sidebar--open";
  }

  if (!open) {
    styles = { right: "-20rem" };
  }

  return (
    <React.Fragment>
      <Overlay open={open} />
      <div style={styles} className={classes}>
        <div className="sidebar__offSwitch">
          <MenuToggler open={open} setOpen={setOpen} bRight={false} />
        </div>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
