import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";

function App() {
    return (
        <CartProvider>
            <NavigationBar/>
            <ProductsList/>
            <Footer/>
        </CartProvider>

    );
}

export default App;
