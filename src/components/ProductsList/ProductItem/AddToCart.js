import DefaultButton from "../../UI/DefaultButton";
import Counter from "./Counter";
import {Fragment} from "react";

const AddToCart = () => {
    return (
        <Fragment>
            <DefaultButton>Add to cart</DefaultButton>
            <Counter/>
        </Fragment>
    )
}

export default AddToCart;