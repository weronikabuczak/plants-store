import CustomModal from "../UI/CustomModal";
import classes from './Cart.module.css';
import DefaultButton from "../UI/DefaultButton";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
    const cartContext = useContext(CartContext);

    const removeHandler = (id) => {};

    const addHandler = (product) => {};


    const cartItems = (
        <ul>
            {cartContext.products.map((product) => (
                <CartItem
                    product = {product}
                    key={product.id}
                    onRemove={removeHandler}
                    onAdd={addHandler}
                />
            ))}
        </ul>
    )


    return (
        <CustomModal>
            {cartItems}
            <div className={classes.summary}>
                <p>Total amount: 232$</p>
            </div>
            <div className={classes.actions}>
                <DefaultButton>Close</DefaultButton>
                <DefaultButton>Order</DefaultButton>
            </div>
        </CustomModal>
    )
}

export default Cart;