/**
 * Created by Korepanov Grigorii on 28.10.2019
 * grigoriikorepanov@gmail.com
 * https://t.me/loovery
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: '#e4eaf1',
  },
  listItemChat: {
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#3d4044',
    },
  },
}));

export default function CheckboxListSecondary() {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {['Ivan Makeev', 'Антон Чепур', 'Кирилл Ткаченко', 'GeekBrains. ReactJS. Иван Макеев'].map(value => {
        const labelId = `list-secondary-label-${value}`;
        return (
          <ListItem key={value} button className={classes.listItemChat}>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        );
      })}
    </List>
  );
}
