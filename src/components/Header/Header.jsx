import React from 'react';
import logo from '../../assests/images/logo.svg';
import reactlogo from '../../assests/images/react.svg';
import classes from '../Header.module.css';

export const Header = () => {
    return (
        <header>
        <div class="container react" id="header">
          <div>
            <img class={classes.logo} src={logo} alt="Logo" />
          </div>
          <div class="textRight">
            <img src={reactlogo} alt="React" class={classes.reactLogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}

export default Header