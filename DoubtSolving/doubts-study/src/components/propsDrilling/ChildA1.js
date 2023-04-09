import React, {useState} from 'react';
import ChildA11 from './ChildA11';

const ChildA1 = (props) => {

    return (
        <div>
            <ChildA11 parentState={props.parentState}/>
        </div>
    );
};


export default ChildA1;