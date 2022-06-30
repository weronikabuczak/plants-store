import DefaultButton from "../UI/DefaultButton";

const UserDataForm = () => {
    return (
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name'/>
            </div>
            <div>
                <label htmlFor='surname'>Surname</label>
                <input type='text' id='surname'/>
            </div>
            <div>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'/>
            </div>
            <div>
                <label htmlFor='number'>Number</label>
                <input type='number' id='number'/>
            </div>
            <div>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal'/>
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'/>
            </div>
            <DefaultButton>Confirm</DefaultButton>
        </form>
    )
};

export default UserDataForm;