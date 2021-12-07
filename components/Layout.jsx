import React from 'react';
import Link from 'next/link';
import Footer from './Footer';
import {AppBar, Toolbar, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu, ShoppingCart } from '@mui/icons-material';


const useStyles = makeStyles(
     {
        appBar: {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
        },
        menu: {
            color: '#000',
        }
    }
)

export default function Layout({ children }) {
    const classes = useStyles();
  return (
    <>
    <AppBar 
       >
        <Toolbar className={classes.appBar} >
            <Menu className={classes.menu} />
            <ShoppingCart  className={classes.menu} />
        </Toolbar >
        </AppBar>
      <div className={classes.toolbar}>
        { children }
      </div>
      {/* <Footer /> */}
    </>
  );
}
