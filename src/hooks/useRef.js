import React, { useState, useRef, useEffect } from 'react';

function initialValue() {
    console.log("Initial Value");
    return 'Use Ref Hook In Progres';
}

function UseRefHook() {
    /**
     * Access DOM Elements
     * never use useRef to update the values.
     * useRef can be used to hold the previous state.
     */
    const inputElement = useRef("");
    const previousNumberRef = useRef("");
    const [value] = useState(() => {
        return initialValue()
    });

    const [name, setName] = useState('');
    const [random, setRandom] = useState(0);

    function ResetName() {
        setName('');
        /**
         * taking the focus back to the input field.
         */
        inputElement.current.focus()
    }

    useEffect(() => {
        previousNumberRef.current = random;
    },[random])

    function GenerateRandomNo(){
        setRandom(Math.ceil(Math.random() * 100));
    }

    return (
        <div>
            <h1>{value}</h1>
            <div style={{ paddingTop: 10 + 'px' }}>
                <h5 style={{color: '#aeaeae'}}> useRef can access DOM Elements </h5>
                <input type="text" ref={inputElement} placeholder="enter any name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <button onClick={() => ResetName()}> Reset</button>
                <div>
                    My name is {name}
                </div>
            </div>

            <div style={{ paddingTop: 10 + 'px' }}>
                <h5 style={{color: '#aeaeae'}}> 
                useRef can be used to hold the previous state  <br></br>
                Hold mutuable values between re-renders
                </h5>
                Random No : {random}
                <div>
                    Previous no : {previousNumberRef.current != "undefined" ? previousNumberRef.current : ""}
                </div>
                <button onClick={() => GenerateRandomNo()}> Generate Random No</button>
            </div>
        </div>
    );
}

export default UseRefHook;