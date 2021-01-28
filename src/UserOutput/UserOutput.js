// ======================
// ASSIGNMENT 1
//=======================
import React from 'react';
import '../components/Persons/Person/Person.css'
const userOutput = (props) => {

    const style = {
        border: '2px solid blue'
    }

    return (
        <div className="Person">
            <p> {props.name} </p>
            <p> {props.name} </p>
        </div>
    )
};

export default userOutput;