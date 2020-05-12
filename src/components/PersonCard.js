import React, { useState } from 'react';

const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    })
    
    const clickHandler = element => {
        setState({
            age: state.age + 1
        })
    }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h2>Age: {state.age}</h2>
            <h3>Hair Color: {props.hairColor}</h3>
            <button onClick={clickHandler}>Birthday button for {props.firstName} {props.lastName} </button>
        </div>
    );
}

export default PersonCard;