import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addProductHandler = product => {
    };

    const removeProductHandler = id => {
    };

    const cartContext = {
        products: [],
        total: 0,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;