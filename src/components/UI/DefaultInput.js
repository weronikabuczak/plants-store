import classes from './DefaultInput.module.css';

const DefaultInput = (props) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input {...props.input}/>
        </div>
    )
};

export default DefaultInput;