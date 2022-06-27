import NavigationBar from "./components/NavigationBar/NavigationBar";
import {Fragment} from 'react';
import ProductsList from "./components/ProductsList/ProductsList";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Fragment>
            <NavigationBar/>
            <ProductsList/>
            <Footer/>
        </Fragment>

    );
}

export default App;
