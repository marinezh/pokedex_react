import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import classes from './Layout.module.css'

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Layout;