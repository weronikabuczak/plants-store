import classes from './ProductsList.module.css';
import ProductItem from "./ProductItem/ProductItem";

const PLANTS = [
    {
        id: '1',
        name: 'Areca',
        desc: 'Areca is a genus of 51 species of palms in the family Arecaceae, found in humid tropical forests from the islands of the Philippines, Malaysia and India, across Southeast Asia to Melanesia. The generic name Areca is derived from a name used locally on the Malabar Coast of India.',
        price: '20€'
    },
    {
        id: '2',
        name: 'Spathiphyllum',
        desc: 'Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.',
        price: '15€'
    },
    {
        id: '3',
        name: 'Dracaena',
        desc: 'Dracaena is a genus of about 120 species of trees and succulent shrubs. The formerly accepted genera Pleomele and Sansevieria are now included in Dracaena. In the APG IV classification system, it is placed in the family Asparagaceae, subfamily Nolinoideae (formerly the family Ruscaceae). It has also formerly been separated (sometimes with Cordyline) into the family Dracaenaceae or placed in the Agavaceae (now Agavoideae).',
        price: '20€'
    }
]

const ProductsList = () => {
    return (
        <section className={classes.products}>
            <h1>Our plants</h1>
            <ul className={classes.list}>
                {PLANTS.map((plant) => (
                    <ProductItem plant={plant}/>)
                )}
            </ul>
        </section>
    )
};

export default ProductsList;