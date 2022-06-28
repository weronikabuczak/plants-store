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
        const updatedTotal = state.total + action.product.price * action.product.amount;
        const existingProductIdx = state.products.findIndex(product => product.id === action.product.id);
        const existingProduct = state.products[existingProductIdx];
        let updatedProducts;

        if (existingProduct) {
            const updatedProduct = {
                ...existingProduct,
                amount: existingProduct.amount + action.product.amount
            };
            updatedProducts = [...state.products];
            updatedProducts[existingProductIdx] = updatedProduct;
        } else {
            updatedProducts = state.products.concat(action.product);
        }

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