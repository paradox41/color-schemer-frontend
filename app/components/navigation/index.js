import React from 'react';

import { Link } from 'react-router';

import { spacing, typography, zIndex } from 'material-ui/styles';
import { teal600 } from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Code from 'material-ui/svg-icons/action/code';

class Navigation extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    muiTheme: React.PropTypes.object.isRequired
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

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
      menuItemActive: {
        background: this.props.muiTheme.menuItem.hoverColor
      }
    };
  }

  render() {
    return (
      <Drawer open={this.props.open} containerStyle={{zIndex: zIndex.appBar - 100}}>
        <div style={this.styles.logo}>Color Schemer</div>
        <Menu>
          <MenuItem
            containerElement={<Link to="/editor" activeStyle={this.styles.menuItemActive} />}
            primaryText="Editor"
            leftIcon={<Code/>} />
        </Menu>
      </Drawer>
    );
  }
}

export default muiThemeable()(Navigation);
