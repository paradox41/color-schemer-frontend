import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { teal600 } from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';

import Navigation from '../../components/navigation';

import './app.css';

injectTapEventPlugin();

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  constructor() {
    super();

    this.state = {
      open: true
    };

    this.styles = {
      container: {
        marginLeft: `${darkMuiTheme.navDrawer.width}px`
      },
      appBar: {
        backgroundColor: teal600
      }
    };
  }

  toggleNavigation = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={darkMuiTheme}>
        <div>
          <AppBar style={this.styles.appBar} onLeftIconButtonTouchTap={this.toggleNavigation} />
          <Navigation open={this.state.open} />
          <div style={this.styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
