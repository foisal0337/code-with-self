// define constant 
// initial state 
// action -> type and paylod
// reducer -> parametter kishabe state and action nibe
// store -> createStore() , getStore() 
// store subscribe() 
// store dispatch

const { createStore } = require("redux");


// constant
const INCRIMENT = "INCRIMENT";
const DECRIMENT = "DECRIMENT";
const RESET = "RESET";


// state
const initialState = {
    count : 0,
}


// action
const incrimentCounter = () =>{
    return{
        type : INCRIMENT
    }
}
const decrimentCounter = () =>{
    return{
        type: DECRIMENT
    }
}
const resetCounter = () =>{
    return{
        type : RESET
    }
}

// reducer 
const reducerCounter = ( state = initialState ,action) =>{
    switch(action.type) {
        case INCRIMENT:
            return{
                ...state,
                count : state.count + 1
            }
            break;
        case DECRIMENT:
            return{
                ...state,
                count : state.count - 1 
            }
            break;
        case RESET:
            return{
                ...state,
                count : 0
            }
            break;
        default:
           return state;
    }
}

//create store 
const store = createStore(reducerCounter);

// store subscribe
store.subscribe( ()=>{
    console.log(store.getState());
})

// store dispatch
store.dispatch(incrimentCounter());
store.dispatch(decrimentCounter());
store.dispatch(incrimentCounter());
store.dispatch(incrimentCounter());
store.dispatch(incrimentCounter());
store.dispatch(incrimentCounter());


