// tslint:disable
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FormControl } from '@material-ui/core/FormControl';
import { MenuItem } from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import SelectableList from '../authors/SelectableList';

const styles = theme => ({
    mainPanel: {
        height: "100%"
    },
    toolbar: theme.mixins.toolbar,
});


class BooksPage extends React.Component {
    state = { name: "" }

    render() {
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
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="name"
                                    label="Edition"
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </Grid>
                        </div>
                        <SelectableList />
                    </Grid>
                    <div style={{ textAlign: "center", padding: 32 }}>
                        <Button color="primary" size="large" onClick={this.props.onClickNext}>Save</Button>
                    </div>
                </Grid>
            </main>
        );
    }
}

BooksPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onClickNext: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(BooksPage);