import React, {useState} from 'react';
import ChildA1 from './ChildA1';

const ChildA = (props) => {

    return (
        <div>
            <ChildA1 parentState={props.parentState}/>
        </div>
    );
};


export default ChildA;