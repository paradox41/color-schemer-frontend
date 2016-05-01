import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';

export default class Create extends React.Component {
  constructor(props) {
    super(props);

    this.theme = getMuiTheme();

    this.styles = {
      h1: {
        fontFamily: this.theme.fontFamily
      }
    };
  }

  render() {
    return (
      <div>
        <h1 style={this.styles.h1}>Create</h1>
        <Paper></Paper>
      </div>
    );
  }
}
