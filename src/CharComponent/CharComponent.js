import React from 'react';

const charComponent = (props) => {

    const style = {
        display: 'inline-block',
        textAlign: 'center',
        border: '8px solid black',
        padding: '16px',
        cursor: 'pointer',
        margin: '16px'
    };

    return (
        <div style={style} onClick={props.click}>
            <p>{props.characterToDisplay}</p>
        </div>
    )
};

export default charComponent;