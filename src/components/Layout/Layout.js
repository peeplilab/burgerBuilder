import React from 'react';
import Aux from '../../hoc/_Aux'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component {

  state = {
    showSideDrawer: true
  }


  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;