import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from '../../assets/styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <h1 className={styles.title}>add Tasks</h1>
    // <div className={styles.root}>
    //   <AppBar position="static">
    //     <Toolbar className={styles.toolbar}>
    //       <Typography className={styles.title}>add Tasks</Typography>
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
};

export default Header;
