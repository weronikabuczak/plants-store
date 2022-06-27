import CartButton from "./CartButton";
import Header from "./Header/Header";
import classes from './NagivationBar.module.css'
import {Fragment} from "react";

const NavigationBar = () => {
    return (
        <Fragment>
        <nav className={classes.nav}>
            <h1>House Plants Store</h1>
            <CartButton/>
        </nav>
        <div className={classes.main}>
            <Header/>
        </div>
    </Fragment>
    );
};

export default NavigationBar;