//import useState
import React, {useState} from 'react';

function Counter() {
    // Declare a new state variable: "count" to keep track
    // '0' => initial value => can be number, string, object, array
    // const [stateValue, updaterFunction] = useState(initialValue);

    // function "lazy initializer"
    const [count, setCount] = useState(() => 0);
    
    return (
        <div className='Counter'>
            <h2>Counter</h2>
            {/* <p>Your clicked 0 times</p> */}
            {/* <-- use the VARIABLE the "count" or "banana" [banana, setBanana] here */}
            <p>Your clicked {count} times!</p> 

            {/* setCount(count + 1); => re-render the Counter component, passing new count values */}
            {/* <button onClick={()=> setCount(count - 1)}> - </button> */}
            {/* <button onClick={()=> setCount(count + 1)}> + </button> */}
            
            {/* UPADTE a state a functional update */}
            <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>

            {/* EVENT */}
            {/* <button onClick={() => handleClick()}> Click Here </button> */}
        </div>
    )
}
export default Counter;