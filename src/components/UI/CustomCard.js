import classes from './CustomCard.module.css';

const CustomCard = (props) => {
    return(
        <div className={classes.card}
             className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
};

export default CustomCard;