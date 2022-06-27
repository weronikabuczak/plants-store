import DefaultButton from "../../UI/DefaultButton";
import classes from "./AddToCartForm.module.css"
import DefaultInput from "../../UI/DefaultInput";
import {useRef, useState} from "react";

const AddToCartForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const amount = amountRef.current.value;
        const amountNumber = +amount;

        if (amountNumber < 1 || amountNumber > 99) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(amountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <DefaultButton
                className={classes['amount-button']}
                type='submit'>
                Add to cart</DefaultButton>
            {!amountIsValid && <p>Entered amount is not valid.</p>}
            <DefaultInput
                ref={amountRef}
                label='Choose amount'
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