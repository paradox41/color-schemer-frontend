import React from 'react';

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
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
