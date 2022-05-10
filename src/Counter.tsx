import React, { useReducer } from 'react';

const Counter = () => {
    const reducerFunction = (state:number, action:string) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        }
    };

    const [counter, dispatch] = useReducer(reducerFunction, 0);
    return (
        <>
            <p>カウント：{counter}</p>
            <button onClick={() => dispatch('increment')}>+1</button>
            <button onClick={() => dispatch('decrement')}>-1</button>
            <button onClick={() => dispatch('reset')}>RESET</button>
        </>
    )
}

export default Counter