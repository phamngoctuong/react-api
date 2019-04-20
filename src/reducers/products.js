var initialState = [
    {
        id:1,
        name: "Iphone 5 Plus",
        price: 500,
        status: true
    },
    {
        id:2,
        name: "Iphone 5 Plus",
        price: 500,
        status: false
    },
    {
        id:3,
        name: "Iphone 6 Plus",
        price: 600,
        status: false
    }
];
var products = (state=initialState,action) => {
    switch(action.type) {
        default:
        return [...state];
        break;
    }
};
export default products;