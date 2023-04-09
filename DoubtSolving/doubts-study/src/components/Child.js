import React, { useState } from 'react';

const Child = (props) => {
    const [childState, setChildState] = useState("Child Name");
    
    const handleChange = (event)=> {
        setChildState(event.target.value);
        props.parentHandler(event.target.value);
    }

    return (
        <div>
            Child
            <input value={childState} onChange={handleChange}/>
        </div>
    );
};

export default Child;