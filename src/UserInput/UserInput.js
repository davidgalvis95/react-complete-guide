// ======================
// ASSIGNMENT 1
//=======================
import React from 'react';

const userInput = (props) => {
    // const value1 = props.name;
    // console.log(value1);

    const style = {
        border: '2px solid red'
    }

    return (
        <div style={style} className="Person">
            <input type="text" onChange={props.input_change} value={props.name}></input>
        </div>
    )
};

export default userInput;