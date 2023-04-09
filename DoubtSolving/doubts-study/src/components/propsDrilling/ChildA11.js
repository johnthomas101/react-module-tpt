import React, {useState} from 'react';

const ChildA11 = (props) => {

    return (
        <div>
            The leaf level child - 
            {
                props.parentState
            }
        </div>
    );
};


export default ChildA11;