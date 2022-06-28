import DefaultButton from "../UI/DefaultButton";
import classes from './CartItem.module.css';

const CartItem = ({product}) => {
    return (
        <li className={classes['cart-item']}>
                <h2>{product.name}</h2>
                <span>Price: {product.price}</span>
                <span>Amount: {product.amount}</span>
            <div className={classes.actions}>
                <DefaultButton>-</DefaultButton>
                <DefaultButton>+</DefaultButton>
                {/*    todo add remove and add*/}
            </div>
        </li>
    )
}

export default CartItem;