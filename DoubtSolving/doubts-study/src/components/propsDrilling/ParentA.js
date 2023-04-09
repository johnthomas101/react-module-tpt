import React, {useState} from 'react';
import ChildA from './ChildA';

const ParentA = () => {
    const [parentState, setParentState] = useState("Hello A");
    return (
        <div>
            <ChildA parentState={parentState}/>
        </div>
    );
};


export default ParentA;