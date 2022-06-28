import CustomModal from "../UI/CustomModal";
import classes from './Cart.module.css';
import DefaultButton from "../UI/DefaultButton";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const removeHandler = (id) => {};

    const addHandler = (product) => {
        const cartProduct = {...product, amount: 1};
        cartContext.addProduct(cartProduct);
    };

    const cartHasProducts = cartContext.products.length > 0;


    const cartItems = (
        <ul className={classes['products-list']}>
            {cartContext.products.map((product) => (
                <CartItem
                    product={product}
                    key={product.id}
                    onAdd={addHandler.bind(null, product)}
                    onRemove={removeHandler.bind(null, product.id)}
                />
            ))}
        </ul>
    )


    return (
        <CustomModal onClose={props.onClose}>
            {cartItems}
            <div className={classes.summary}>
                <p>Total amount: {cartContext.total}€</p>
            </div>
            <div className={classes.actions}>
                <DefaultButton onClick={props.onClose} className={classes['close-button']}>Close</DefaultButton>
                {cartHasProducts && <DefaultButton className={classes['order-button']}>Order</DefaultButton>}
            </div>
        </CustomModal>
    )
}

export default Cart;