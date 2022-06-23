import classes from './ProductItem.module.css';
import CustomCard from "../../UI/CustomCard";
import firstPlant from "../../../assets/plant1.png"
import AddToCart from "./AddToCart";

const ProductItem = () => {
    return (
        <CustomCard>
            <section className={classes.item}>
                <header>
                    <h2>Areca</h2>
                </header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <img className={classes.image} src={firstPlant}/>
                <AddToCart/>
            </section>
        </CustomCard>
    )
}

export default ProductItem;