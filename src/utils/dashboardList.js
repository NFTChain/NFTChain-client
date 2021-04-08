import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CodeIcon from '@material-ui/icons/Code';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  listItem: {
    textDecoration: 'none',
    color: 'black',
  },
  green: {
    background: '#4fad65',
  },
}));

const customListItemStyles = {
  root: {
    borderRadius: '15px',
    border: '8px solid white',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginTop: '-0.2em',
    height: '90%',
    transition: '0.1s',
    '&:hover': {
      background: '#4fad65',
      color: 'white',
      transform: 'scale(1.03)',
      '& div': {
        '& svg': {
          color: 'white',
        },
      },
    },
    '&:focus': {
      background: '#4fad65',
      color: 'white',
      '& div': {
        '& svg': {
          color: 'white',
        },
      },
    },
  },
};

const CustomListItem = withStyles(customListItemStyles)(ListItem);

export const ListComponent = props => {
  const classes = useStyles();
  return (
    <List>
      <div>
        <Link to='/dashboard' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <DashboardIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </CustomListItem>
        </Link>
        {props.role_id === 1 ? (
          <Link to='/marketplace' className={classes.listItem}>
            <CustomListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Find Coaches' />
            </CustomListItem>
          </Link>
        ) : null}
        <Link to='/feedback' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Your Feedback' />
          </CustomListItem>
        </Link>
        <Link to='/FAQ/general' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary='FAQ' />
          </CustomListItem>
        </Link>
        <Link to='/chat' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary='Chats' />
          </CustomListItem>
        </Link>
        <Link to='/code' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary='Code' />
          </CustomListItem>
        </Link>
        <Link to='/challenges' className={classes.listItem}>
          <CustomListItem button>
            <ListItemIcon>
              <GradeIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText primary='Challenges' />
          </CustomListItem>
        </Link>
      </div>
    </List>
  );
};
