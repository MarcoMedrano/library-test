// tslint:disable
import { observer } from 'mobx-react';
import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SelectableList from '../authors/SelectableList';
import AppStore from 'src/stores/AppStore';
import Book from 'src/model/Book';
import BookList from './BookList';
import {DateFormatInput} from 'material-ui-next-pickers'

const styles = ({ mixins}: Theme) => {
    return createStyles({
    mainPanel: {
        height: "100%"
    },
    toolbar: mixins.toolbar,
});
}

const initialState ={};
type BooksPageState = Readonly<typeof initialState>;
interface IBooksPage extends WithStyles<typeof styles> {}

@observer
class BooksPage extends React.Component<IBooksPage, BooksPageState> {

    public componentDidMount =()=>{
        AppStore.editingBook = new Book();
    }
    public render() {
        const { classes } = this.props;
        return (
            <main className={classes.mainPanel}>
                <div className={classes.toolbar} />
                <Grid container  direction="column">
                    <Grid container direction="row" >
                        <div style={{padding:32}}>
                            <Grid container alignItems="center" direction="column">
                                <TextField
                                    required
                                    id="name"
                                    label="Title"
                                    margin="normal"
                                    value = {AppStore.editingBook.name}
                                    onChange = {e => AppStore.editingBook.name = e.target.value}
                                />
                                 <div style={{ padding: 32 }}>
                                     <DateFormatInput  
                                     name='date-input' 
                                     value={AppStore.editingBook.edition} 
                                     onChange={d => AppStore.editingBook.edition = d}/>
                                 </div>
                            </Grid>
                        </div>
                        <SelectableList />
                    </Grid>
                    <div style={{ textAlign: "center", padding: 32 }}>
                        <Button color="primary" size="large" onClick={this.handleSave}>Save</Button>
                    </div>
                    <BookList />
                </Grid>
            </main>
        );
    }

    private handleSave(){
        AppStore.editingBook.authors = AppStore.checkableAuthors.filter(c => c.checked).map(c => c.author);
        AppStore.addBook(AppStore.editingBook);
        AppStore.editingBook = new Book();
    }
}

export default withStyles(styles, { withTheme: true })(BooksPage);