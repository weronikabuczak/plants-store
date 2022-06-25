import DefaultButton from "../../UI/DefaultButton";
import classes from "./Counter.module.css"

const Counter = () => {
    return (
        <form>
            <input
                label='Amount'
                type='number'
                min='1'
                max='99'
                defaultValue='1'/>
            <DefaultButton
                className={classes['amount-button']}
                type='button'
            >Add</DefaultButton>
        </form>
    )
};

export default Counter;