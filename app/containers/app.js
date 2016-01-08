import React from 'react';

// material theme
import DarkRawTheme from 'material-ui/lib/styles/raw-themes/dark-raw-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

// material components
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

// icons
import FormatPaint from 'material-ui/lib/svg-icons/editor/format-paint';
import ModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';

import Counter from './counter';

@ThemeDecorator(ThemeManager.getMuiTheme(DarkRawTheme))
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  getStyles() {
    return {
      app: {
        paddingTop: '50px'
      },
      appBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001
      },
      leftNav:{
        zIndex: 1000,
        paddingTop: '75px'
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.app}>
        <AppBar
          title="Color Schemer"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          style={styles.appBar}>
        </AppBar>

        <LeftNav open={this.state.open} style={styles.leftNav}>
          <List>
            <ListItem primaryText="Editor" leftIcon={<ModeEdit />} />
            <ListItem primaryText="Themes" leftIcon={<FormatPaint />} />
            <Divider></Divider>
          </List>
        </LeftNav>

        <Counter></Counter>
      </div>
    );
  }
}
