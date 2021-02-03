import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import styles from '../../assets/styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <NoteAddIcon />
          </IconButton>
          <Typography className={styles.title}>add Tasks</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
