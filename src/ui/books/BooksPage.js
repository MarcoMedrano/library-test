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

const styles = theme => ({
    rootPanel: {
      height: window.innerHeight,
      //height: "100%",
    },
    mainPanel: {
      // backgroundColor: theme.palette.primary.light,
      height: "100%"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 240,
    },
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
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
             <br />
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
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