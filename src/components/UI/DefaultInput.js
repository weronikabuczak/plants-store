import React from 'react';
import classes from './DefaultInput.module.css';

const DefaultInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
});

export default DefaultInput;