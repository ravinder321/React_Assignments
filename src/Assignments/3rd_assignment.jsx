import React, { useState } from "react";

function Parentclass() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(0)}>Reset</button>
            <Childclass count={count} setcount={setCount}/>
        </div>
    );
}

function Childclass({count, setcount}) {
    return (
        <div>
            <h1>Child Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setcount(count + 1)}>increment</button>
            <button onClick={() => setcount(count - 1)}>decrement</button>
        </div>
    );
};

export default Parentclass;