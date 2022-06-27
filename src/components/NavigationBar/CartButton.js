import classes from './CartButton.module.css';
import icon from '../../assets/cart-icon.png'
import CartContext from "../../store/cart-context";
import {useContext} from "react";

const CartButton = () => {
    const cartContext = useContext(CartContext);

    const numberOfProducts = cartContext.products.reduce((currentNumber, product) => {
        return currentNumber + product.amount;
    }, 0);

    return (
        <button className={classes['cart-button']}>
              <span>
                <img className={classes.icon} src={icon}/>
            </span>
            <span className={classes.text}>Cart</span>
            <span className={classes.quantity}>{numberOfProducts}</span>
        </button>
    );
};

export default CartButton;