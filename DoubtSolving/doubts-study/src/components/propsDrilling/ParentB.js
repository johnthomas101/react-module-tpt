import React, {useState} from 'react';
import ChildB from './ChildB';

const ParentB = () => {
    const [parentState, setParentState] = useState("Hello B");
    return (
        <div>
            <ChildB parentState={parentState}/>
        </div>
    );
};


export default ParentB;