import React, { useState, useMemo } from 'react';

function initialValue() {
    console.log("Initial Value");
    return 'Use Memo Hook In Progres';
}

function UseMemoHook() {
    /**
     * whenever we are updating counter, there is a change in state and the whole component
     * re-renders and hence the factorial function will be called again 
     * though the input didn't change
     * 
     * 1. Optimize Expensive Operation
     * 2. Referential Equality
     */
    const [value, setValue] = useState(() => {
        return initialValue()
    });
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    // before using memo -- input field typing is taking too long to respond
    // const result = factorial(counter);
    
    // after using memo function
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
            <button onClick={() => setValue('Use Memo Hook Started')}> Click to get it started </button>

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
                    <DisplayName name={name}></DisplayName>
            </div>

        </div>
    );
}

/**
 * here the props are object but though the values are same the reference of this props will change
 * hence we can use memo over here to stop re-rendering of the DisplayName.
 * when there is a change in counter, the whole component will be re-rendered and hence this 
 * function name will be rendered.
 * we can use memo here so that our props have referential equality.
 */

// commenting so that we can use the memo version of DisplayName
// const DisplayName = ({name}) => {
//     console.log("rendered");
//     return <div> Rendered from DisplayName : My name is {name}  </div>
// }

const DisplayName = React.memo(({name}) => {
    console.log("rendered");
    return <div> Rendered from DisplayName MEMO : My name is {name}  </div>
})

export default UseMemoHook;