import CartButton from "./CartButton";
import {Fragment} from "react";
import classes from './NagivationBar.module.css';
import mainImage from '../../assets/main-image.jpg';
import WaveContainer from "./WaveContainer";

const NavigationBar = () => {
    return (
        <Fragment>
            <main>
                <nav>
                    <h1>House Plants Store</h1>
                    <CartButton/>
                </nav>
                <header>
                    <h2>Buy beautiful plants online</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={mainImage} alt='Many plants'/>
                </header>
               <WaveContainer/>

            </main>
        </Fragment>
    );
};

export default NavigationBar;