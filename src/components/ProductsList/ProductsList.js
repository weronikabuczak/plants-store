import classes from './ProductsList.module.css';
import ProductItem from "./ProductItem/ProductItem";
import {useEffect, useState} from "react";


const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            const response = await fetch('https://plants-store-4a162-default-rtdb.firebaseio.com/plants.json');

            if (!response.ok) {
                throw new Error('Cannot load content.');
            }
            const responseData = await response.json();
            console.log(responseData)
            const loadedContent = [];

            for (const key in responseData) {
                loadedContent.push({
                    id: key,
                    name: responseData[key].name,
                    desc: responseData[key].desc,
                    price: responseData[key].price,
                    img: responseData[key].img
                })
            }
            setProducts(loadedContent);
            setIsLoading(false);
        }
        fetchContent().catch(error => {
            setIsLoading(false);
            setError(error.message);
        })

    }, []);

    if (isLoading) {
        return (
            <section className={classes.loading}>
                <p>Loading content...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className={classes.error}>
                <p>{error}</p>
            </section>
        )
    }

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