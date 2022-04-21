import React from 'react';
import './SideBarOption.css';

function SideBarOption({ Icon, title }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOption__icon" />}
    </div>
  );
}

export default SideBarOption;
