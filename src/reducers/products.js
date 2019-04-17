import * as types from './../constants/ActionTypes';
var initialState = [
    {
        id: 1,
        name: "Iphone 6 Plus",
        price: 600,
        status: true
    },
    {
        id: 2,
        name: "Iphone 7 Plus",
        price: 700,
        status: false
    },
    {
        id: 3,
        name: "Iphone 8 Plus",
        price: 800,
        status: true
    },
    {
        id: 4,
        name: "Iphone 9 Plus",
        price: 900,
        status: true
    }
];
var products = (state=initialState, action) => {
    switch (action.type) {
        default: 
            return [...state];
        break;
    }
};
export default products;