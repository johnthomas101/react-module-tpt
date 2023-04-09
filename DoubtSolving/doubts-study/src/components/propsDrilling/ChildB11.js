import React, {useState} from 'react';

const ChildB11 = (props) => {

    return (
        <div>
            The leaf level child - 
            {
                props.parentState
            }
        </div>
    );
};


export default ChildB11;