import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    products: [],
    total: 0
}

//state - last state snapshot
//return new state snapshot
//concat - returns new array unlike the push() method
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedProducts = state.products.concat(action.product);
        const updatedTotal = state.total + action.product.price * action.product.amount;
        return {
            products: updatedProducts,
            total: updatedTotal
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

    const addProductHandler = product => {
        dispatchAction({type: 'ADD', product: product});
    };

    const removeProductHandler = id => {
        dispatchAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        products: cartState.products,
        total: cartState.total,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;