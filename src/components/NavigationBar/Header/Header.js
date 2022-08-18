import mainImage from "../../../assets/main-image.jpg";
import WaveContainer from "./WaveContainer";
import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <React.Fragment>
                <header className={classes.header}>
                    <h1>Buy beautiful plants online</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <img src={mainImage} alt='Many plants'/>
                {/*    todo carousel ?*/}
                </header>
            <WaveContainer/>
        </React.Fragment>
    )
};

export default Header;