import * as types from './../constants/ActionTypes';
import apiCaller from './../utils/apiCaller';
export const actFetchProductsRequest = (products) => {
    return (dispatch)=> {
        return apiCaller('products','GET',null).then(respon => {
            dispatch(actFetchProducts(respon.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}