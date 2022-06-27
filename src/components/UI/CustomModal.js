import {Fragment} from "react";
import classes from './CustomModal.module.css';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}/>
    )
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portal = document.getElementById('portals');


const CustomModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </Fragment>
    )
};

export default CustomModal;