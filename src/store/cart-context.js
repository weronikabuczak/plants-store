import React from "react";

const CartContext = React.createContext({
    products: [],
    total: 0,
    addProduct: (product) => {},
    removeProduct: (product) => {}
});

export default CartContext;
