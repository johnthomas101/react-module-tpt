import React, {useState} from 'react';
import ChildB11 from './ChildB11';

const ChildB1 = (props) => {

    return (
        <div>
            <ChildB11 parentState={props.parentState}/>
        </div>
    );
};


export default ChildB1;