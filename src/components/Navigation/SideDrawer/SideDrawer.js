import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
  return (
    <div classes={classes.SideDrawer}>
      <div classes={classes.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default sideDrawer;