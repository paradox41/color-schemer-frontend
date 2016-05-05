import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { spacing, typography } from 'material-ui/styles';
import { teal600 } from 'material-ui/styles/colors';
import Code from 'material-ui/svg-icons/action/code';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import './app.css';

injectTapEventPlugin();

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.styles = {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: teal600,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8
      },
      container: {
        // padding: spacing.desktopGutter,
        marginLeft: `${darkMuiTheme.navDrawer.width}px`
      }
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={darkMuiTheme}>
        <div>
          <Drawer open={this.state.open}>
            <div style={this.styles.logo}>
              Color Schemer
            </div>
            <Menu>
              <MenuItem
                containerElement={<Link to="/editor" activeClassName="menu-item--active" />}
                primaryText="Editor"
                leftIcon={<Code/>} />
            </Menu>
          </Drawer>
          <div style={this.styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};
