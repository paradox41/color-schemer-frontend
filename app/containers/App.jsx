import React from 'react';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={darkMuiTheme}>
        <div>
          <Drawer open={this.state.open}>
            <MenuItem>
              <Link to="/themes">Themes</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/editor">Editor</Link>
            </MenuItem>
          </Drawer>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
