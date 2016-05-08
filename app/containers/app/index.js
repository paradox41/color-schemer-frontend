import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { teal600 } from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';

import Navigation from '../../components/navigation';

import './app.css';

injectTapEventPlugin();

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  constructor() {
    super();

    this.state = {
      open: true
    };
  }

  toggleNavigation = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const styles = {
      container: {},
      appBar: {
        backgroundColor: teal600
      }
    };

    if (this.state.open) {
      styles.container.marginLeft = `${lightMuiTheme.navDrawer.width}px`;
    }

    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <AppBar
            style={styles.appBar}
            onLeftIconButtonTouchTap={this.toggleNavigation}
            title="Color Schemer" />
          <Navigation open={this.state.open} />
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
