import DefaultButton from "../UI/DefaultButton";
import classes from './UserDataForm.module.css';
import DefaultInput from "../UI/DefaultInput";
import {useRef} from 'react';

const UserDataForm = (props) => {

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

        props.onConfirm({
            name, surname, street, number, postalCode, city
        });
    };

    return (
        <form onSubmit={sendDataHandler} className={classes.form}>
            <h4>Please enter order details below:</h4>
            <div className={classes.input}>
                <label htmlFor='name'>Name</label>
                <DefaultInput required ref={nameRef} type='text' id='name'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='surname'>Surname</label>
                <DefaultInput required ref={surnameRef} type='text' id='surname'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='street'>Street</label>
                <DefaultInput required ref={streetRef} type='text' id='street'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='number'>Number</label>
                <DefaultInput required ref={numberRef} type='number' id='number'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='postal'>Postal Code</label>
                <DefaultInput required ref={postalCodeRef} pattern="[0-9]{5}" maxLength='6' type='text' id='postal'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='city'>City</label>
                <DefaultInput required ref={cityRef} type='text' id='city'/>
            </div>
            <div className={classes['form-buttons']}>
                <DefaultButton type='button' onClick={props.onCancel} cancellation>Cancel</DefaultButton>
                <DefaultButton confirmation>Confirm</DefaultButton>
            </div>
        </form>
    )
};

export default UserDataForm;