import React, { useContext, useState } from 'react';
import { counterContext } from './counterContext';

function initialValue() {
    console.log("Initial Value");
    return 'Use Context Hook In Progres';
}

function UseContextHook() {
    const [value, setValue] = useState(() => {
        return initialValue()
    });
    const [steps, setSteps] = useState(0);
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    function increment() {
        setSteps((prevState) => prevState + 1);
    }
    function decrement() {
        setSteps(steps - 1);
    }

    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: name.length, name }]);
        setName('');
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue('Use Context Hook Started')}> Click to get it started </button>

            <div style={{ paddingTop: 10 + 'px' }}>
                <h2> Counter </h2>
                <div>
                    <button onClick={() => increment()}> + </button>
                    <button> {steps} </button>
                    <button onClick={() => decrement()}> - </button>
                </div>
            </div>

            <counterContext.Provider value={{steps, setSteps}}>
                <ChildComponent1></ChildComponent1>
                <ChildComponent2></ChildComponent2>
            </counterContext.Provider>

        </div>
    );
}

const ChildComponent1 = () => {
    const { steps, setSteps } = useContext(counterContext);
    return (
        <div style={{ paddingTop: 10 + 'px' }}>
            <button onClick={() => setSteps(steps + 1)}> + </button>
            <button> ChildComponent2 : {steps} </button>
            <button onClick={() => setSteps(steps - 1)}> - </button>
        </div>
    )

}

const ChildComponent2 = () => {
    const { steps, setSteps } = useContext(counterContext);
    return (
        <div style={{ paddingTop: 10 + 'px' }}>
            <button onClick={() => setSteps(steps + 1)}> + </button>
            <button> ChildComponent2 : {steps} </button>
            <button onClick={() => setSteps(steps - 1)}> - </button>
            <ChildComponent3></ChildComponent3>
        </div>
    )

}

const ChildComponent3 = () => {
    const { steps, setSteps } = useContext(counterContext);
    return (
        <div>
            <button onClick={() => setSteps(steps + 1)}> + </button>
            <button> ChildComponent3 : {steps} </button>
            <button onClick={() => setSteps(steps - 1)}> - </button>
        </div>)
}


export default UseContextHook;