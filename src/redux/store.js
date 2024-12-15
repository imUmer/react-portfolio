import { createStore } from "redux";

const initialState = {
    count:0,
    add:0,
    loading:false
}

function counterReducer( state= initialState, action ) {
    switch(action.type){
        case "INCREMENT":
            return { ...state, add: state.add + 2,  count: state.count + 1, loading: action.loading };
        case "DECREMENT":
            return { ...state, add: state.add - 2,  count: state.count - 1, loading: action.loading};
        case "SET_LOADING":
            return { ...state, loading: action.loading };
        default:
            return state;
    }

}

const store = createStore(counterReducer);

export default store;
