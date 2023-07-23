import React, { useContext, useReducer, useState } from 'react';

function initialValue() {
    console.log("Initial Value");
    return 'Use Reducer Hook In Progres';
}

const initialState = 0;

function reducer (state,action){
    switch(action.type){
        case "increment" : return state + 1;
        case "decrement" : return state - 1;
        default :
            throw new Error("Type not defined");
    }
}

function UseContextHook() {
    const [value, setValue] = useState(() => {
        return initialValue()
    });

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue('Use Reducer Hook Started')}> Click to get it started </button>

            <div style={{ paddingTop: 10 + 'px' }}>
                <h2> Counter </h2>
                <div>
                    <button onClick={() => dispatch({type : 'increment'})}> + </button>
                    <button> {state} </button>
                    <button onClick={() => dispatch({type : 'decrement'})}> - </button>
                </div>
            </div>
        </div>
    );
}

export default UseContextHook;