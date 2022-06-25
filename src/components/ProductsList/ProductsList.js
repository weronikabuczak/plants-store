import classes from './ProductsList.module.css';
import ProductItem from "./ProductItem/ProductItem";

const ProductsList = () => {
    return (
        <section className={classes.products}>
            <h1>Our plants</h1>
            <ul className={classes.list}>
                <ProductItem/>
            </ul>
        </section>
    )
};

export default ProductsList;