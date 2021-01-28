import React from 'react';

const validationComponent = (props) => {

    const isTextTooShort = props.textLength >=5?false:true;
    const person = isTextTooShort?(<p>{'The text is too short'}</p>):(<p>{'The text is too long'}</p>);

    return (
        <div className="Person">
            {/*<p onClick={props.click}>Im {props.name} and Im {props.age} years old</p>*/}
            <input type="text" onChange={props.changed} value={props.phrase}></input>
            <p>Text length: {props.textLength}</p>
            {person}
        </div>
    )
};

export default validationComponent;