import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import {useState} from "react";

function App() {
    const [cartVisible, setCartVisible] = useState(false);

    const setCartVisibleHandler = () => {
        setCartVisible(true);
    }

    const hideCartHandler = () => {
        setCartVisible(false);
    }


    return (
        <CartProvider>
            {cartVisible && <Cart onClose={hideCartHandler}/>}
            <NavigationBar onShowCart={setCartVisibleHandler}/>
            <ProductsList/>
            <Footer/>
        </CartProvider>

    );
}

export default App;
