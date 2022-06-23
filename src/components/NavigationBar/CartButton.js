import classes from './CartButton.module.css';
import icon from '../../assets/cart-icon.png'

const CartButton = () => {
    return (
        <button className={classes['cart-button']}>
              <span>
                <img className={classes.icon} src={icon}/>
            </span>
            <span className={classes.text}>Cart</span>
            <span className={classes.quantity}>1</span>
        </button>
    );
};

export default CartButton;