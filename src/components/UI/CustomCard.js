import classes from './CustomCard.module.css';

const CustomCard = (props) => {
    return(
        <div className={classes.card}>
            {props.children}
        </div>
    )
};

export default CustomCard;