import React, { useState, useMemo, useEffect, useCallback } from 'react';

function initialValue() {
    console.log("Initial Value");
    return 'Use Callback Hook In Progres';
}

function UseCallbackHook() {
    /**
     * 1. Memoize the function ( use callback ) Vs Memoize the value ( use memo )
     * 2. Referential Equality for functions
     */
    const [value, setValue] = useState(() => {
        return initialValue()
    });
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    // on every render a new reference of displayName [ function is an object in JS ] is created and hence rendering the component.
    // we can restrict that using useCallback.
    
    const displayName = useCallback(() => {
        return name;
    },[name])
   
    const result = useMemo(() => {
         return factorial(counter)
    },[counter] ) 

    function increment(){
        setCounter((prevState) => prevState + 1);
    }
    function decrement(){
        setCounter(counter -  1);
    }

    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: name.length, name }]);
        setName('');
    }

    function factorial(n){
        /**
         * lets make this function expensive - heavy operation */
        let i = 0;
        while(i <= 200000000) i++;

        if(n < 0) return -1;
        if(n === 1) return 1;
        return n * factorial(n-1);
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue('Use Callback Hook Started')}> Click to get it started </button>

            <div style={{paddingTop: 10 + 'px'}}>
                <h2> Factorial of {counter} is : {result} </h2>
                <div>
                    <button onClick={() => increment()}> + </button>
                    <button onClick={() => decrement()}> - </button>
                </div>
            </div>

            <div style={{paddingTop: 10 + 'px'}}>
                    <input type="text" placeholder="enter any name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button> Name :: {name} </button>

                 
                    <DisplayName displayName={displayName}></DisplayName>
            </div>

        </div>
    );
}

/**
 * 
 * @param {*} displayName 
 * here we are passing displayName function as a parameter to the functional component
 * we are updating the value of the name once we receive the displayName Function.
 */
const DisplayName = ({displayName}) => {
    const [value,setValue] = useState('');
    useEffect(() => {
        setValue(displayName());
        console.log("component rendered !")
    },[displayName])

    return <div> Rendered from DisplayName : My name is {value} </div>
}


export default UseCallbackHook;