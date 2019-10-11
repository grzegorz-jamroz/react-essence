import React from "react";
import "./Sidebar.scss";
import Overlay from "../Overlay";
import MenuToggler from "../MenuToggler";
import { useMenuOpenState } from "../../states/menuOpen.state";

const Sidebar = props => {
  const [open] = useMenuOpenState();
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
      <Overlay/>
      <div style={styles} className={classes}>
        <div className="sidebar__offSwitch">
          <MenuToggler bRight={false}/>
        </div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
