import * as types from './../constants/ActionTypes';
findIndex = (products,id) => {
    var result = -1;
    products.forEach((product,index)=>{
        if(product.id === id) {
            result = index;
        }
    })
    return result;
};
var initialState = [];
var products = (state=initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.FETCH_PRODUCTS : 
        state = action.products;
        return [...state];
        break;
        case types.DELETE_PRODUCT : 
        index = findIndex(state,action.id);
        state.splice(index,1);
        return [...state];
        case types.ADD_PRODUCT :
        state.push(actions.product);
        return [...state];
        default: 
            return [...state];
        break;
    }
};
export default products;