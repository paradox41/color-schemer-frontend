import 'isomorphic-fetch';

import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24
  }
};

export default class Themes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: []
    };
  }

  componentDidMount() {
    this.fetchThemes();
  }

  fetchThemes() {
    const url = 'http://dev.color-schemer.com/api/themes/';

    fetch(url, {
      mode: 'cors'
    }).then((themes) => {
      this.setState({
        themes
      });
    }).catch((err) => {
      throw err;
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={200} style={styles.gridList}>
          <Subheader>December</Subheader>
          <GridList cellHeight={200} style={styles.gridList}>
            <Subheader>December</Subheader>
            {this.state.themes.map((theme) => (
              <GridTile
                key={theme.image_url}
                title={theme.name}
                subtitle={<span>by <b>{theme.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <img src={theme.image_url} />
              </GridTile>
            ))}
          </GridList>
        </GridList>
      </div>
    );
  }
}
