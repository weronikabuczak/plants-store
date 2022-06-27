import classes from './ProductItem.module.css';
import CustomCard from "../../UI/CustomCard";
import defaultPlant from "../../../assets/plant1.png"
import AddToCartForm from "./AddToCartForm";

const ProductItem = ({plant}) => {
    return (
        <CustomCard>
            <section className={classes.item}>
                <header>
                    <h2>{plant.name}</h2>
                    <p className={classes.price}>{plant.price}</p>
                </header>
                <p className={classes.desc}>{plant.desc}</p>
                <img className={classes.image} src={defaultPlant}/>
                <AddToCartForm/>
            </section>
        </CustomCard>
    )
}

export default ProductItem;