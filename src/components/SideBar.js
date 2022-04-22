import React, { useEffect, useState } from 'react';
import './SideBar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import db from '../firebase';

function SideBar() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
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
      </div>
      <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      <SideBarOption Icon={InboxIcon} title="Mention & reactions" />
      <SideBarOption Icon={DraftsIcon} title="Saved items" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="File browser" />
      <SideBarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SideBarOption Icon={AddIcon} title="Add Channel" />
      {channels.map((channel) => (
        <SideBarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default SideBar;
