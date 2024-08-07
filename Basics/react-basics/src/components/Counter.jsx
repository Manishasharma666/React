import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    //count is state variable which tells about state of a component at particular time. changing in state of component will change the value of count

    function increment(){
        setCount(count + incrementBy);
    }

    function decrement(){
        setCount(count - incrementBy);
    }

    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }

    function decreaseIncrement(){
        setIncrementBy(incrementBy -1);
    }

    return(
        <div>
            <h1>Value of count is : {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>


            <h1>Incrementing the value by: {incrementBy}</h1>
            <button onClick={increaseIncrement}>increment by</button>
            <button onClick={decreaseIncrement}>deccrement by</button>
        </div>

     
    )
}