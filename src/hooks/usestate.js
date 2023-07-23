import React, { useState } from 'react';

function initialValue() {
    console.log("Initial Value");
    return 'Use State Hook In Progres';
}

function UseStateHook() {
    const [value, setValue] = useState(() => {
        return initialValue()
    });
    const [steps, setSteps] = useState(0);
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    function increment(){
        setSteps((prevState) => prevState + 1);
    }
    function decrement(){
        setSteps(steps -  1);
    }

    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: name.length, name }]);
        setName('');
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue('Use State Hook Started')}> Click to get it started </button>

            <div style={{paddingTop: 10 + 'px'}}>
                <h2> Calcule Steps </h2>
                <div>
                    <button onClick={() => increment()}> + </button>
                    <button> {steps} </button>
                    <button onClick={() => decrement()}> - </button>
                </div>
            </div>

            <div style={{paddingTop: 10 + 'px'}}>
                <form onSubmit={addNames}>
                    <input type="text" placeholder="enter any name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button> Submit</button>
                </form>
                <br></br>
                <div> List of names </div>
                {
                    names.map(el => (
                        <div key={el.id}>
                            {el.name}
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default UseStateHook;