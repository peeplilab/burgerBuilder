import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>Meni</div>
      <Logo />
      <nav>... </nav>
    </header>
  )
}

export default toolbar;