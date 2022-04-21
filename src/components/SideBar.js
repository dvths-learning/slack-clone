import React from 'react';
import './SideBar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programming</h2>
          <h3>
            <FiberManualRecordIcon />
            Tiago Henrique
          </h3>
        </div>
        <CreateIcon />
        <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      </div>
    </div>
  );
}

export default SideBar;
