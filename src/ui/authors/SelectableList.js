// tslint:disable
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import PersonIcon from '@material-ui/icons/Person';
import AppStore from 'src/stores/AppStore';

const styles = (theme) => ({
    root: {
    backgroundColor: theme.palette.background.paper,
      maxWidth: 360,
    width: '100%',
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
    authors: [],
  };

  componentDidMount = ()=>{
    AppStore.getAuthors().then(authors=>{
      this.setState({authors});
    });
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <List dense className={classes.root}>
        {this.state.authors.map((author, index) => (
          <ListItem key={author} button>
            <ListItemAvatar>
              <PersonIcon />
            </ListItemAvatar>
            <ListItemText primary={author.name} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(index)}
                checked={this.state.checked.indexOf(index) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);