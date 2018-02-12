import { createStore } from 'redux';

// Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});

const setCount = ({ count }) => ({
    type: 'SET',
    count,
});

const resetCount = () => ({
    type: 'RESET',
});

// Reducers
// 1. Pure functions: Output depends only on the input i.e.  action
// 2. Pure functions: Don't use / update values out of scope
// 3. Never change state or action

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return { count: state.count + action.incrementBy };

    case 'DECREMENT':
        return { count: state.count - action.decrementBy };

    case 'SET':
        return { count: action.count };

    case 'RESET':
        return { count: 0 };

    default:
        return state;
    }
});


// Usage
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'RESET',
// });
store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

// store.dispatch({
//     type: 'DECREMENT',
// });

// store.dispatch({
//     type: 'SET',
//     count: 100,
// });

store.dispatch(setCount({ count: 10 }));
store.dispatch(resetCount());
