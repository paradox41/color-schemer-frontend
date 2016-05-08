import 'react-colors-picker/assets/index.css';

import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from 'react-colors-picker';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class SchemeEditor extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    scheme: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    this.styles = {
      paper: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    };
  }

  render() {
    const { scheme } = this.props;
    window.scheme = scheme;
    return (
      <Paper style={this.styles.paper} zDepth={1} rounded={false}>
        <TextField floatingLabelText="Name" defaultValue={scheme.name} />
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Color</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>Background</TableRowColumn>
              <TableRowColumn><ColorPicker placement="bottomRight" color={scheme.background} /></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Caret</TableRowColumn>
              <TableRowColumn><ColorPicker placement="bottomRight" color={scheme.caret} /></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Foreground</TableRowColumn>
              <TableRowColumn><ColorPicker placement="bottomRight" color={scheme.foreground} /></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Invisibles</TableRowColumn>
              <TableRowColumn><ColorPicker placement="bottomRight" color={scheme.invisibles} /></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Line Highlight</TableRowColumn>
              <TableRowColumn><ColorPicker placement="bottomRight" color={scheme.lineHighlight} /></TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Selection</TableRowColumn>
              <TableRowColumn><ColorPicker placement="bottomRight" color={scheme.selection} /></TableRowColumn>
            </TableRow>
            {scheme.settings.map(function(setting, index) {
              return (
                <TableRow key={index}>
                  <TableRowColumn>{setting.name}</TableRowColumn>
                  <TableRowColumn><ColorPicker placement="bottomRight" color={setting.settings.foreground} /></TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default connect(state => state)(SchemeEditor);
