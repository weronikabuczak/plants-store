import React from 'react';
import classes from './DefaultInput.module.css';

const DefaultInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            <input ref={ref} {...props.input} maxLength={props.maxLength ? props.maxLength : '40'} type={props.type}
                   pattern={props.pattern} required={props.required}/>
        </div>
    )
});

export default DefaultInput;