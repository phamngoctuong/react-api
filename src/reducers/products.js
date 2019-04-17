import * as types from './../constants/ActionTypes';
var initialState = [];
var products = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS : 
        state = action.products;
        return [...state];
        break;
        default: 
            return [...state];
        break;
    }
};
export default products;