import React, { useState } from 'react'


const ReactHooks = () => {

    const state = useState();

    //console.log(state);
    //const [count, setCount] = useState(0);

    const [count, setCount] = useState(0);

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCTime] = useState(newTime);

    //let count = 1;
    const UpdateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setCTime(newTime);
        console.log('clicked ');
    }

    setInterval(UpdateTime, 1000);
    //let count = 1;
    const IncNum = () => {
        setCount(count + 1);
        //console.log('clicked ' + count++);
    }

    return (
        <div className="react-hooks">
            <h1>{count}</h1>
            <button onClick={IncNum} className="btn btn-primary">Click Me</button>
            <h1>{newTime}</h1>
            <button onClick={UpdateTime} className="btn btn-primary">Click Me</button>
        </div>

    );
}

export default ReactHooks;