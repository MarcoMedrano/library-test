import * as React from 'react';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const drawerWidth = 240;

const styles = ({ breakpoints, spacing, mixins }: Theme) => {
  return createStyles({
    appBar: {
      marginLeft: drawerWidth,
      [breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    content: {
      flexGrow: 1,
      padding: spacing.unit * 3,
    },
    drawer: {
      [breakpoints.up('sm')]: {
        flexShrink: 0,
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: 20,
      [breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    root: {
      display: 'flex',
    },
    toolbar: mixins.toolbar,
  });
}
const initialState = { currentPageIndex:0, mobileOpen: false, pages:["Authors", "Books"] };
type AppState = Readonly<typeof initialState>

interface IAppProps extends WithStyles<typeof styles> {

}

class App extends React.Component<IAppProps, AppState> {

  constructor(props:IAppProps) {
    super(props);
    this.state = initialState;
  }

  public render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Authors', 'Books'].map((text, index) => (
            // tslint:disable-next-line:jsx-no-lambda
            <ListItem button={true} key={text} onClick={()=>{this.handlePageIndexChange(index)}}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button={true}>
              <ListItemText primary={"Logout"} />
            </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap={true}>
              Library
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp={true} implementation="css">
            <Drawer
              variant="temporary"
              anchor='left'
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown={true} implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={true}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.pages[this.state.currentPageIndex]}
        </main>
      </div>
    );
  }

  private handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  
  private handlePageIndexChange = (index:number) => {
    this.setState({currentPageIndex:index});
  }
}

export default withStyles(styles)(App);
