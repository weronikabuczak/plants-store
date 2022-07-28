import classes from './ProductItem.module.css';
import CustomCard from "../../UI/CustomCard";
import AddToCartForm from "./AddToCartForm";
import {useContext, useState} from "react";
import CartContext from "../../../store/cart-context";

const ProductItem = ({plant}) => {
    const cartContext = useContext(CartContext);
    const [addSuccess, setAddSuccess] = useState(false);

    const addToCartHandler = amount => {
        cartContext.addProduct({
            id: plant.id,
            name: plant.name,
            desc: plant.desc,
            amount: amount,
            price: plant.price,
            img: plant.img
        })
        setAddSuccess(true);
    };

    return (
        <CustomCard className={classes['product-card']}>
            {addSuccess && <p className={classes.success}>Plant has been added successfully!</p>}
            <li className={classes.item}>
                <header>
                    <h1>{plant.name}</h1>
                    <p className={classes.price}>{plant.price}€</p>
                </header>
                <p className={classes.desc}>{plant.desc}</p>
                <img className={classes.image} src={plant.img}/>
                <AddToCartForm id={plant.id} onAddToCart={addToCartHandler}/>

            </li>
        </CustomCard>
    )
}

export default ProductItem;