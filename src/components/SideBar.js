import React, { useState } from 'react';
import '../css/SideBar.css';
import Icon from '@mdi/react';
import {
  mdiGauge,
  mdiHistory,
  mdiTextBoxMultipleOutline,
  mdiAccountLockOutline,
  mdiAccountWrenchOutline,
  mdiTools,
} from '@mdi/js';

function SideBar(props) {
  const [tabs] = useState([
    {
      title: 'OfficeX Dashboard',
      icon: mdiGauge,
    },
    {
      title: 'CMX History',
      icon: mdiHistory,
    },
    {
      title: 'EstimateX',
      icon: mdiTextBoxMultipleOutline,
    },
    {
      title: 'ProductionX',
      icon: mdiAccountWrenchOutline,
    },
    {
      title: 'PartsX',
      icon: mdiTools,
    },
    {
      title: 'Shop Admin',
      icon: mdiAccountLockOutline,
    },
  ]);

  return (
    <div className="side-bar-wrapper">
      {tabs.map((tab, index) => (
        <div className="side-bar-item">
          <Icon
            path={tab.icon}
            size={1.3}
            horizontal
            color={'black'}
          />
          <span className="text-center px-2 mt-1 font-11 fw-bold">
            {tab.title}
          </span>
          {index + 1 !== tabs.length && (
            <div className="divider">
              <hr style={{ margin: 0 }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
