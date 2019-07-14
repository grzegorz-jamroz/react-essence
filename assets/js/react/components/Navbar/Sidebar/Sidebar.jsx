import React, { Component } from 'react';
import Button from '../Button';
import Overlay from '../Overlay';
import MenuToggler from '../Button/MenuToggler';
import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <Overlay open={this.props.open} />
        <div style={{right: this.setPositionLeft()}} className={this.getSidebarClasses()}>
          <div className="sidebar__offSwitch">
            <Button handleClick={this.props.handleClick}>
              <MenuToggler open={this.props.open} />
            </Button>
          </div>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }

  setPositionLeft = () => {
    if (this.props.open) {
      return 0;
    }

    return '-' + 20 + 'rem';
  };

  getSidebarClasses = () => {
    let classes = 'sidebar';

    if (this.props.open) {
      classes += ' sidebar--open';
    }

    return classes;
  };
}

export default Sidebar;
