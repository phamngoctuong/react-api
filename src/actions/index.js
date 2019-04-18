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
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return apiCaller(`products/${id}`,'DELETE',null).then(respon => {
            dispatch(actDeleteProduct(id));
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return apiCaller('products','POST',product).then(respon => {
            dispatch(actAddProduct(respon.data));
        });
    }
}
export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}