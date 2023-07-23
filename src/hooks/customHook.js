import React, { useState } from 'react';
import useCounter from './customCounter';

function initialValue() {
    console.log("Initial Value");
    return 'Custom Hook';
}

function UseCustomHook() {
    const [value] = useState(() => {
        return initialValue()
    });
    
    const [counter,increment, decrement, reset] = useCounter(0)

    return (
        <div>
            <h1>{value}</h1>
          
            <div style={{paddingTop: 10 + 'px'}}>
                <div>
                    <button onClick={() => increment()}> + </button>
                    <button> {counter} </button>
                    <button onClick={() => decrement()}> - </button>
                    <button onClick={() => reset()}> Reset </button>
                </div>
            </div>

        </div>
    );
}

export default UseCustomHook;