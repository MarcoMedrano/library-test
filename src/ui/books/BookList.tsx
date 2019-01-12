// tslint:disable
import { observer } from 'mobx-react';
import * as React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import BookIcon from '@material-ui/icons/Book';
import AppStore from 'src/stores/AppStore';

const styles = ({ palette}: Theme) => {
  return createStyles({
    root: {
      alignSelf:'center',
    backgroundColor: palette.background.paper,
      maxWidth: 560,
    width: '100%',
  },
});
}

const initialState ={};
type BookListState = Readonly<typeof initialState>;
interface IBookList extends WithStyles<typeof styles> {
}

@observer
class BookList extends React.Component<IBookList, BookListState> {

  constructor(props:IBookList) {
    super(props);
    this.state = initialState;
  }
  public componentDidMount = ()=>{
    AppStore.loadBooks();
  }

  public render() {
    const { classes } = this.props;

    return <List dense={true} className={classes.root}>
    {AppStore.books.map((book, index) => (
      <ListItem key={"book"+index} >
        <ListItemAvatar>
          <BookIcon />
        </ListItemAvatar>
        <ListItemText primary={book.name} />
        <ListItemText primary={book.edition.toString()} />
        <ListItemText primary={book.authors.length} />
        <ListItemSecondaryAction>
          
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>;
  }


}

export default withStyles(styles)(BookList);
