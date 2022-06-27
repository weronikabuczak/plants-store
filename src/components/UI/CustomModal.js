import {Fragment} from "react";
import classes from './CustomModal.module.css';
import ReactDOM from "react-dom";

const portal = document.getElementById('modals');

const Backdrop = () => {
    return (
        <div className={classes.backdrop}/>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const CustomModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </Fragment>
    )
};

export default CustomModal;