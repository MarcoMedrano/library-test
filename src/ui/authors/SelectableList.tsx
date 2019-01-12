// tslint:disable
import { observer } from 'mobx-react';
import * as React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';


import PersonIcon from '@material-ui/icons/Person';
import AppStore from 'src/stores/AppStore';

const styles = ({ palette}: Theme) => {
  return createStyles({
    root: {
    backgroundColor: palette.background.paper,
      maxWidth: 360,
    width: '100%',
  },
});
}

const initialState ={};
type SelectableAuthorListState = Readonly<typeof initialState>;
interface ISelectableAuthorList extends WithStyles<typeof styles> {
}

@observer
class SelectableAuthorList extends React.Component<ISelectableAuthorList, SelectableAuthorListState> {

  constructor(props:ISelectableAuthorList) {
    super(props);
    this.state = initialState;
  }
  public componentDidMount = ()=>{
    AppStore.buildCheckableAuthors();
  }

  public render() {
    const { classes } = this.props;

    return <List dense={true} className={classes.root}>
    {AppStore.checkableAuthors.map((checkableAuthor, index) => (
      <ListItem key={"checkableAuthor"+index} button>
        <ListItemAvatar>
          <PersonIcon />
        </ListItemAvatar>
        <ListItemText primary={checkableAuthor.author.name} />
        <ListItemSecondaryAction>
          <Checkbox
            onChange={this.handleToggle(index)}
            checked={checkableAuthor.checked}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>;
  }

  private handleToggle = (value:number) => () => {

    AppStore.checkableAuthors[value].checked = !AppStore.checkableAuthors[value].checked;

  };
}

export default withStyles(styles)(SelectableAuthorList);
