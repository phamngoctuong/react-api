import * as types from './../constants/ActionTypes';
var initialState = {};
var itemEditting = (state=initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT : 
            return action.product;
        break;
        default: 
            return state;
        break;
    }
};
export default itemEditting;