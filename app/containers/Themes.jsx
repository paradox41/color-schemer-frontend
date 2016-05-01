import fetch from 'isomorphic-fetch';

import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import styles from './themes.css';

export default class Themes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: []
    };
  }

  componentDidMount() {
    this.fetchThemes().then((themes) => {
      this.setState({
        themes
      });
    });
  }

  fetchThemes() {
    return fetch('/api/themes/').then((response) => {
      return response.json();
    }).then(({ objects }) => {
      return objects;
    });
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={200} style={styles.gridList}>
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
      </div>
    );
  }
}
