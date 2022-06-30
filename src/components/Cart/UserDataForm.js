import DefaultButton from "../UI/DefaultButton";
import classes from './UserDataForm.module.css';
import DefaultInput from "../UI/DefaultInput";
import {useRef} from 'react';

const UserDataForm = (props) => {
    const isEmpty = input => input.length === 0;

    const nameRef = useRef();
    const surnameRef = useRef();
    const streetRef = useRef();
    const numberRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();

    const sendDataHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const street = streetRef.current.value;
        const number = numberRef.current.value;
        const postalCode = postalCodeRef.current.value;
        const city = cityRef.current.value;

        const nameIsValid = !isEmpty(name);
        const surnameIsValid = !isEmpty(surname);
        const streetIsValid= !isEmpty(street);
        const numberIsValid = !isEmpty(number);
        const postalCodeIsValid = !isEmpty(postalCode);
        const cityIsValid = !isEmpty(city);

        const formIsValid =
            nameIsValid && surnameIsValid && numberIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

        // if(!formIsValid) {
        //     return;
        // }

        props.onConfirm({
            name, surname, street, number, postalCode, city
        });


    };

    return (
        <form onSubmit={sendDataHandler} className={classes.form}>
            <h4>Please enter order details below:</h4>
            <div className={classes.input}>
                <label htmlFor='name'>Name</label>
                <DefaultInput ref={nameRef} type='text' id='name'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='surname'>Surname</label>
                <DefaultInput ref={surnameRef} type='text' id='surname'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='street'>Street</label>
                <DefaultInput ref={streetRef} type='text' id='street'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='number'>Number</label>
                <DefaultInput ref={numberRef} type='number' id='number'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='postal'>Postal Code</label>
                <DefaultInput ref={postalCodeRef} type='text' id='postal'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='city'>City</label>
                <DefaultInput ref={cityRef} type='text' id='city'/>
            </div>
            <div className={classes['form-buttons']}>
                <DefaultButton type='button' onClick={props.onCancel} cancellation>Cancel</DefaultButton>
                <DefaultButton confirmation>Confirm</DefaultButton>
            </div>
        </form>
    )
};

export default UserDataForm;