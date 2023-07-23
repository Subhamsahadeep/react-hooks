import React, { useEffect, useState } from 'react';

function initialValue() {
    console.log("Initial Value");
    return 'Use State Hook In Progres';
}

function UseStateHook() {
    const [dateTime, setDateTime] = useState(new Date().toString());
   
    useEffect(() => {
        console.log("Component is Mounted") 
    },[])

    useEffect(() => {
       console.log("Component is Mounted or Updated") 
        const interval = setInterval(setTime, 1000);
       return () => {
           console.log("component is UN Mounted")
           clearInterval(interval)
       }
    })

    
    const setTime = () => {
        setDateTime(new Date().toString());
    }
   

    return (
        <div>
            <h1> Use Effect Hook </h1>
            <div style={{paddingTop: 10 + 'px'}}>
                <h2> {dateTime} </h2>
            </div>
        </div>
    );
}

export default UseStateHook;