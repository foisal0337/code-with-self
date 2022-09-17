// define constant 
// initial state 
// action -> type and paylod
// reducer -> parametter kishabe state and action nibe
// store -> createStore() , getStore() 
// store subscribe() 
// store dispatch

const { createStore } = require("redux");

//constant 
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// initial state 
const initialState = {
    products : ["Apple" , "Mango"],
    count:2
}

// action 
const getProduct = () =>{
    return{
        type : GET_PRODUCT
    }
}
const addProduct = (item) =>{
    return{
        type : ADD_PRODUCT,
        payload : item,
    }
}


// reducer
const productReducer = ( state = initialState , action) =>{
    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state
            }
            break;
        case ADD_PRODUCT:
            return{
               products: [...state.products, action.payload],
               count : state.count + 1
            }
            break;
        default:
           return state;
    }
}


// store 
const store = createStore(productReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct("pen"));
store.dispatch(addProduct("pencil"));


