import React, {useState} from 'react';
import ChildB1 from './ChildB1';

const ChildB = (props) => {

    return (
        <div>
            <ChildB1 parentState={props.parentState}/>
        </div>
    );
};


export default ChildB;