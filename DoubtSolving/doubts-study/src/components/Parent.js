import React, {useState} from 'react';
import Child from './Child';

const Parent = () => {
    const [childState, setChildState] = useState("");

    const handleChildValue = (childValue) => {
        console.log("From Parent");
        console.log(childValue);
        setChildState(childValue)
    }
    return (
        <div>
            Parent - {childState}
            <Child parentHandler={handleChildValue}></Child>           
        </div>
    );
};


export default Parent;