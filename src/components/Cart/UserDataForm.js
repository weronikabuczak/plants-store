import DefaultButton from "../UI/DefaultButton";
import classes from './UserDataForm.module.css';
import DefaultInput from "../UI/DefaultInput";

const UserDataForm = (props) => {
    const sendDataHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={sendDataHandler} className={classes.form}>
            <h4>Please enter order details below:</h4>
            <div className={classes.input}>
                <label htmlFor='name'>Name</label>
                <DefaultInput type='text' id='name'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='surname'>Surname</label>
                <DefaultInput type='text' id='surname'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='street'>Street</label>
                <DefaultInput type='text' id='street'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='number'>Number</label>
                <DefaultInput type='number' id='number'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='postal'>Postal Code</label>
                <DefaultInput type='text' id='postal'/>
            </div>
            <div className={classes.input}>
                <label htmlFor='city'>City</label>
                <DefaultInput type='text' id='city'/>
            </div>
            <div className={classes['form-buttons']}>
                <DefaultButton type='button' onClick={props.onCancel}>Cancel</DefaultButton>
                <DefaultButton>Confirm</DefaultButton>
            </div>
        </form>
    )
};

export default UserDataForm;