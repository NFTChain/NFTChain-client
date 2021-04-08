import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { ListComponent } from 'utils/dashboardList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#ffffff',
  },
  toolbar: {
    zIndex: -10,
  },
  toolbarIcon: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
    color: '#4fad65',
    fontSize: '.8rem',
    paddingLeft: '3em',

    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${'LOGO'})`,
      marginLeft: '-0.4em',
      width: '100%',
      transform: 'scale(0.6)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar,
      color: '#4fad65',
      fontSize: '.8rem',
      transition: '',
      '&:hover': {
        transform: 'scale(0.65)',
      },
    },
  },
  toolbarIconClosed: {
    backgroundImage: `url(${'LOGO'})`,
    marginLeft: '-0.4em',
    width: '100%',
    transform: 'scale(0.6)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
    color: '#4fad65',
    fontSize: '.8rem',
    transition: '',
    '&:hover': {
      transform: 'scale(0.65)',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none',
    color: 'grey',
    [theme.breakpoints.down('sm')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  profileMenu: {
    position: 'absolute',
    top: 4,
    right: 40,
    color: 'grey',
    transform: 'scale(1.25)',
    borderRadius: '50%',
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: '#4fad65',
  },
  drawer: {
    border: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      zIndex: 10000,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(9),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
  },
  drawerPaperClose: {
    zIndex: 10000,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridContainer: { height: '100%' },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 5s, opacity 0s linear',
  },
}));

const Dashboard = (props) => {
  const { user } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleLogout = () => {
    setAnchorEl(null);
    props.logout(props);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      ></AppBar>
      <div className={classes.profileMenu}>
        <IconButton
          className={classes.iconButton}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          {user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt="user_avatar"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu}
          onClose={handleClose}
        >
          <Link className={classes.link} to="/settings">
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawer,
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
          ),
        }}
        open={open}
      >
        <div
          className={open ? classes.toolbarIcon : classes.toolbarIconClosed}
          onClick={() => setOpen(!open)}
        >
          <Hidden smDown implementation="css">
            <h1 className={open ? classes.toolbarTitle : classes.hidden}>
              DevCoach
            </h1>
          </Hidden>
          {
            <Hidden smDown implementation="css">
              <IconButton
                className={!open ? classes.hidden : null}
                onClick={handleDrawerClose}
              >
                <ChevronLeftIcon />
              </IconButton>
            </Hidden>
          }
        </div>
        <Divider className={classes.styledDivider} />
        <ListComponent
          role_id={props.user.role_id}
          className={classes.listStyles}
        />
        <Divider className={classes.hidden} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} className={classes.gridContainer}>
            {props.routes}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
