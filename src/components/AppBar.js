import React from 'react';
import '../css/AppBar.css';
import Form from 'react-bootstrap/Form';
import Icon from '@mdi/react';
import { mdiBell, mdiMagnify } from '@mdi/js';

function AppBar(props) {
  return (
    <div className="app-bar-wrapper">
      <div
        className="app-bar d-flex align-items-center"
        style={{ gap: '1.2em' }}
      >
        <h5 className="text-white mb-0" style={{fontSize: '17px'}}>
          CollissionMate<span className="app-bar-title text-orange">X</span>
        </h5>

        <div className="search-wrapper">
          <div className="input-group">
            <Form.Control
              type="text"
              id="inputUsername"
              className="search-field"
            />
            <div className="input-group-append">
              <span
                className="input-group-text"
                style={{ cursor: 'pointer', height: '30px', marginLeft: '-10px' }}
              >
                <Icon
                  path={mdiMagnify}
                  size={1}
                  horizontal
                  color={'orange'}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center contact-container font-11">
        <div>
          <Icon path={mdiBell} size={1} horizontal color={'orange'} />
        </div>
        <span className="text-white">Collission & Glass Shop</span>
        <span className="text-white">| Shop ID: XXXXXX</span>
        <div className='profile-search'>
          <Form.Control
            style={{
              borderRadius: '20px',
              fontSize: '11px',
            }}
            className="profile-name-field"
            type="text"
            placeholder="Profile Name"
            id="inputUsername"
          />
        </div>
      </div>
    </div>
  );
}

export default AppBar;
