import NavigationBar from "./components/NavigationBar/NavigationBar";
import {Fragment} from 'react';
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
    return (
        <Fragment>
            <NavigationBar/>
            <ProductsList/>
        </Fragment>
    );
}

export default App;
