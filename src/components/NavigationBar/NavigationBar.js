import CartButton from "./CartButton";
import {Fragment} from "react";
import Header from "../Header/Header";
import classes from './NagivationBar.module.css'

const NavigationBar = () => {
    return (
        <Fragment>
            <main className={classes.main}>
                <nav>
                    <h1>House Plants Store</h1>
                    <CartButton/>
                </nav>
                <Header/>
            </main>
        </Fragment>
    );
};

export default NavigationBar;