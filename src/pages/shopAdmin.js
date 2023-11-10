import React, { useState } from 'react';
import '../css/shopAdmin.css';
import Icon from '@mdi/react';
import { mdiLock, mdiEye, mdiEyeOff } from '@mdi/js';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function ShopAdmin(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="shop-admin-container">
      <div className="shop-admin-modal">
        <div className="header-wrapper">
          <div className="header-title-wrapper">
            <span className="title">Shop admin</span>
            <Icon
              path={mdiLock}
              size={1}
              horizontal
              color={'black'}
            />
          </div>
        </div>

        <div className="body-container">
          <div className="info">
            For security reason enter your password
          </div>
          <div className="username-wrapper mt-3 w-100">
            <Form.Label className="ml-5" htmlFor="inputUsername">
              User Name
            </Form.Label>
            <Form.Control type="text" id="inputUsername" />
          </div>
          <div className="d-flex flex-column w-100">
            <Form.Label className="ml-5" htmlFor="inputPassword">
              Password
            </Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                id="inputPassword"
                aria-label="Password"
                aria-describedby="passwordHelpBlock"
              />
              <div className="input-group-append">
                <span
                  className="input-group-text"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                >
                  <Icon
                    path={showPassword ? mdiEye : mdiEyeOff}
                    size={1}
                    horizontal
                    color={'black'}
                  />
                </span>
              </div>
            </div>
          </div>
          <a href="/" className="forgot-password">
            Forgot my password
          </a>

          <div className="text-start w-100">
            <Form.Check type={'checkbox'} label={'Remember me'} />
          </div>

          <div className="modal-actions-wrapper">
            <Button
              style={{
                flex: 1,
                color: 'black',
                fontWeight: '600',
                backgroundColor: '#d2d4d7',
                border: '1px solid #d2d4d7',
                display: 'inline-block',
                width: '50%',
                marginRight: '10px',
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                flex: 1,
                color: 'black',
                fontWeight: '600',
                backgroundColor: '#d2d4d7',
                border: '1px solid #d2d4d7',
                display: 'inline-block',
                width: '50%',
                marginRight: '10px',
              }}
            >
              Enter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAdmin;
