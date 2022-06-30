import CustomModal from "../UI/CustomModal";
import classes from './Cart.module.css';
import DefaultButton from "../UI/DefaultButton";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import UserDataForm from "./UserDataForm";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartContext = useContext(CartContext);

    const removeHandler = (id) => {
        cartContext.removeProduct(id);
    };

    const addHandler = (product) => {
        const cartProduct = {...product, amount: 1};
        cartContext.addProduct(cartProduct);
    };

    const cartHasProducts = cartContext.products.length > 0;

    const orderHandler = () => {
        setIsCheckout(true);
    }


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

    const closeCheckoutHandler = () => {
        setIsCheckout(false);
    }

    return (
        <CustomModal onClose={props.onClose} className={classes.cart}>
            {cartItems}
            {cartHasProducts
                ? (
                    <div className={classes.summary}>
                        <p>Total amount: {cartContext.total}€</p>
                    </div>)
                : <p>No products in cart.</p>
            }
            {isCheckout && <UserDataForm onCancel={closeCheckoutHandler}/>}
            <div className={classes.actions}>
                {!isCheckout &&
                    <DefaultButton onClick={props.onClose} className={classes['close-button']}>Close</DefaultButton>
                }
                {cartHasProducts && !isCheckout &&
                    <DefaultButton className={classes['order-button']} onClick={orderHandler}>Order</DefaultButton>
                }
            </div>
        </CustomModal>
    )
}

export default Cart;