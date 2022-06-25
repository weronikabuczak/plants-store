import DefaultButton from "../../UI/DefaultButton";
import classes from "./AddToCartForm.module.css"
import DefaultInput from "../../UI/DefaultInput";

const AddToCartForm = (props) => {
    return (
        <form className={classes.form}>
            <DefaultButton
                className={classes['amount-button']}
                type='button'
            >Add to cart</DefaultButton>
            <DefaultInput
                label='Current amount'
                className={classes['amount-input']}
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '99',
                    defaultValue: '1',
                }}/>
        </form>
    )
};

export default AddToCartForm;