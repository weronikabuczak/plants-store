import classes from './ProductsList.module.css';
import ProductItem from "./ProductItem/ProductItem";
import {useEffect, useState} from "react";


const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            const response = await fetch('https://plants-store-4a162-default-rtdb.firebaseio.com/plants.json');
            const responseData = await response.json();
            const loadedContent = [];

            for (const key in responseData) {
                loadedContent.push({
                    id: key,
                    name: responseData[key].name,
                    desc: responseData[key].desc,
                    price: responseData[key].price
                })
            }
            setProducts(loadedContent);
        }
        fetchContent();
    }, []);

    return (
        <section className={classes.products}>
            <h1>Our plants</h1>
            <ul className={classes.list}>
                {products.map((plant) => (
                    <ProductItem plant={plant} key={plant.id}/>)
                )}
            </ul>
        </section>
    )
};

export default ProductsList;