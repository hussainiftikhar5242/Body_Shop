import React from 'react';
import '../css/Folder.css';
import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

function FolderX(props) {
  return (
    <div className="main-container">
      <div>
        <AppBar />
      </div>
      <div style={{ height: '100%' }} className="d-flex flex-row">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default FolderX;
