import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarView from './Sidebar';
import { 
    Typography, 
    Toolbar,
    CssBaseline,
    Drawer,
    Hidden,
    withStyles
} from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobile_open: false
        };
    }

    handleDrawerToggle() {
        this.setState({ 
            mobile_open: !this.state.mobile_open 
        });
    }

    render() {
        const { classes, theme, title, children } = this.props;
        return (
            <div className={ classes.root }>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle.bind(this)}
                            className={classes.menuButton}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            { title }
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={ classes.drawer }>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobile_open}
                            onClose={this.handleDrawerToggle.bind(this)}
                            classes={{
                              paper: classes.drawerPaper,
                            }}>
                            <SidebarView />
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open>

                            <SidebarView />

                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    { children }
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);