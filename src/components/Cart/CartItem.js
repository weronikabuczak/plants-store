import DefaultButton from "../UI/DefaultButton";

const CartItem = (props) => {
return (
    <li>
        <h3>{props.name}</h3>
        <span>Price: {props.price}</span>
        <span>Amount: {props.amount}</span>
        <div>
            <DefaultButton>Remove</DefaultButton>
            <DefaultButton>Add</DefaultButton>
        {/*    todo add remove and add*/}
        </div>
    </li>
)
}

export default CartItem;