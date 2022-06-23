import classes from './DefaultButton.module.css';

const DefaultButton = (props) => {
    return (
        <button
            className={classes['default-button']}
            type={props.type}
            // onClick={props.onClick}
        >{props.children}</button>
    )
}

export default DefaultButton;